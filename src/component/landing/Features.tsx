import {
  ArrowRight,
  Building2,
  ClipboardList,
  FileText,
  MessageSquare,
  Search,
  Send,
  UserRound,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { StepsList } from "@/types/types";
import StepsCard from "../ui/StepsCard";

const applicantSteps: StepsList[] = [
  {
    icon: UserRound,
    title: "Create your profile",
    desc: "Sign up and add your skills, experience, and what kind of work you are looking for.",
  },
  {
    icon: Search,
    title: "Browse open roles",
    desc: "Search and filter opportunities by category, location, and remote availability.",
  },
  {
    icon: Send,
    title: "Express interest",
    desc: "Reach out to organisations directly when a role feels like the right fit.",
  },
  {
    icon: MessageSquare,
    title: "Stay in conversation",
    desc: "Track your applications and keep in touch with employers from your dashboard.",
  },
];

const employerSteps: StepsList[] = [
  {
    icon: Building2,
    title: "Set up your organisation",
    desc: "Create an employer account and tell us about the work your team is doing.",
  },
  {
    icon: FileText,
    title: "Post open roles",
    desc: "Share job details, requirements, and what makes the opportunity meaningful.",
  },
  {
    icon: ClipboardList,
    title: "Review applicants",
    desc: "See who expressed interest, compare profiles, and shortlist the people you want to talk to.",
  },
  {
    icon: Users,
    title: "Hire and manage",
    desc: "Coordinate next steps, assign tasks to your team, and keep hiring organised in one place.",
  },
];

function Features() {
  return (
    <div className="text-[#14243b]">
      {/* Feature strip */}
      <section
        aria-label="Our values"
        className="overflow-x-auto border-y border-[#eeeae2] bg-[#f6f2eb]">
        <div className="mx-auto flex min-h-14 w-max min-w-full items-center justify-around gap-6 px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7c857e] sm:gap-10 lg:gap-6">
          <span className="shrink-0 whitespace-nowrap">Work with purpose</span>
          <b className="shrink-0 text-[15px] text-[#e8735e]">✳</b>
          <span className="shrink-0 whitespace-nowrap">
            Grow with community
          </span>
          <b className="shrink-0 text-[15px] text-[#e8735e]">✳</b>
          <span className="shrink-0 whitespace-nowrap">Make an impact</span>
          <b className="shrink-0 text-[15px] text-[#e8735e]">✳</b>
          <span className="shrink-0 whitespace-nowrap">Work with purpose</span>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20 lg:py-26">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-280 sm:w-[calc(100%-3rem)]">
          <div className="mb-8 flex flex-col items-start gap-5 md:mb-11 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#e36f58]">
                How it works
              </span>

              <h2 className="mb-0 text-[clamp(37px,4.2vw,56px)] font-bold leading-[1.05] tracking-[-0.055em] text-[#152943]">
                A clear path
                <br />
                <em className="font-serif font-medium text-[#e66f59]">
                  for everyone.
                </em>
              </h2>
            </div>

            <p className="mb-1 max-w-85 text-sm leading-[1.7] text-[#78828b]">
              Whether you are looking for your next role or the right person to
              fill one, the process is simple from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
            <StepsCard
              type="applicant"
              title="Find work that fits you"
              description="Built for people who want their work to mean something."
              steps={applicantSteps}
              buttonText="Get started"
            />

            <StepsCard
              type="employer"
              title="Hire with intention"
              description="Built for organisations that care about who joins their team."
              steps={employerSteps}
              buttonText="Post a role"
            />
          </div>
        </div>
      </section>

      {/* Why Opportunity */}
      <section className="bg-[#152943] py-16 text-white sm:py-20 lg:py-21.25">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-280 grid-cols-1 items-start gap-6 sm:w-[calc(100%-3rem)] md:gap-8 lg:grid-cols-[1.1fr_0.9fr_48px] lg:items-end lg:gap-11">
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#f6cb41]">
              Why Opportunity
            </span>

            <h2 className="mb-0 text-[clamp(37px,4.2vw,56px)] font-bold leading-[1.05] tracking-[-0.055em]">
              Good work should
              <br />
              <em className="font-serif font-medium text-[#e66f59]">
                feel good too.
              </em>
            </h2>
          </div>

          <p className="m-0 max-w-92.5 text-sm leading-[1.65] text-[#b5c0c8]">
            We make it easier for talented people to connect with organisations
            they believe in. No noise. No endless scrolling. Just the right
            opportunity, at the right time.
          </p>

          <Link
            href="/about"
            aria-label="Learn more about Opportunity"
            className="grid size-11.5 place-items-center rounded-full border border-[#49617a] text-white transition duration-200 hover:-rotate-45 hover:border-[#f4c93d] hover:bg-[#f4c93d] hover:text-[#152943] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c93d]">
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Features