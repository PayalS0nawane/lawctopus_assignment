export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-ink/5 text-ink",
    brass: "bg-brass/10 text-brass",
    legal: "bg-legal/10 text-legal",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}