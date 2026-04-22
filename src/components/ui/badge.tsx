import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "success" | "warning" | "destructive" | "outline";

const variants: Record<Variant, string> = {
  default:     "border-orange-500/30 bg-orange-500/10 text-orange-400",
  secondary:   "border-[#2a2a34] bg-[#1e1e24] text-[#7a7a92]",
  success:     "border-green-500/30 bg-green-500/10 text-green-400",
  warning:     "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
  destructive: "border-red-500/30 bg-red-500/10 text-red-400",
  outline:     "border-[#2a2a34] text-[#7a7a92]",
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center border px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
