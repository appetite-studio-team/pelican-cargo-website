import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

export default function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <>
      <div className={`relative flex overflow-x-hidden ${className}`}>
        <div className="animate-marquee flex items-center py-12 whitespace-nowrap">
          {children}
        </div>
        <div className="animate-marquee2 absolute top-0 flex items-center py-8 whitespace-nowrap lg:py-12">
          {children}
        </div>
      </div>
    </>
  );
}
