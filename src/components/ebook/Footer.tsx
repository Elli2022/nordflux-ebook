export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-border">
      <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary border-2 border-border grid place-items-center">
            <span className="font-display text-sm">C</span>
          </div>
          <span className="font-display text-base">CONVERTOR</span>
          <span className="text-muted-foreground">— marknadsföring som rör sig.</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Convertor · 2026 Report v1.0
        </p>
      </div>
    </footer>
  );
}
