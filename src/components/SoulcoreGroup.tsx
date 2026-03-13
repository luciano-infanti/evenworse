import type { SoulcoreZone } from "../data/character";

interface SoulcoreGroupProps {
  zones: SoulcoreZone[];
  totalMasteries: number;
  totalExpBonus: string;
}

export default function SoulcoreGroupView({
  zones,
  totalMasteries,
  totalExpBonus,
}: SoulcoreGroupProps) {
  return (
    <div className="space-y-5">
      {zones.map((zone) => (
        <div key={zone.zone}>
          <h3 className="mb-2 text-sm font-semibold text-accent-dim uppercase tracking-wide">
            {zone.zone}
          </h3>
          <div className="space-y-1">
            {zone.groups.map((g) => {
              const complete = g.current === g.total;
              return (
                <div
                  key={g.name}
                  className="flex items-center justify-between rounded px-2 py-1.5 text-sm odd:bg-zinc-800/50"
                >
                  <span className="flex items-center gap-2 text-zinc-300">
                    <span
                      className={
                        complete ? "text-positive" : "text-zinc-500"
                      }
                    >
                      {complete ? "✓" : "○"}
                    </span>
                    {g.name}
                  </span>
                  <span className="font-mono text-zinc-400">
                    {g.current}/{g.total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-3 rounded border border-accent/20 bg-accent/5 px-4 py-3 text-sm">
        <span className="text-zinc-400">Total: </span>
        <span className="font-semibold text-accent">
          {totalMasteries} Animus Masteries
        </span>
        <span className="text-zinc-500"> — </span>
        <span className="text-positive font-medium">
          {totalExpBonus} exp extra
        </span>
      </div>
    </div>
  );
}
