import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
};

export function SectionEyebrow({
  children,
  centered = false,
  className,
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "landing-eyebrow",
        centered && "landing-eyebrow--center",
        className
      )}
    >
      {children}
    </div>
  );
}
