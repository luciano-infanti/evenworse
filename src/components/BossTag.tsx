import { useState } from "react";

interface BossTagProps {
  name: string;
  src?: string;
}

export default function BossTag({ name, src }: BossTagProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-positive/20 bg-positive/5 pr-3 py-1 text-xs text-positive">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="ml-1 h-7 w-7 object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="ml-3" />
      )}
      {name}
    </span>
  );
}
