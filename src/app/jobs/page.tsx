import Link from "next/link";
import { Sparkles } from "lucide-react";
import Footer from "@/component/landing/Footer";

const Page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-text-color">
      <section>
        {/* Header */}
        <header className="relative z-10 flex min-h-19 w-full items-center border-b border-[#eeeae2] bg-[#fbfaf7f0] px-4 sm:min-h-19 sm:px-6 lg:min-h-20.5">
          <div className="mx-auto flex w-full max-w-7xl items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-sans text-lg font-bold tracking-revers-3 text-[#152943]  hover:-rotate-6 transition-transform duration-200 hover:scale-[1.02] sm:text-xl">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#f7ce3c] text-[#152943] rotate-[-8deg]">
                <Sparkles size={17} />
              </span>

              <span>
                Opportunity
                <span className="text-[#eb725d]">.</span>
              </span>
            </Link>
          </div>
        </header>

        {/* Page heading */}

        <div className="bg-[#f0eee8] px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-revers-3 text-[#152943] sm:text-3xl md:text-4xl">
              Look for your{" "}
              <em className="font-serif font-medium text-[#eb725d]">
                opportunities
              </em>
            </h1>

            <div className="flex shrink-0 items-end gap-2">
              <strong className="text-3xl leading-none tracking-revers-3 text-[#e5745d] sm:text-4xl">
                05
              </strong>

              <span className="pb-0.5 text-[9px] font-bold uppercase leading-snug tracking-wider text-[#a7a8a9] sm:text-[10px]">
                Open opportunities
                <br />
                right now
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-dvh">
        <main></main>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
