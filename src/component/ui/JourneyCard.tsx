import {  ArrowRight } from "lucide-react";
import Link from "next/link";
import type { JourneyCardProps } from "@/types/types";
// import type { JourneyStep } from "@/types/types";


function JourneyCard({
  type,
  title,
  description,
  steps,
  buttonText,
}: JourneyCardProps) {
  const isApplicant = type === "applicant";

  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-[#e8e9e5] bg-white p-5 sm:p-7 lg:p-8">
      <header className="mb-7">
        <span
          className={`mb-4 inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] ${
            isApplicant
              ? "bg-[#fff0eb] text-[#d66c57]"
              : "bg-[#eaf6ed] text-[#57936a]"
          }`}>
          {isApplicant ? "For applicants" : "For employers"}
        </span>

        <h3 className="mb-2 text-xl font-bold leading-tight text-[#152943] sm:text-[22px]">
          {title}
        </h3>

        <p className="m-0 text-[13px] leading-relaxed text-[#7b858e]">
          {description}
        </p>
      </header>

      <div className="mb-7 grid flex-1 content-start gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="grid min-w-0 grid-cols-[26px_20px_minmax(0,1fr)] items-start gap-3 sm:gap-4">
              <span className="grid size-6.5 shrink-0 place-items-center rounded-full border border-[#dde0da] text-[11px] font-bold text-[#9aa3ab]">
                {index + 1}
              </span>

              <Icon
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
                className="mt-1 text-[#e3715a]"
              />

              <div className="min-w-0">
                <h4 className="mb-1 wrap-break-word text-[13px] font-bold leading-snug text-[#152943] sm:text-sm">
                  {step.title}
                </h4>

                <p className="m-0 wrap-break-word text-xs leading-[1.65] text-[#8b939b]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href={"/auth/register"}
        className="inline-flex w-fit items-center justify-center gap-2 rounded-md border border-[#d8ddd8] px-4 py-3 text-xs font-bold text-[#152943] transition-colors duration-200 hover:border-[#152943] hover:bg-[#152943] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3715a]">
        {buttonText}
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}


export default JourneyCard;
