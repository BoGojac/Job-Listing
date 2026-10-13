import type { LucideIcon } from "lucide-react";

export type JourneyStep = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type JourneyCardProps = {
  type: "applicant" | "employer";
  title: string;
  description: string;
  steps: JourneyStep[];
  buttonText: string;
};
