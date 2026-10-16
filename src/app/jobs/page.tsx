import Link from "next/link";
import { Filter, Search, Sparkles } from "lucide-react";
import Input from "@/component/ui/Input";
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
              <em className="font-serif font-medium text-[#f7ce3c]">
                opportunities
              </em>
            </h1>

            <div className="flex shrink-0 items-end gap-2">
              <strong className="text-3xl leading-none tracking-revers-3 text-[#f7ce3c] sm:text-4xl">
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
        <main>
          <div className="w-full flex mx-1 my-2.5 md:w-[70%]">
            <div className="w-[90%] flex border rounded-lg justify-center border-gray-400 mx-2">
              <Input
                type="text"
                value={""}
                className="w-full flex"
                // onChange={(event) => setCategory(event.target.value)}
                placeholder="Search for Job "
                icon={Search}
              />
            </div>
            <div className="w-[10%] md:hidden">
              <Filter className="items-center justify-center align-middle text-[#f7ce3c] mx-0.5 my-2 right-0" />
            </div>
          </div>

          <div className="flex">
            <div className="w-full md:w-[70%]">hello</div>
            <div className="relative hidden w-[30%] -mt-3.5 items-end-safe justify-end-safe md:block border border-gray-400 rounded-md px-3 py-2.5 mx-1 my-1.5 min-h-dvh">
              <h1>Filter Jobs</h1>
              <div>
                <h2>Job Types</h2>
                <div className="flex ">
                  <Input type="checkbox" value="" className="" />
                  <ul>
                    <li>marketing</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2>Categories</h2>
                <div className="flex">
                  <Input type="checkbox" value="" className="" />
                  <ul>
                    <li>marketing</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2>Job Types</h2>
                <div className="flex gap-0">
                  <Input type="checkbox" value="" className="" />
                  <ul>
                    <li>marketing</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2>Job Types</h2>
                <div className="flex">
                  <Input type="checkbox" value="" className="" />
                  <ul>
                    <li>marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
