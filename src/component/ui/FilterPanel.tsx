import { FilterPanelProps } from "@/types/types";
// import Input from "./Input";

const filterGroups = [
  {
    title: "Job types",
    options: ["Full-time", "Part-time", "Internship", "Contract", "Volunteer"],
  },
  {
    title: "Categories",
    options: ["Technology", "Marketing", "Design", "Finance", "Education"],
  },
  {
    title: "Work arrangement",
    options: ["Remote", "On-site", "Hybrid"],
  },
  {
    title: "Experience level",
    options: ["Entry level", "Junior", "Intermediate", "Senior"],
  },
];


const FilterPanel = ({ selectedFilters, onFilterChange }: FilterPanelProps) =>
{
  return (
    <>
      {filterGroups.map((group) => (
        <fieldset
          key={group.title}
          className="min-w-0 border-b border-[#eeeae2] py-4 last:border-b-0">
          <legend className="mb-3 w-full text-sm font-bold text-[#152943]">
            {group.title}
          </legend>

          <div className="grid max-h-40  grid-cols-1 gap-2 overflow-y-auto overscroll-contain pr-2 sm:grid-cols-2 md:grid-cols-1">
            {group.options.map((option) => (
              <label
                key={option}
                className="flex min-h-8 gap-3 cursor-pointer items-center rounded-md text-sm text-[#656565] transition-colors hover:text-[#152943]">
                <input
                  type="checkbox"
                  name={group.title}
                  value={option}
                  checked={(selectedFilters[group.title] ?? []).includes(
                    option,
                  )}
                  onChange={() => onFilterChange(group.title, option)}
                  className="size-4 shrink-0 cursor-pointer accent-[#e4b92d]"
                />

                <span className="wrap-break-words">{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </>
  );
};

export default FilterPanel;