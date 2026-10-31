"use client";

import type { InputHTMLAttributes } from "react";

interface InputField extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  type = "text",
  className = "",
  ...inputProps
}: InputField) {
  return (
    <div className="flex w-full items-center gap-2 px-3">
      <input
        type={type}
        className={`min-w-0 flex-1 rounded-md border border-[#dfe4df] bg-white px-3 py-2.5 text-sm text-[#152943] outline-none transition placeholder:text-[#9aa3ab] focus-within:border-[#e4b92d] focus-within:ring-2 focus-within:ring-[#f7ce3c]/20"focus:ring-2 focus:ring-[#eaf5ec] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        {...inputProps}
      />
    </div>
  );
}
