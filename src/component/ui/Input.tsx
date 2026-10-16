import { LucideIcon } from "lucide-react";
import React from "react";

interface InputField {
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  placeholder?: string;
  icon?: LucideIcon;
}
const Input = ({
  type,
  value,
  onChange,
  className = "",
  placeholder,
  icon: Icon,
}: InputField) => {
  return (
    <div className="flex w-full items-center gap-2 px-3">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none ${className}`}
        placeholder={placeholder}
      />
      {Icon && (
        <Icon size={20} className="shrink-0 text-gray-500" aria-hidden="true" />
      )}
    </div>
  );
};

export default Input;


