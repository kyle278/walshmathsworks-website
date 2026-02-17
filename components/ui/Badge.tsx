import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "green" | "gold" | "navy" | "slate";

const variantStyles: Record<BadgeVariant, string> = {
  blue: "bg-green-light text-green",
  green: "bg-green/10 text-green-dark",
  gold: "bg-gold-light text-gold",
  navy: "bg-navy text-white",
  slate: "bg-slate-100 text-slate-600",
};

export default function Badge({
  variant = "blue",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
