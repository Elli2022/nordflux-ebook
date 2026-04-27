export type EbookFormat = "epub" | "mobi" | "pdf" | "txt" | "docx";

export type ConversionStatus =
  | "idle"
  | "uploading"
  | "validating"
  | "converting"
  | "success"
  | "error";

export interface FormatInfo {
  id: EbookFormat;
  label: string;
  extension: string;
  mime: string;
  description: string;
}

export interface UploadedFile {
  file: File;
  safeName: string;
  sizeLabel: string;
  ext: string;
}

export interface ConversionResult {
  blob: Blob;
  filename: string;
  format: EbookFormat;
  bytes: number;
  durationMs: number;
}

export interface StepDef {
  id: number;
  key: "upload" | "format" | "convert" | "download";
  label: string;
  description: string;
}
