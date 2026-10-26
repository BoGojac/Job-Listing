import type { ReactNode } from "react";

export default function Fact({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-7.25 shrink-0 place-items-center rounded-full border border-[#dceae6] text-[#5faae0]">
        {icon}
      </span>
      <div className="grid gap-1">
        <small className="text-[10px] text-[#89949b]">{label}</small>
        <strong className="text-[11px] font-bold text-[#3d4d5b]">
          {value}
        </strong>
      </div>
    </div>
  );
}
