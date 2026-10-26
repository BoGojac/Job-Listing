import type { LucideIcon } from "lucide-react";

export type StepsList = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type StepsCardProps = {
  type: "applicant" | "employer";
  title: string;
  description: string;
  steps: StepsList[];
  buttonText: string;
};

export type SelectedFilters = Record<string, string[]>;

export interface FilterPanelProps {
  selectedFilters: SelectedFilters;
  onFilterChange: (group: string, option: string) => void;
}

