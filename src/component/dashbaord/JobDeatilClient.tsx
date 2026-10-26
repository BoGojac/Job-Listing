"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import JobInquiryForm from "@/component/dashbaord/JobInquiryForm";
import Fact from "../ui/Fact";
import Button from "@/component/ui/Button";
import type { Job } from "@/types/jobData";

type JobDetailClientProps = {
  job: Job;
};

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!job) {
    return (
      <main className="grid min-h-screen place-content-center justify-items-start gap-6 bg-[#f0eee8] px-6 py-10">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.055em] text-[#152943] sm:text-5xl">
          That opportunity has moved on.
        </h1>

        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 rounded-md border border-[#d8ddd8] px-4 py-3 text-sm font-bold text-[#152943] transition hover:-translate-y-0.5 hover:border-[#152943] hover:bg-[#152943] hover:text-white">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to jobs
        </Link>
      </main>
    );
  }

  return (
    <>
      <main className="bg-white py-12 sm:py-14 lg:pb-24">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-280 sm:w-[calc(100%-2.5rem)]">
          <Link
            href="/jobs"
            className="mb-9 inline-flex items-center gap-2 text-xs font-bold text-[#e3715a] transition-all hover:gap-3">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to jobs
          </Link>

          <div className="grid min-w-0 grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-17">
            <article className="min-w-0">
              <div
                className={`mb-7 grid size-13 shrink-0 place-items-center justify-center overflow-hidden rounded-[14px] ${
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
                  className="size-full"
                />
              </div>

              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#e36f58]">
                {job.category} opportunity
              </span>

              <h1 className="mb-3 max-w-180 text-[clamp(2.625rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.055em] text-[#152943]">
                {job.title}
              </h1>

              <p className="mb-6 text-sm text-[#7e8991]">
                {job.company}
                <span className="px-1.5 text-[#d2d4d2]">·</span>
                {job.location}
              </p>

              <div className="flex flex-wrap items-center gap-4 border-b border-[#e3e7e2] pb-8 sm:pb-11">
                <Button type="button" onClick={() => setIsInquiryOpen(true)}>
                  <Send size={15} aria-hidden="true" />
                  Ask about this job
                </Button>

                <span className="rounded px-2 py-1 text-[10px] font-bold text-[#5b9a72] bg-[#edf8ef]">
                  {job.type}
                </span>
                <span className="rounded-sm bg-[#ecbcb1] px-1.75 py-1 text-[10px] font-bold text-[#cc563c]">
                  {job.workarrangement}
                </span>
                <span className="rounded-sm bg-[#b1c2fd] px-1.75 py-1 text-[10px] font-bold text-[#193393]">
                  {job.experiencelevel}
                </span>
              </div>

              <section className="pt-9">
                <h2 className="mb-4 text-lg font-bold tracking-tight text-[#152943]">
                  Description
                </h2>
                <p className="max-w-190 text-[13px] leading-7 text-[#52616a]">
                  {job.description} Our team is looking for someone who can
                  bring care, consistency, and fresh ideas to this work.
                </p>
              </section>

              <section className="pt-9">
                <h2 className="mb-4 text-lg font-bold tracking-tight text-[#152943]">
                  Responsibilities
                </h2>
                <ul className="grid gap-3 text-xs leading-relaxed text-[#52616a]">
                  {job.responsibilities.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-[#63bea0]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="pt-9">
                <h2 className="mb-4 text-lg font-bold tracking-tight text-[#152943]">
                  Ideal Candidate
                </h2>
                <ul className="ml-4 grid list-disc gap-2 text-xs leading-relaxed text-[#52616a] marker:text-[#e3715a]">
                  {job.idealCandidate.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="pt-9">
                <h2 className="mb-4 text-lg font-bold tracking-tight text-[#152943]">
                  When &amp; Where
                </h2>
                <div className="flex max-w-190 items-start gap-3 rounded-xl border border-[#e8ece7] p-4 text-[#7390a0] sm:p-5">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="m-0 text-[13px] leading-7 text-[#52616a]">
                    {job.schedule}
                  </p>
                </div>
              </section>
            </article>

            <aside className="min-w-0 border-t border-[#e4e8e3] pt-8 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <h2 className="mb-5 text-base font-bold tracking-tight text-[#152943]">
                About
              </h2>

              <div className="grid gap-5">
                <Fact
                  icon={<Clock3 size={16} />}
                  label="Posted On"
                  value={job.postedOn}
                />
                <Fact
                  icon={<Clock3 size={16} />}
                  label="Deadline"
                  value={job.deadline}
                />
                <Fact
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={job.location}
                />
                <Fact
                  icon={<CalendarDays size={16} />}
                  label="Start Date"
                  value={job.startDate}
                />
                <Fact
                  icon={<CalendarDays size={16} />}
                  label="End Date"
                  value={job.endDate}
                />
              </div>

              <div className="my-6 h-px bg-[#e2e6e2]" />

              <h2 className="mb-4 text-base font-bold tracking-tight text-[#152943]">
                Categories
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {job.categories.map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="rounded bg-[#fff7dc] px-2 py-1 text-[10px] font-bold text-[#cb9818]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="my-6 h-px bg-[#e2e6e2]" />

              <h2 className="mb-4 text-base font-bold tracking-tight text-[#152943]">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="rounded bg-[#f0f2fb] px-2 py-1 text-[10px] font-bold text-[#556ca8]">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <JobInquiryForm
        open={isInquiryOpen}
        jobTitle={job.title}
        company={job.company}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}