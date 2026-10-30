import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="xm-card flex min-h-15.5 items-center gap-3.25 px-3 py-2.75 phone:min-h-16.25 phone:p-3 frame:min-h-17.5">
      <div className="xm-icon-circle" aria-hidden="true">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base  font-bold  font-hanuman">{title}</h3>
        <p className="mt-0.75 text-sm  text-xm-text-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
