import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  title,
  icon,
  description,
  className = "",
}: FeatureProps) {
  return (
    <div className={`card w-full bg-neutral-50 ${className}`}>
      <div className="card-body space-y-4">
        {icon}
        <h4 className="card-title text-neutral-900">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
