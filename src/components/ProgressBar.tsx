import { useState } from "react";

interface ProgressBarProps {
  label: string;
  level: number;
  maxLevel?: number;
  progress?: number;
  imageSrc?: string;
}

export default function ProgressBar({
  label,
  level,
  maxLevel = 7,
  progress,
  imageSrc,
}: ProgressBarProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPartial = progress !== undefined && progress > 0 && progress < 100;

  return (
    <div className="flex items-center gap-3">
      {imageSrc && !imgFailed && (
        <img
          src={imageSrc}
          alt={label}
          className="h-8 w-8 shrink-0 object-contain"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-zinc-300">{label}</span>
          <span className="font-mono text-xs text-zinc-500">
            {level}/{maxLevel}
          </span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: maxLevel }, (_, i) => {
            const segLevel = i + 1;
            const isComplete = segLevel <= level && !(segLevel === level && hasPartial);
            const isPartial = segLevel === level && hasPartial;
            const isEmpty = segLevel > level;

            let bg = "bg-white/10";
            if (isComplete) bg = "bg-positive";
            if (isPartial) bg = "bg-accent";

            return (
              <div
                key={segLevel}
                className={`h-1.5 flex-1 rounded-sm ${bg}`}
                title={
                  isPartial
                    ? `Lv ${segLevel} (${progress}%)`
                    : `Lv ${segLevel}`
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
