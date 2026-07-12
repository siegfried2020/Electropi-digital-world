import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md";
};

/** Matches EraCoda_Gradient.html [data-logo-nav] crop of the square wordmark PNG. */
const NAV_LOGO = {
  width: 170.16,
  height: 26,
  backgroundSize: "278.02px 278.02px",
  backgroundPosition: "-49.94px -126.65px",
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const scale = size === "sm" ? 0.82 : 1;
  const width = NAV_LOGO.width * scale;
  const height = NAV_LOGO.height * scale;
  const bgScale = 278.02 * scale;

  return (
    <span
      role="img"
      aria-label="Eracoda"
      className={cn("dw-logo inline-block shrink-0", className)}
      style={{
        width,
        height,
        backgroundImage: "url(/eracoda-logo.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${bgScale}px ${bgScale}px`,
        backgroundPosition: `${-49.94 * scale}px ${-126.65 * scale}px`,
      }}
    />
  );
}
