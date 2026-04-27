import type { EbookFormat, FormatInfo, StepDef } from "./types";

export const MAX_FILE_BYTES = 50 * 1024 * 1024; // 50 MB
export const MAX_FILE_LABEL = "50 MB";

export const FORMATS: Record<EbookFormat, FormatInfo> = {
  epub: {
    id: "epub",
    label: "EPUB",
    extension: "epub",
    mime: "application/epub+zip",
    description: "Open standard for e-readers (Apple Books, Kobo).",
  },
  mobi: {
    id: "mobi",
    label: "MOBI",
    extension: "mobi",
    mime: "application/x-mobipocket-ebook",
    description: "Legacy Kindle format. Best for older devices.",
  },
  pdf: {
    id: "pdf",
    label: "PDF",
    extension: "pdf",
    mime: "application/pdf",
    description: "Fixed-layout document. Universal and printable.",
  },
  txt: {
    id: "txt",
    label: "TXT",
    extension: "txt",
    mime: "text/plain",
    description: "Plain text. Tiny and universally readable.",
  },
  docx: {
    id: "docx",
    label: "DOCX",
    extension: "docx",
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    description: "Editable Word document with formatting.",
  },
};

export const FORMAT_LIST: FormatInfo[] = Object.values(FORMATS);

export const ACCEPTED_EXTENSIONS = [".epub", ".mobi", ".pdf", ".txt", ".docx"];

export const ACCEPTED_MIME_TYPES = FORMAT_LIST.map((f) => f.mime);

export const STEPS: StepDef[] = [
  { id: 1, key: "upload", label: "Upload", description: "Drop your file" },
  { id: 2, key: "format", label: "Format", description: "Choose target" },
  { id: 3, key: "convert", label: "Convert", description: "We process it" },
  { id: 4, key: "download", label: "Download", description: "Grab the file" },
];
