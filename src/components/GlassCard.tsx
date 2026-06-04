import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <section
      className={`rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md ${className}`}
    >
      {children}
    </section>
  );
}
