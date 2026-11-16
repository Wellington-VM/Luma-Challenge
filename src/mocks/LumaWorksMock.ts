import type { StepIconVariant } from "@/components/StepIcon";

export type Works = {
  id: number;
  number: string;
  title: string;
  description: string;
  variant: StepIconVariant;
};

export const work: Works[] = [
  {
    id: 1,
    number: "STEP 01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    variant: "circle",
  },
  {
    id: 2,
    number: "STEP 02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    variant: "tilted",
  },
  {
    id: 3,
    number: "STEP 03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    variant: "soft",
  },
];
