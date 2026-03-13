import { useState } from "react";

interface ImageTagProps {
  label: string;
  src?: string;
}

export default function ImageTag({ label, src }: ImageTagProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 pr-3 py-1 text-sm text-zinc-200">
      {src && !failed ? (
        <img
          src={src}
          alt={label}
          className="ml-1 h-8 w-8 object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="ml-3" />
      )}
      {label}
    </span>
  );
}
