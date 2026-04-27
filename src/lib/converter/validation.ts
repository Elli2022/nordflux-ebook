import { ACCEPTED_EXTENSIONS, MAX_FILE_BYTES, MAX_FILE_LABEL } from "./formats";

export interface ValidationResult {
  ok: boolean;
  error?: string;
}

export function getExtension(name: string): string {
  const idx = name.lastIndexOf(".");
  return idx >= 0 ? name.slice(idx).toLowerCase() : "";
}

/** Strip path separators, control chars, collapse whitespace. */
export function sanitizeFilename(name: string): string {
  const base = name.replace(/[\\/]/g, "_").replace(/[\x00-\x1f]/g, "");
  // eslint-disable-next-line no-control-regex
  const cleaned = base.replace(/[<>:"|?*]/g, "").trim();
  const collapsed = cleaned.replace(/\s+/g, " ");
  return collapsed.length > 120 ? collapsed.slice(0, 117) + "..." : collapsed || "file";
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

export function validateFile(file: File | null | undefined): ValidationResult {
  if (!file) return { ok: false, error: "No file selected." };
  if (file.size === 0) return { ok: false, error: "This file is empty." };
  if (file.size > MAX_FILE_BYTES) {
    return { ok: false, error: `File exceeds the ${MAX_FILE_LABEL} limit.` };
  }
  const ext = getExtension(file.name);
  if (!ACCEPTED_EXTENSIONS.includes(ext)) {
    return {
      ok: false,
      error: `Unsupported file type "${ext || "unknown"}". Allowed: ${ACCEPTED_EXTENSIONS.join(", ")}.`,
    };
  }
  return { ok: true };
}
