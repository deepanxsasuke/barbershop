interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  badge?: string;
  badgeColor?: "gold" | "green" | "red";
}

export function StatCard({ icon, label, value, badge, badgeColor = "gold" }: StatCardProps) {
  const badgeStyles = {
    gold: "text-primary bg-primary/10 border-primary/20",
    green: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    red: "text-red-400 bg-red-400/10 border-red-400/20",
  };

  return (
    <div className="glassmorphism p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        {badge && (
          <span
            className={`font-montserrat text-xs font-bold px-2.5 py-1 rounded-full border ${badgeStyles[badgeColor]}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="relative z-10">
        <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">
          {label}
        </p>
        <p className="font-playfair text-3xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
