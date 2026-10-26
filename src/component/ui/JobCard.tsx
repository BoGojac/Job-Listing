import Link from "next/link";
import type { Job } from "@/types/jobData";
import { ArrowRight } from 'lucide-react'
import Image from "next/image";
export default function JobCard({ job }: { job: Job }) {
  // const markColors: Record<string, string> = {
  //   sun: "bg-[#efd035] text-white",
  //   aqua: "bg-[#54b3bd] text-white",
  //   ink: "bg-[#14243b] text-white",
  //   coral: "bg-[#e97860] text-white",
  //   mint: "bg-[#72a987] text-white",
  // };

  return (
    <article className="rounded-[13px] border border-[#e5e8e6] bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-0.75 hover:border-[#cad7cf] hover:shadow-[0_12px_28px_rgba(40,64,50,0.07)] sm:px-6">
      {/* Company information */}
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`mb-7 grid size-13 shrink-0 place-items-center overflow-hidden rounded-[14px] ${
            {
              sun: "bg-[#efd035]",
              aqua: "bg-[#54b3bd]",
              ink: "bg-[#14243b]",
              coral: "bg-[#e97860]",
              mint: "bg-[#72a987]",
            }[job.tone] ?? "bg-[#14243b]"
          }`}>
          <Image
            src={job.avatar}
            alt={`${job.company} logo`}
            width={52}
            height={52}
            className="size-full "
          />
        </div>
        

        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-[13px] font-bold text-[#14243b]">
            {job.title}
          </h3>

          <p className="text-[10px] leading-5 text-[#86909b]">
            {job.company}
            <span className="px-0.75 text-[#d2d4d2]">·</span>
            {job.location}
          </p>
        </div>
      </div>

      {/* Job description */}
      <p className="text-sm leading-6 text-[#52616a]">
        {job.description.length > 500
          ? `${job.description.slice(0, 500).trimEnd()}...`
          : job.description}
      </p>

      {job.description.length > 500 && (
        <Link
          href={`/jobs/${job.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e36f58] transition-colors hover:text-[#c6533e]">
          Read more
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      )}

      {/* Job type, category, and details link */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:ml-11.5">
        <div className="flex flex-wrap gap-1.75">
          <span className="rounded-sm bg-[#edf8ef] px-1.75 py-1 text-[10px] font-bold text-[#5b9a72]">
            {job.type}
          </span>

          <span className="rounded-sm bg-[#fff7dc] px-1.75 py-1 text-[10px] font-bold text-[#cb9818]">
            {job.category}
          </span>
          <span className="rounded-sm bg-[#ecbcb1] px-1.75 py-1 text-[10px] font-bold text-[#cc563c]">
            {job.workarrangement}
          </span>
          <span className="rounded-sm bg-[#b1c2fd] px-1.75 py-1 text-[10px] font-bold text-[#193393]">
            {job.experiencelevel}
          </span>
        </div>

        <Link
          href={`/jobs/${job.slug}`}
          className="inline-flex items-center gap-2,25 py-1 text-[11px] font-bold text-[#e3715a] transition-all duration-200 hover:gap-3,25">
          Details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
