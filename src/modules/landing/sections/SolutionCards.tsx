import { CheckMark } from "../components/CheckMark";

type SolutionCardProps = {
  index: string;
  label: string;
  title: string;
  description: string;
  capabilities: string[];
  gradient: string;
  glowPosition: "right" | "left";
  visual: React.ReactNode;
  stackOffset?: string;
  zIndex: number;
};

function SolutionCardShell({
  index,
  label,
  title,
  description,
  capabilities,
  gradient,
  glowPosition,
  visual,
  stackOffset = "0",
  zIndex,
}: SolutionCardProps) {
  const glowClass =
    glowPosition === "right"
      ? "-right-[60px] -top-[60px]"
      : "-left-[60px] -bottom-[60px]";

  return (
    <div
      data-stack
      className="absolute left-1/2 top-1/2 w-[min(1080px,94%)] will-change-transform"
      style={{
        zIndex,
        transform:
          stackOffset === "0"
            ? "translate(-50%, -50%)"
            : `translate(-50%, calc(-50% + ${stackOffset}))`,
      }}
    >
      <div
        data-stack-inner
        className="relative overflow-hidden rounded-[clamp(20px,2vw,30px)] border border-white/10 shadow-[0_40px_90px_-36px_rgba(0,0,0,0.8)] will-change-transform"
        style={{
          background: gradient,
          transformOrigin: "center top",
        }}
      >
        <div
          data-stack-dim
          className="pointer-events-none absolute inset-0 z-[5] bg-[#020e14] opacity-0 transition-opacity duration-150"
        />
        <div
          className={`pointer-events-none absolute h-[280px] w-[280px] rounded-full ${glowClass}`}
          style={{
            background:
              glowPosition === "right"
                ? "radial-gradient(circle,rgba(3,110,217,0.26),transparent 64%)"
                : glowPosition === "left" && gradient.includes("093341")
                  ? "radial-gradient(circle,rgba(15,240,179,0.2),transparent 64%)"
                  : glowPosition === "left"
                    ? "radial-gradient(circle,rgba(8,161,127,0.24),transparent 64%)"
                    : "radial-gradient(circle,rgba(3,110,217,0.24),transparent 64%)",
          }}
        />

        <div className="relative grid items-center gap-[clamp(24px,4vw,56px)] p-[clamp(28px,3.4vw,52px)] [grid-template-columns:var(--stack-cols,0.92fr_1.08fr)]">
          <div>
            <span className="inline-flex items-center gap-[11px] rounded-full border border-white/10 bg-white/5 py-[7px] pl-3.5 pr-2">
              <span className="font-heading text-[13px] font-bold text-[#0ff0b3]">
                {index}
              </span>
              <span className="whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-semibold text-[#eaf3f5]">
                {label}
              </span>
            </span>
            <h3 className="font-heading m-0 mt-[clamp(20px,2.4vw,30px)] text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.04] tracking-[-0.025em] text-white">
              {title}
            </h3>
            <p className="m-0 mt-4 max-w-[42ch] text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[#9fbcc6]">
              {description}
            </p>
            <div className="mt-[clamp(22px,2.6vw,30px)] flex flex-col gap-3">
              {capabilities.map((cap) => (
                <span key={cap} data-stack-cap className="landing-check">
                  <CheckMark />
                  {cap}
                </span>
              ))}
            </div>
          </div>
          {visual}
        </div>
      </div>
    </div>
  );
}

function LearningVisual() {
  return (
    <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-br from-[#0a2c3a] to-[#051a24] p-[18px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
      <div className="mb-3.5 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[#1f5e7a]" />
        ))}
      </div>
      <div className="rounded-[13px] border border-white/[0.07] bg-white/[0.03] p-4">
        <div className="text-xs text-[#9fbcc6]">Learning progress</div>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-heading text-[34px] font-bold leading-none text-white">
              78%
            </div>
            <div className="mt-[3px] text-[11px] text-[#7fa0ab]">
              Overall progress
            </div>
          </div>
          <span className="rounded-full border border-[rgba(15,240,179,0.3)] bg-[rgba(15,240,179,0.14)] px-[9px] py-[3px] text-[11px] font-bold text-[#0ff0b3]">
            78%
          </span>
        </div>
        <svg
          viewBox="0 0 280 90"
          preserveAspectRatio="none"
          className="mt-2 h-[74px] w-full overflow-visible"
        >
          <defs>
            <linearGradient id="lg-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#036ed9" stopOpacity="0.35" />
              <stop offset="1" stopColor="#036ed9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M4 70 L44 60 L84 64 L124 42 L164 48 L204 28 L244 32 L276 18"
            fill="none"
            stroke="#0ff0b3"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 70 L44 60 L84 64 L124 42 L164 48 L204 28 L244 32 L276 18 L276 90 L4 90 Z"
            fill="url(#lg-fill)"
          />
          <circle cx="276" cy="18" r="4" fill="#0ff0b3" />
        </svg>
        <div className="mt-1 flex justify-between text-[10px] text-[#6f929d]">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="mt-[11px] flex items-center gap-[11px] rounded-[13px] border border-white/[0.07] bg-white/[0.03] px-3.5 py-3">
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#036ed9] to-[#0ff0b3] text-[#041e28]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[17px] w-[17px]">
            <path d="M3 9l9-4 9 4-9 4-9-4z M7 11v5c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex-1 leading-[1.3]">
          <div className="text-[13px] font-semibold text-[#eaf3f5]">AI Tutor</div>
          <div className="text-[11px] text-[#7fa0ab]">Ask anything</div>
        </div>
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[#036ed9] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[15px] w-[15px]">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function SalesVisual() {
  return (
    <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-br from-[#0a2c3a] to-[#051a24] p-[18px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
      <div className="mb-3.5 flex items-center gap-[11px] border-b border-white/[0.07] pb-3.5">
        <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#036ed9] to-[#08a17f] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[19px] w-[19px]">
            <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-[1.3]">
          <div className="text-[13.5px] font-semibold text-[#eaf3f5]">Sales Agent</div>
          <div className="flex items-center gap-[5px] text-[11px] text-[#0ff0b3]">
            <span className="h-[5px] w-[5px] rounded-full bg-[#0ff0b3] shadow-[0_0_7px_#0ff0b3]" />
            Online
          </div>
        </div>
      </div>
      <div className="max-w-[82%] rounded-[13px_13px_13px_4px] border border-white/[0.08] bg-white/5 px-3.5 py-[11px] text-[12.5px] leading-[1.45] text-[#eaf3f5]">
        Hi! I found some products you might like.
      </div>
      <div className="mt-3 flex gap-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex aspect-square flex-1 items-center justify-center rounded-xl border bg-gradient-to-br from-[#123a4d] to-[#0a2532] ${
              i === 1
                ? "border-[rgba(15,240,179,0.3)] text-[#0ff0b3] shadow-[0_0_0_1px_rgba(15,240,179,0.2)]"
                : "border-white/[0.08] text-[#4f7d8d]"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[26px] w-[26px]">
              {i === 0 && (
                <path d="M4 13a8 8 0 0 1 16 0 M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2z M20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2z" strokeLinecap="round" />
              )}
              {i === 1 && (
                <>
                  <rect x="6" y="3" width="12" height="18" rx="3" />
                  <path d="M11 7h2" strokeLinecap="round" />
                </>
              )}
              {i === 2 && (
                <>
                  <rect x="7" y="2" width="10" height="20" rx="4" />
                  <path d="M12 6v4" strokeLinecap="round" />
                </>
              )}
            </svg>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2.5 rounded-[11px] border border-[rgba(3,110,217,0.3)] bg-[rgba(3,110,217,0.14)] px-3.5 py-[11px]">
        <span className="text-[12.5px] font-semibold text-[#eaf3f5]">
          View recommended products
        </span>
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-[#036ed9] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function IndustrialVisual() {
  return (
    <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-br from-[#0a2c3a] to-[#051a24] p-[18px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
      <div className="mb-3 text-[13px] font-semibold text-[#eaf3f5]">
        Production monitoring
      </div>
      <div className="relative aspect-video overflow-hidden rounded-[13px] border border-white/[0.08] bg-gradient-to-br from-[#16384a] via-[#0c2533] to-[#15435a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,240,179,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(15,240,179,0.06) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute bottom-[12%] left-[10%] h-[54%] w-[42%] rounded-lg border border-white/10 bg-gradient-to-br from-[#1d4f66] to-[#0e2c3a]" />
        <div className="absolute right-[10%] top-[18%] h-[46%] w-[42%] rounded-[7px] border-[1.5px] border-[#ff5a5a] shadow-[0_0_18px_rgba(255,90,90,0.4)]" />
        <div className="absolute right-[11%] top-[20%] rounded-[7px] border border-[rgba(255,90,90,0.4)] bg-[rgba(8,16,20,0.72)] px-2.5 py-[7px] backdrop-blur-sm">
          <div className="text-[11px] font-bold text-[#ff7a7a]">Anomaly detected</div>
          <div className="mt-px text-[10px] text-[#cdd9dd]">Confidence: 98.6%</div>
        </div>
        <div
          className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#0ff0b3] to-transparent shadow-[0_0_14px_#0ff0b3]"
          style={{ animation: "dw-scan-y 3s ease-in-out infinite alternate" }}
        />
        <div className="absolute left-[11px] top-[11px] flex items-center gap-1.5 rounded-full bg-black/40 px-[9px] py-[3px] text-[10px] text-[#eaf3f5]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#ff5a5a]"
            style={{ animation: "dw-blink 1.4s ease-in-out infinite" }}
          />
          REC
        </div>
      </div>
      <div className="mt-3.5 flex items-center justify-between">
        <span className="text-xs text-[#9fbcc6]">Line efficiency</span>
        <span className="font-heading text-[13px] font-bold text-[#eaf3f5]">92%</span>
      </div>
      <div className="mt-[7px] h-[7px] overflow-hidden rounded-full bg-white/[0.08]">
        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#08a17f] to-[#0ff0b3]" />
      </div>
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { label: "Document received", icon: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5" },
    { label: "Extract data", icon: "M4 7h16M4 12h16M4 17h10" },
    { label: "Validate information", icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4" },
    { label: "Approve & process", icon: "M5 12l5 5L20 6" },
    { label: "Sync to system", icon: "M21 12a9 9 0 1 1-6.2-8.5 M21 4v5h-5" },
  ];

  return (
    <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-br from-[#0a2c3a] to-[#051a24] p-[18px] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
      <div className="mb-3.5 text-[13px] font-semibold text-[#eaf3f5]">
        Workflow automation
      </div>
      <div className="flex flex-col gap-2.5">
        {steps.map((step) => (
          <div
            key={step.label}
            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-[11px]"
          >
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[rgba(3,110,217,0.18)] text-[#4aa3ff]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <path d={step.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="flex-1 text-[12.5px] text-[#eaf3f5]">{step.label}</span>
            <CheckMark />
          </div>
        ))}
      </div>
    </div>
  );
}

const SOLUTION_CARDS = [
  {
    index: "01",
    label: "AI Learning Systems",
    title: "AI Learning Systems",
    description:
      "Adaptive learning platforms that personalize education, provide AI tutors, track progress, and deliver smart assessments.",
    capabilities: ["Adaptive learning", "AI tutors", "Student analytics", "Smart assessments"],
    gradient: "linear-gradient(155deg,#0b3242 0%,#072430 60%,#041922 100%)",
    glowPosition: "right" as const,
    visual: <LearningVisual />,
    stackOffset: "0",
    zIndex: 1,
  },
  {
    index: "02",
    label: "AI Sales Agents",
    title: "AI Sales Agents",
    description:
      "Conversational agents that engage customers, recommend the right products, and automate the entire sales journey.",
    capabilities: [
      "Conversational commerce",
      "Product recommendations",
      "Customer guidance",
      "Sales automation",
    ],
    gradient: "linear-gradient(155deg,#0a3142 0%,#072430 60%,#041922 100%)",
    glowPosition: "left" as const,
    visual: <SalesVisual />,
    stackOffset: "96vh",
    zIndex: 2,
  },
  {
    index: "03",
    label: "Industrial AI",
    title: "Industrial AI",
    description:
      "Computer vision and intelligent systems that monitor, detect, and optimize industrial operations in real time.",
    capabilities: [
      "Computer vision",
      "Quality inspection",
      "Smart monitoring",
      "Operational intelligence",
    ],
    gradient: "linear-gradient(155deg,#093341 0%,#06232e 60%,#041922 100%)",
    glowPosition: "right" as const,
    visual: <IndustrialVisual />,
    stackOffset: "96vh",
    zIndex: 3,
  },
  {
    index: "04",
    label: "Intelligent Automation",
    title: "Intelligent Automation",
    description:
      "Automate repetitive workflows, extract data, and integrate systems to streamline operations and eliminate manual work.",
    capabilities: [
      "OCR & document processing",
      "Workflow automation",
      "System integrations",
      "End-to-end orchestration",
    ],
    gradient: "linear-gradient(155deg,#0a3142 0%,#072430 60%,#041922 100%)",
    glowPosition: "left" as const,
    visual: <AutomationVisual />,
    stackOffset: "96vh",
    zIndex: 4,
  },
];

export function SolutionCards() {
  return (
    <>
      {SOLUTION_CARDS.map((card) => (
        <SolutionCardShell key={card.index} {...card} />
      ))}
    </>
  );
}
