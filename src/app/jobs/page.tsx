"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Filter, Search, Sparkles, X } from "lucide-react";
import SearchInput from "@/component/ui/SearchInput";
import Footer from "@/component/landing/Footer";
import JobCard from "@/component/ui/JobCard";
import { jobs } from "@/types/jobData";
import FilterPanel from "@/component/ui/FilterPanel";
import { SelectedFilters } from '@/types/types'


const Page = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const handleFilterChange = (group: string, option: string) => {
    setSelectedFilters((previous) => {
      const currentOptions = previous[group] ?? [];

      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];

      return {
        ...previous,
        [group]: updatedOptions,
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setSearchQuery("");
  };

  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      [
        job.title,
        job.company,
        job.location,
        job.category,
        job.description,
        ...job.skills,
      ].some((value) => value.toLowerCase().includes(query));

    const selectedTypes = selectedFilters["Job types"] ?? [];
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(job.type);

    const selectedCategories = selectedFilters["Categories"] ?? [];
    const jobCategories = [job.category, ...job.categories];

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => jobCategories.includes(category));

    const selectedArrangements = selectedFilters["Work arrangement"] ?? [];
    const matchesArrangement =
      selectedArrangements.length === 0 ||
      selectedArrangements.includes(job.workarrangement);

    const selectedExperience = selectedFilters["Experience level"] ?? [];
    const matchesExperience =
      selectedExperience.length === 0 ||
      selectedExperience.includes(job.experiencelevel);

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesArrangement &&
      matchesExperience
    );
  });

  useEffect(() => {
    document.body.style.overflow = openFilter ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openFilter]);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#fbfaf7] text-[#152943]">
      {/* Header */}
      <header className="relative z-10 flex min-h-19  w-full items-center border-b border-[#eeeae2] bg-[#fbfaf7] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center">
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
        </div>
      </header>

      {/* Page heading */}
      <section className="bg-[#f0eee8] px-4 py-5 sm:px-6 sm:py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
            Look for your{" "}
            <em className="font-serif font-medium not-italic text-[#e36f58]">
              opportunities
            </em>
          </h1>

          <div className="flex shrink-0 items-center gap-2">
            <strong className="text-3xl leading-none text-[#e36f58] sm:text-4xl">
              {String(filteredJobs.length).padStart(2, "0")}
            </strong>

            <span className="text-[10px] font-bold uppercase leading-snug tracking-wider text-[#858585]">
              Open opportunities
              <br />
              right now
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-start gap-5 md:grid-cols-[minmax(0,1fr)_240px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_310px]">
          {/* Left column: search and results */}
          <section className="min-w-0">
            {/* Search row */}
            <div className="flex min-w-0 items-stretch gap-2 sm:gap-3">
              <div className="min-w-0 flex-1 rounded-xl border border-[#e3dfd5] bg-white focus-within:border-[#e4b92d] focus-within:ring-2 focus-within:ring-[#f7ce3c]/20">
                <SearchInput
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full"
                  placeholder="Search for jobs..."
                  icon={Search}
                />
              </div>

              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setOpenFilter((open) => !open)}
                aria-expanded={openFilter}
                aria-controls="mobile-job-filters"
                aria-label={openFilter ? "Close filters" : "Open filters"}
                className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#e3dfd5] bg-white px-3 transition-colors hover:border-[#e4b92d] hover:bg-[#fff9df] md:hidden">
                {openFilter ? (
                  <X size={19} />
                ) : (
                  <Filter size={19} className="text-[#e4b92d]" />
                )}
                <span className="hidden text-sm font-medium sm:inline">
                  Filter
                </span>
              </button>
            </div>

            {/* Mobile filter panel */}

            {openFilter && (
              <div className="fixed inset-0 z-50 md:hidden">
                {/* Backdrop */}
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setOpenFilter(false)}
                  className="absolute inset-0 size-full bg-[#152943]/35 backdrop-blur-[3px]"
                />

                {/* Floating glass drawer */}
                <aside
                  id="mobile-job-filters"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="mobile-filter-title"
                  className="absolute inset-y-3 right-3 flex w-[min(340px,calc(100%-24px))] flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-2xl shadow-[#152943]/20 backdrop-blur-2xl animate-in slide-in-from-right duration-300">
                  {/* Drawer header */}
                  <div className="flex items-center justify-between border-b border-[#e6e8e5]/80 px-5 py-4">
                    <div>
                      <h2
                        id="mobile-filter-title"
                        className="text-lg font-bold text-[#152943]">
                        Filter jobs
                      </h2>
                      <p className="mt-1 text-xs text-[#656565]">
                        Find your next opportunity
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenFilter(false)}
                      aria-label="Close filters"
                      className="grid size-9 place-items-center rounded-full border border-white/80 bg-white/70 text-[#152943] transition hover:bg-[#f0eee8]">
                      <X size={18} />
                    </button>
                  </div>

                  {/* Scrollable filter options */}
                  <div className="min-h-0 flex-1 overflow-y-auto px-5">
                    <FilterPanel
                      selectedFilters={selectedFilters}
                      onFilterChange={handleFilterChange}
                    />
                  </div>

                  {/* Drawer footer */}
                  <div className="flex gap-2 border-t border-[#e6e8e5]/80 bg-white/50 p-4">
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="min-h-11 rounded-xl border border-[#e3dfd5] px-4 text-sm font-semibold text-[#152943] transition hover:bg-white">
                      Clear all
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpenFilter(false)}
                      className="min-h-11 flex-1 rounded-xl bg-[#152943] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#203d60] active:scale-[0.98]">
                      Show opportunities
                    </button>
                  </div>
                </aside>
              </div>
            )}

            {/* Job listings */}
            <div className="mt-5 space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.slug} job={job} />)
              ) : (
                <div className="rounded-2xl border border-[#eeeae2] bg-white px-6 py-12 text-center">
                  <Search
                    size={32}
                    className="mx-auto mb-3 text-[#c5bfae]"
                    aria-hidden="true"
                  />

                  <h2 className="text-lg font-bold text-[#152943]">
                    No opportunities found
                  </h2>

                  <p className="mt-2 text-sm text-[#656565]">
                    Try another job title, company, location, or keyword.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mt-4 rounded-lg bg-[#152943] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#203d60]">
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Desktop/tablet sidebar */}
          <aside className="sticky top-5 hidden min-w-0 rounded-2xl border border-[#eeeae2] bg-white p-4 shadow-sm md:block lg:p-5">
            <div className="flex items-center justify-between gap-2 border-b border-[#eeeae2] pb-4">
              <h2 className="text-base font-bold lg:text-lg">Filter jobs</h2>
              <Filter className="shrink-0 text-[#d6ac20]" size={19} />
            </div>

            <FilterPanel
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 w-full rounded-lg border border-[#e3dfd5] px-3 py-2 text-sm font-semibold text-[#152943] transition hover:bg-[#fbfaf7]">
              Clear all filters
            </button>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
