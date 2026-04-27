import { FORMAT_LIST } from "@/lib/converter/formats";
import type { EbookFormat } from "@/lib/converter/types";

interface FormatPickerProps {
  value: EbookFormat | null;
  onChange: (fmt: EbookFormat) => void;
  disabledFormat?: EbookFormat;
}

export function FormatPicker({ value, onChange, disabledFormat }: FormatPickerProps) {
  return (
    <div role="radiogroup" aria-label="Target format" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {FORMAT_LIST.map((fmt) => {
        const isSelected = value === fmt.id;
        const isDisabled = disabledFormat === fmt.id;
        return (
          <button
            key={fmt.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            onClick={() => onChange(fmt.id)}
            className={[
              "group relative text-left rounded-xl border p-4 transition-smooth",
              "focus-visible:outline-none",
              isSelected
                ? "border-primary bg-brand-soft shadow-glow"
                : "border-border bg-secondary/40 hover:border-primary/50 hover:bg-secondary/60",
              isDisabled && "opacity-40 cursor-not-allowed hover:border-border hover:bg-secondary/40",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-semibold">{fmt.label}</span>
              <span
                className={[
                  "h-4 w-4 rounded-full border transition-smooth",
                  isSelected ? "border-primary bg-primary shadow-glow" : "border-border",
                ].join(" ")}
                aria-hidden
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {fmt.description}
            </p>
            {isDisabled && (
              <span className="mt-2 inline-block text-[10px] uppercase tracking-wider text-warning">
                Same as source
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
