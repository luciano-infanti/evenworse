interface StatRowProps {
  label: string;
  value: string;
}

export default function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-zinc-800 py-2 last:border-b-0">
      <span className="text-zinc-400">{label}</span>
      <span className="font-mono font-medium text-zinc-100">{value}</span>
    </div>
  );
}
