import Link from 'next/link'
import { Sparkles } from "lucide-react";
function About() {
  return (
    <div>
      <header className="relative z-10 flex min-h-19  w-full items-center border-b border-[#eeeae2] bg-[#fbfaf7] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl space-x-96 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-lg font-bold tracking-[-0.03em] transition-transform duration-200 hover:scale-[1.02] sm:text-xl">
            <span className="flex size-8 shrink-0 rotate-[-8deg] items-center justify-center rounded-lg bg-[#f7ce3c] text-[#152943]">
              <Sparkles size={17} />
            </span>

            <span>
              Opportunity<span className="text-[#eb725d]">.</span>
            </span>
          </Link>
          <h1 >ABOUT US</h1>
        </div>
      </header>
    </div>
  );
}

export default About