import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  rel?: string;
  size?: "sm" | "md";
  target?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost" | "dark-secondary";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full text-center text-sm font-bold transition focus-visible:outline-none";

const sizeClasses = {
  sm: "px-5 py-3",
  md: "px-7 py-3",
};

const variantClasses = {
  primary:
    "cta-aura bg-[linear-gradient(135deg,#6d4dff_0%,#8f55ff_52%,#2cc9ff_100%)] text-white shadow-[0_16px_36px_rgba(109,77,255,0.2)] hover:shadow-[0_18px_42px_rgba(109,77,255,0.24)]",
  secondary:
    "border border-[rgba(37,99,235,0.16)] bg-[linear-gradient(135deg,rgba(124,58,237,0.04),rgba(36,201,255,0.1))] text-[var(--navy-soft)] hover:border-[rgba(37,99,235,0.3)] hover:bg-[linear-gradient(135deg,rgba(124,58,237,0.06),rgba(36,201,255,0.14))]",
  ghost:
    "border border-[var(--line-strong)] bg-white text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)]",
  "dark-secondary":
    "border border-white/16 bg-[rgba(255,255,255,0.08)] text-white hover:border-[rgba(121,228,255,0.35)] hover:bg-[rgba(255,255,255,0.12)]",
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function CTAButton({
  children,
  className = "",
  href,
  rel,
  size = "md",
  target,
  type = "button",
  variant = "primary",
}: CTAButtonProps) {
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!href) {
    return (
      <button type={type} className={classes}>
        {children}
      </button>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
