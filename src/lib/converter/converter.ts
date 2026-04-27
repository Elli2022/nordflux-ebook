/**
 * Simulated converter — DEMO MODE.
 *
 * This module intentionally does NOT perform real e-book conversion.
 * It returns a generated demo file in the requested target format so the
 * UI can be developed and showcased without a backend. Replace the
 * `runDemoConversion` implementation with a real backend call (e.g. an
 * Edge Function or microservice) when ready.
 */

import { FORMATS } from "./formats";
import type { ConversionResult, EbookFormat } from "./types";
import { sanitizeFilename } from "./validation";

export interface ConversionOptions {
  source: File;
  target: EbookFormat;
  onProgress?: (pct: number, label: string) => void;
  signal?: AbortSignal;
}

const PHASES: Array<{ pct: number; label: string; delay: number }> = [
  { pct: 12, label: "Reading source bytes", delay: 350 },
  { pct: 30, label: "Parsing structure", delay: 500 },
  { pct: 55, label: "Normalizing content", delay: 600 },
  { pct: 78, label: "Encoding target format", delay: 550 },
  { pct: 94, label: "Finalizing package", delay: 400 },
  { pct: 100, label: "Done", delay: 250 },
];

function buildDemoPayload(sourceName: string, target: EbookFormat): string {
  const target_label = FORMATS[target].label;
  return [
    `DEMO CONVERSION OUTPUT`,
    `=====================`,
    ``,
    `Source: ${sourceName}`,
    `Target: ${target_label}`,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `This file was produced by the Convertor demo pipeline.`,
    `No real format conversion was performed in this build.`,
    `Connect a real conversion backend to ship production files.`,
    ``,
    `— Convertor`,
  ].join("\n");
}

function delay(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException("Aborted", "AbortError"));
    const t = setTimeout(resolve, ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

export async function runDemoConversion(opts: ConversionOptions): Promise<ConversionResult> {
  const { source, target, onProgress, signal } = opts;
  const started = performance.now();

  for (const phase of PHASES) {
    await delay(phase.delay, signal);
    onProgress?.(phase.pct, phase.label);
  }

  const fmt = FORMATS[target];
  const baseName = sanitizeFilename(source.name.replace(/\.[^.]+$/, ""));
  const filename = `${baseName}.${fmt.extension}`;
  const payload = buildDemoPayload(source.name, target);
  // We tag the blob with the target mime so downloads behave naturally,
  // even though the bytes themselves are plain-text demo content.
  const blob = new Blob([payload], { type: fmt.mime });

  return {
    blob,
    filename,
    format: target,
    bytes: blob.size,
    durationMs: Math.round(performance.now() - started),
  };
}

export function downloadResult(result: ConversionResult): void {
  const url = URL.createObjectURL(result.blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = result.filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
