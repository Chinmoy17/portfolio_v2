interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="font-display text-sm tracking-widest text-accent-soft">
        {index}
      </span>
      <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted">{description}</p>
      )}
    </div>
  );
}
