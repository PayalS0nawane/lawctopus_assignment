export default function ClauseMarker({ number, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brass ${className}`}
    >
      <span className="inline-block h-px w-5 bg-brass/60" aria-hidden="true" />
      {number}
    </span>
  );
}