import { Suspense } from "react";
import { notFound } from "next/navigation";
import JobDetailClient from "@/component/dashbaord/JobDeatilClient";
import { getJobBySlug, jobs } from "@/types/jobData";

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function JobDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white px-6 py-12">
          <p className="text-sm text-[#52616a]">Loading opportunity...</p>
        </main>
      }>
      <JobDetailContent params={params} />
    </Suspense>
  );
}

async function JobDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
