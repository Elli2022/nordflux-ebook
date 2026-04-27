import { CheckCircle2, Download, FileText, Loader2, RotateCcw, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { ConversionResult, ConversionStatus, UploadedFile } from "@/lib/converter/types";
import { FORMATS } from "@/lib/converter/formats";
import { formatBytes } from "@/lib/converter/validation";

interface ConvertPanelProps {
  file: UploadedFile;
  targetLabel: string;
  status: ConversionStatus;
  progress: number;
  progressLabel: string;
  result: ConversionResult | null;
  onStart: () => void;
  onDownload: () => void;
  onReset: () => void;
  onRemoveFile: () => void;
}

export function ConvertPanel({
  file,
  targetLabel,
  status,
  progress,
  progressLabel,
  result,
  onStart,
  onDownload,
  onReset,
  onRemoveFile,
}: ConvertPanelProps) {
  const isWorking = status === "converting" || status === "uploading" || status === "validating";
  const isDone = status === "success" && result;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 p-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-brand grid place-items-center">
            <FileText className="h-5 w-5 text-primary-foreground" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium text-foreground">{file.safeName}</p>
            <p className="text-xs text-muted-foreground">
              {file.ext.toUpperCase().replace(".", "")} · {file.sizeLabel}
              {targetLabel && <span className="mx-1.5 opacity-50">→</span>}
              <span className="text-accent font-medium">{targetLabel}</span>
            </p>
          </div>
        </div>
        {!isWorking && (
          <button
            type="button"
            onClick={onRemoveFile}
            aria-label="Remove file"
            className="h-9 w-9 grid place-items-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>

      {(isWorking || isDone) && (
        <div className="space-y-2 animate-fade-up">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground inline-flex items-center gap-2">
              {isDone ? (
                <CheckCircle2 className="h-4 w-4 text-success" aria-hidden />
              ) : (
                <Loader2 className="h-4 w-4 text-accent animate-spin" aria-hidden />
              )}
              {isDone ? "Conversion complete" : progressLabel}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {isDone && result && (
        <div className="rounded-xl border border-success/30 bg-success/5 p-4 animate-scale-in">
          <p className="text-sm font-medium text-foreground">
            {result.filename}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {FORMATS[result.format].label} · {formatBytes(result.bytes)} · ready in {(result.durationMs / 1000).toFixed(1)}s
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-wider text-warning">
            Demo output — connect a real converter to ship production files.
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {!isDone ? (
          <button
            type="button"
            onClick={onStart}
            disabled={isWorking}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-95"
          >
            {isWorking ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Converting…
              </>
            ) : (
              <>Convert now</>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:opacity-95"
          >
            <Download className="h-4 w-4" aria-hidden /> Download {result?.filename}
          </button>
        )}
        <button
          type="button"
          onClick={onReset}
          disabled={isWorking}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-5 text-sm font-medium text-foreground hover:bg-secondary transition-smooth disabled:opacity-50"
        >
          <RotateCcw className="h-4 w-4" aria-hidden /> Start over
        </button>
      </div>
    </div>
  );
}
