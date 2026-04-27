import { Check } from "lucide-react";
import { STEPS } from "@/lib/converter/formats";

interface StepperProps {
  current: 1 | 2 | 3 | 4;
}

export function Stepper({ current }: StepperProps) {
  return (
    <ol className="flex items-center justify-between gap-2 md:gap-4" aria-label="Conversion progress">
      {STEPS.map((step, idx) => {
        const isDone = current > step.id;
        const isActive = current === step.id;
        return (
          <li key={step.id} className="flex-1 flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={[
                  "h-9 w-9 shrink-0 rounded-full grid place-items-center text-sm font-semibold transition-smooth border",
                  isDone
                    ? "bg-brand text-primary-foreground border-transparent shadow-glow"
                    : isActive
                      ? "bg-secondary text-foreground border-primary/60 shadow-glow"
                      : "bg-secondary/50 text-muted-foreground border-border",
                ].join(" ")}
                aria-current={isActive ? "step" : undefined}
              >
                {isDone ? <Check className="h-4 w-4" aria-hidden /> : step.id}
              </div>
              <div className="min-w-0 hidden sm:block">
                <p className={["text-sm font-medium truncate", isActive || isDone ? "text-foreground" : "text-muted-foreground"].join(" ")}>
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground truncate">{step.description}</p>
              </div>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={[
                  "flex-1 h-px transition-smooth",
                  current > step.id ? "bg-gradient-to-r from-primary to-accent" : "bg-border",
                ].join(" ")}
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
