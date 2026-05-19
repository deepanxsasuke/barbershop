interface BadgeProps {
  label: string;
  variant?: "gold" | "neutral" | "success" | "warning" | "error";
  dot?: boolean;
}

export function Badge({ label, variant = "gold", dot = false }: BadgeProps) {
  const styles = {
    gold: "bg-primary/10 text-primary border-primary/20",
    neutral: "bg-white/5 text-white/50 border-white/10",
    success: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    warning: "bg-amber-400/10 text-amber-400 border-amber-400/20",
    error: "bg-red-400/10 text-red-400 border-red-400/20",
  };

  const dotColors = {
    gold: "bg-primary",
    neutral: "bg-white/40",
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    error: "bg-red-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full font-montserrat text-xs font-semibold border ${styles[variant]}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {label}
    </span>
  );
}
