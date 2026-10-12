import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#14243b]">
      <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-8 lg:gap-14 lg:px-12 lg:py-20">
        {/* LEFT: Hero content */}
        <div className="mx-auto w-full max-w-2xl text-center md:mx-0 md:text-left">
          {/* Announcement badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#dcecdf] bg-[#eff5ef] px-4 py-2 text-xs font-bold tracking-wide text-[#55816b] sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#70ac85] shadow-[0_0_0_4px_#dcecdf]" />
            Meaningful work starts here
          </div>

          {/* Main heading */}
          <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
            Find work that{" "}
            <span className="block">
              <em className="font-serif font-medium text-[#e66f59]">moves</em>{" "}
              you.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#697386] sm:text-lg sm:leading-8 md:mx-0">
            Discover opportunities with organisations making a real difference
            in the world.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14243b] px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#243b59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14243b]">
              Explore opportunities
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9ddd9] bg-white px-7 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-1 hover:border-[#14243b]">
              <Sparkles size={17} className="text-[#e66f59]" />
              Learn more
            </Link>
          </div>

          {/* Small supporting text */}
          <p className="mt-6 text-xs leading-5 text-[#8b93a1] sm:text-sm">
            Discover work that aligns with your purpose.
          </p>
        </div>

        {/* RIGHT: Illustrations */}
        <div className="relative mx-auto w-full max-w-xl md:max-w-none">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 inset-y-5 rounded-[3rem] rounded-tr-[8rem] rounded-bl-[8rem] bg-[#f4efe4] sm:inset-x-8 sm:inset-y-8"
          />

          {/* Yellow decorative circle */}
          <div
            aria-hidden="true"
            className="absolute -right-1 top-2 h-14 w-14 rounded-full bg-[#f2c933] sm:right-2 sm:top-0 sm:h-22 sm:w-22">
      
            <Sparkles
              size={28}
              className="text-[#e66f59] top-12 left-28 sm:h-9 sm:w-9"
            />
          </div>

          {/* Illustration container */}
          <div className="relative grid grid-cols-1 items-center gap-3 px-5 py-8 sm:grid-cols-2 sm:gap-1 sm:px-7 sm:py-12 md:grid-cols-1 md:gap-0 lg:grid-cols-2 lg:gap-2">
            <div className="relative mx-auto w-full max-w-65 sm:max-w-none md:max-w-75 lg:max-w-none">
              <Image
                src="/undraw_ask-online.svg"
                alt="Finding information and asking questions online"
                width={400}
                height={300}
                className="h-auto w-full object-contain transition-transform duration-300 hover:-translate-y-2"
                sizes="(max-width: 639px) 80vw, (max-width: 1023px) 40vw, 25vw"
              />
            </div>

            <div className="relative mx-auto w-full max-w-70 sm:max-w-none md:max-w-[320px] lg:max-w-none lg:translate-y-10">
              <Image
                src="/undraw_job-hunt.svg"
                alt="Searching for job opportunities"
                width={400}
                height={300}
                className="h-auto w-full object-contain transition-transform duration-300 hover:-translate-y-2"
                sizes="(max-width: 639px) 80vw, (max-width: 1023px) 40vw, 25vw"
              />
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute bottom-3 left-1 rounded-2xl border border-[#eeeae2] bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgba(20,36,59,0.08)] sm:bottom-5 sm:left-0 sm:px-5">
            <p className="text-xs font-medium text-[#697386]">
              Your next chapter
            </p>
            <p className="mt-1 text-sm font-bold text-[#14243b]">
              Starts with an opportunity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
