import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="rounded-lg border border-card-border bg-card p-5 md:p-6">
        <h2 className="mb-4 text-lg font-bold tracking-wide text-accent uppercase">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
