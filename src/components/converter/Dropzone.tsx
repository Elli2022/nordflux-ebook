import { useCallback, useRef, useState } from "react";
import { UploadCloud, FileUp } from "lucide-react";
import { ACCEPTED_EXTENSIONS, MAX_FILE_LABEL } from "@/lib/converter/formats";
import { validateFile } from "@/lib/converter/validation";

interface DropzoneProps {
  onFile: (file: File) => void;
  onError: (msg: string) => void;
  disabled?: boolean;
}

export function Dropzone({ onFile, onError, disabled }: DropzoneProps) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handle = useCallback(
    (file: File | null | undefined) => {
      const result = validateFile(file ?? null);
      if (!result.ok) {
        onError(result.error ?? "Invalid file.");
        return;
      }
      onFile(file as File);
    },
    [onFile, onError]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Upload e-book file"
      aria-disabled={disabled}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={(e) => {
        e.preventDefault();
        setHover(false);
        if (disabled) return;
        const f = e.dataTransfer.files?.[0];
        handle(f);
      }}
      className={[
        "relative w-full rounded-2xl border-2 border-dashed p-10 md:p-14 text-center transition-smooth cursor-pointer",
        "outline-none focus-visible:ring-0",
        disabled
          ? "opacity-60 pointer-events-none border-border bg-secondary/30"
          : hover
            ? "border-primary bg-brand-soft shadow-glow"
            : "border-border bg-secondary/30 hover:border-primary/60 hover:bg-secondary/50",
      ].join(" ")}
    >
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS.join(",")}
        className="sr-only"
        onChange={(e) => handle(e.target.files?.[0])}
      />

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand shadow-glow">
        <UploadCloud className="h-8 w-8 text-primary-foreground" aria-hidden />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold">
        Drop your file here
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        or <span className="text-foreground font-medium underline underline-offset-4">browse from your device</span>
      </p>

      <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-2.5 py-1">
          <FileUp className="h-3 w-3" aria-hidden /> {ACCEPTED_EXTENSIONS.join(" · ")}
        </span>
        <span className="rounded-full border border-border bg-background/60 px-2.5 py-1">
          Max {MAX_FILE_LABEL}
        </span>
      </div>
    </div>
  );
}
