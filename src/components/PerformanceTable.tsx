import type { HuntPerformance } from "../data/character";

interface PerformanceTableProps {
  hunts: HuntPerformance[];
  link: string;
}

export default function PerformanceTable({
  hunts,
  link,
}: PerformanceTableProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700 text-left text-zinc-500">
              <th className="pb-2 pr-4 font-medium">Hunt (Solo)</th>
              <th className="pb-2 pr-4 text-right font-medium">Raw Exp</th>
              <th className="pb-2 text-right font-medium">Profit</th>
            </tr>
          </thead>
          <tbody>
            {hunts.map((h) => (
              <tr
                key={h.label}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <td className="py-2 pr-4 text-zinc-300">{h.label}</td>
                <td className="py-2 pr-4 text-right font-mono text-zinc-100">
                  {h.rawExp}
                </td>
                <td className="py-2 text-right font-mono text-positive">
                  {h.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-accent underline underline-offset-2 hover:text-accent-dim"
      >
        Ver mais no Rubinot
      </a>
    </div>
  );
}
