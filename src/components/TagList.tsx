interface TagListProps {
  items: string[];
}

export default function TagList({ items }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-200"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
