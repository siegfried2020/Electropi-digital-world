import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md";
};

export function Logo({ className, size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? "w-[30px] h-[30px]" : "w-[34px] h-[34px]";
  const dotSize = size === "sm" ? "w-2.5 h-2.5" : "w-[11px] h-[11px]";
  const textSize = size === "sm" ? "text-[21px]" : "text-[15px]";

  return (
    <span className={cn("inline-flex items-center gap-[11px]", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center",
          iconSize
        )}
      >
        <span className="absolute inset-0 rounded-full border-[2.5px] border-[var(--dw-blue)]" />
        <span
          className={cn(
            "absolute rounded-full bg-[var(--dw-mint)] shadow-[0_0_10px_var(--dw-mint)]",
            dotSize
          )}
        />
      </span>
      <span
        className={cn(
          "font-heading font-bold tracking-[-0.02em]",
          textSize
        )}
      >
        Digital World
      </span>
    </span>
  );
}
