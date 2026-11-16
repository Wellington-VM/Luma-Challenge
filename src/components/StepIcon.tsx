export type StepIconVariant = "circle" | "tilted" | "soft";

type StepIconProps = {
  variant: StepIconVariant;
};

type IconStyle = {
  box: string;
  dot: string;
  offset: string;
};

const styles: Record<StepIconVariant, IconStyle> = {
  circle: {
    box: "rounded-full bg-lavender",
    dot: "size-4 rounded-md bg-brand",
    offset: "-translate-x-1 -translate-y-1",
  },
  tilted: {
    box: "rotate-[8deg] rounded-xl bg-peach",
    dot: "size-5 rounded-full bg-coral",
    offset: "translate-x-1.5 translate-y-1.5",
  },
  soft: {
    box: "rounded-xl bg-butter",
    dot: "size-4 rounded-full bg-gold",
    offset: "-translate-x-1.5 translate-y-1.5",
  },
};

export function StepIcon({ variant }: StepIconProps) {
  const { box, dot, offset } = styles[variant];

  return (
    <div aria-hidden="true" className={`relative grid size-12 place-items-center ${box}`}>
      <span className={`${dot} ${offset}`} />
    </div>
  );
}
