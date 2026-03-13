import { useState } from "react";

interface OutfitCardProps {
  label: string;
  src?: string;
}

export default function OutfitCard({ label, src }: OutfitCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 p-3 min-w-0">
      <div className="flex h-16 w-16 items-center justify-center">
        {src && !failed ? (
          <img
            src={src}
            alt={label}
            className="h-16 w-16 object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-2xl text-zinc-600">?</span>
        )}
      </div>
      <span className="text-center text-xs leading-tight text-zinc-300">
        {label}
      </span>
    </div>
  );
}
