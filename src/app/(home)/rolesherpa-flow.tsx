const steps = [
  { who: 'AI #1', what: 'Drafts' },
  { who: 'AI #2', what: 'Reviews', detail: "Doesn't see the drafter's reasoning" },
  { who: 'Plain code', what: 'Verifies every claim' },
  { who: 'User', what: 'Receives the result' },
];

export function RoleSherpaFlow() {
  return (
    <figure className="mt-5">
      <ol aria-label="How RoleSherpa checks its own work" className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {steps.map((step, i) => (
          <li key={step.who} className="contents">
            <div className="flex-1 rounded-lg border border-fd-border bg-fd-background p-3">
              <div className="font-mono text-[11px] tracking-wide text-fd-muted-foreground uppercase">{step.who}</div>
              <div className="mt-1 text-sm font-semibold">{step.what}</div>
              {step.detail && <div className="mt-1 text-xs text-fd-muted-foreground">{step.detail}</div>}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="rotate-90 self-center text-fd-primary md:rotate-0">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-2 rounded-lg border border-dashed border-fd-primary/50 px-3 py-1.5 text-center text-xs text-fd-primary">
        A record of every decision
      </div>
    </figure>
  );
}
