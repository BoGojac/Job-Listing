"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  title?: string;
  icon?: LucideIcon;
}

export default function Button({
  type = "button",
  title,
  children,
  className = "",
  icon: Icon,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#152943] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#294362] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7eaa8b] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...buttonProps}>
      {Icon && <Icon size={18} aria-hidden="true" />}
      {title ?? children}
    </button>
  );
}
