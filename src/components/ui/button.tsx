import React from "react";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-500",
    outline: "border border-white/25 bg-transparent text-white hover:bg-white/10",
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
