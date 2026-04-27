import { forwardRef, useCallback, useState } from "react";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";
import { Stepper } from "./Stepper";
import { Dropzone } from "./Dropzone";
import { FormatPicker } from "./FormatPicker";
import { ConvertPanel } from "./ConvertPanel";
import { FORMATS } from "@/lib/converter/formats";
import { formatBytes, getExtension, sanitizeFilename } from "@/lib/converter/validation";
import { downloadResult, runDemoConversion } from "@/lib/converter/converter";
import type {
  ConversionResult,
  ConversionStatus,
  EbookFormat,
  UploadedFile,
} from "@/lib/converter/types";

export const ConverterCard = forwardRef<HTMLDivElement>((_, ref) => {
  const [uploaded, setUploaded] = useState<UploadedFile | null>(null);
  const [target, setTarget] = useState<EbookFormat | null>(null);
  const [status, setStatus] = useState<ConversionStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("");
  const [result, setResult] = useState<ConversionResult | null>(null);

  const sourceExt = uploaded ? uploaded.ext.replace(".", "").toLowerCase() : null;
  const sourceFormat: EbookFormat | undefined =
    sourceExt && (sourceExt in FORMATS) ? (sourceExt as EbookFormat) : undefined;

  const currentStep: 1 | 2 | 3 | 4 = result
    ? 4
    : status === "converting" || status === "uploading" || status === "validating"
      ? 3
      : uploaded
        ? target
          ? 3
          : 2
        : 1;

  const handleFile = useCallback((file: File) => {
    const ext = getExtension(file.name);
    const safe: UploadedFile = {
      file,
      safeName: sanitizeFilename(file.name),
      sizeLabel: formatBytes(file.size),
      ext,
    };
    setUploaded(safe);
    setStatus("idle");
    setProgress(0);
    setProgressLabel("");
    setResult(null);
    // Auto-pick a sensible default target (first format that's not the source)
    const next = (Object.keys(FORMATS) as EbookFormat[]).find(
      (k) => k !== ext.replace(".", "")
    );
    setTarget((prev) => prev ?? next ?? "epub");
    toast.success("File ready", { description: safe.safeName });
  }, []);

  const handleError = useCallback((msg: string) => {
    toast.error("Couldn't accept that file", { description: msg });
  }, []);

  const handleStart = useCallback(async () => {
    if (!uploaded || !target) return;
    if (target === sourceFormat) {
      toast.error("Pick a different target format than the source.");
      return;
    }
    setStatus("converting");
    setProgress(0);
    setProgressLabel("Starting…");
    try {
      const res = await runDemoConversion({
        source: uploaded.file,
        target,
        onProgress: (pct, label) => {
          setProgress(pct);
          setProgressLabel(label);
        },
      });
      setResult(res);
      setStatus("success");
      toast.success("Conversion complete", { description: res.filename });
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Conversion failed", {
        description: err instanceof Error ? err.message : "Unknown error.",
      });
    }
  }, [uploaded, target, sourceFormat]);

  const handleDownload = useCallback(() => {
    if (result) downloadResult(result);
  }, [result]);

  const handleReset = useCallback(() => {
    setUploaded(null);
    setTarget(null);
    setStatus("idle");
    setProgress(0);
    setProgressLabel("");
    setResult(null);
  }, []);

  return (
    <section
      ref={ref}
      id="converter"
      aria-label="E-book converter"
      className="container -mt-10 md:-mt-20 relative z-10"
    >
      <div className="glass-strong rounded-3xl p-6 md:p-10 animate-fade-up">
        <div className="mb-8">
          <Stepper current={currentStep} />
        </div>

        {!uploaded && (
          <Dropzone onFile={handleFile} onError={handleError} />
        )}

        {uploaded && (
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold">Choose target format</h3>
                <p className="text-xs text-muted-foreground">
                  Source detected: <span className="text-foreground font-medium">{sourceFormat?.toUpperCase() ?? "Unknown"}</span>
                </p>
              </div>
              <FormatPicker
                value={target}
                onChange={(f) => setTarget(f)}
                disabledFormat={sourceFormat}
              />
            </div>

            {!target && (
              <div className="flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm text-foreground">
                <AlertCircle className="h-4 w-4 text-warning mt-0.5" aria-hidden />
                <p>Select a target format to continue.</p>
              </div>
            )}

            {target && (
              <ConvertPanel
                file={uploaded}
                targetLabel={FORMATS[target].label}
                status={status}
                progress={progress}
                progressLabel={progressLabel}
                result={result}
                onStart={handleStart}
                onDownload={handleDownload}
                onReset={handleReset}
                onRemoveFile={handleReset}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
});

ConverterCard.displayName = "ConverterCard";
