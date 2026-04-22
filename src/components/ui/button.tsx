"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "default" | "destructive" | "outline" | "ghost" | "link" | "secondary";
type Size = "default" | "sm" | "lg" | "icon";

const variants: Record<Variant, string> = {
  default:     "btn-industrial bg-orange-500 text-black font-mono font-bold tracking-widest uppercase hover:bg-orange-400",
  destructive: "bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs tracking-widest uppercase hover:bg-red-500/20",
  outline:     "border border-[#2a2a34] bg-transparent font-mono text-xs tracking-widest text-[#7a7a92] uppercase hover:border-orange-500/40 hover:text-orange-400",
  ghost:       "font-mono text-xs tracking-widest text-[#7a7a92] uppercase hover:bg-[#0e0e11] hover:text-[#e8e8f0]",
  link:        "font-mono text-xs text-orange-400 uppercase hover:underline p-0 h-auto",
  secondary:   "bg-[#1e1e24] border border-[#2a2a34] font-mono text-xs tracking-widest text-[#e8e8f0] uppercase hover:bg-[#2a2a34]",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4 py-2 text-xs",
  sm:      "h-8 px-3 text-[10px]",
  lg:      "h-12 px-6 text-xs",
  icon:    "h-9 w-9",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
