"use client";

import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

interface SearchInputField extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  containerClassName?: string;
}

export default function SearchInput({
  type = "search",
  className = "",
  containerClassName = "",
  icon: Icon,
  ...inputProps
}: SearchInputField) {
  return (
    <div
      className={`flex w-full items-center gap-2 px-3 ${containerClassName}`}>
      <input
        type={type}
        className={`min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none ${className}`}
        {...inputProps}
      />

      {Icon && (
        <Icon size={20} className="shrink-0 text-gray-500" aria-hidden="true" />
      )}
    </div>
  );
}
