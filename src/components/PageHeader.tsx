type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-sm backdrop-blur-md">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>

      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
