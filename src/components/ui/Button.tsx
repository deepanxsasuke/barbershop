import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  className = "",
  variant = "primary",
  href,
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-montserrat font-semibold tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#d4af37] to-[#f2d388] text-[#0a0a0a] hover:opacity-90 hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] active:scale-[0.98]",
    secondary:
      "bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 hover:shadow-[0_0_16px_rgba(212,175,55,0.2)] active:scale-[0.98]",
    ghost:
      "text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
