import ClauseMarker from "./ClauseMarker";

export default function SectionHeading({
  clause,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {clause && <ClauseMarker number={`§ ${clause} — ${eyebrow}`} />}
      {!clause && eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-slate text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}