import { CheckMark } from "../components/CheckMark";

type SolutionCardProps = {
  index: string;
  label: string;
  title: string;
  description: string;
  capabilities: string[];
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
      className="absolute left-1/2 top-1/2 w-[min(1080px,94%)] max-md:top-0 max-md:w-full max-md:max-w-full will-change-transform"
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
        className="relative overflow-hidden rounded-[clamp(20px,2vw,30px)] border border-[var(--dw-border-strong)] shadow-[var(--dw-shadow)] will-change-transform"
        style={{
          background:
            "linear-gradient(155deg, var(--dw-card) 0%, var(--dw-card-2) 60%, var(--dw-bg-2) 100%)",
          transformOrigin: "center top",
        }}
      >
        <div
          data-stack-dim
          className="pointer-events-none absolute inset-0 z-[5] bg-[var(--dw-stack-dim)] opacity-0 transition-opacity duration-150"
        />
        <div
          className={`pointer-events-none absolute h-[280px] w-[280px] rounded-full ${glowClass}`}
          style={{
            background:
              glowPosition === "right"
                ? "radial-gradient(circle,rgba(3,110,217,0.26),transparent 64%)"
                : "radial-gradient(circle,rgba(15,240,179,0.18),transparent 64%)",
          }}
        />

        <div className="relative grid items-center gap-[clamp(24px,4vw,56px)] p-[clamp(28px,3.4vw,52px)] [grid-template-columns:var(--stack-cols,0.92fr_1.08fr)]">
          <div>
            <span className="inline-flex items-center gap-[11px] rounded-full border border-[var(--dw-border-strong)] bg-[var(--dw-card-2)] py-[7px] pl-3.5 pr-2">
              <span className="font-heading text-[13px] font-bold text-[var(--dw-teal)]">
                {index}
              </span>
              <span className="whitespace-nowrap rounded-full bg-[var(--dw-bg)] px-3 py-1 text-[12.5px] font-semibold text-[var(--dw-text)]">
                {label}
              </span>
            </span>
            <h3 className="font-heading m-0 mt-[clamp(20px,2.4vw,30px)] text-[clamp(28px,3.4vw,46px)] font-bold leading-[1.04] tracking-[-0.025em] text-[var(--dw-text)]">
              {title}
            </h3>
            <p className="m-0 mt-4 max-w-[42ch] text-[clamp(15px,1.5vw,17px)] leading-relaxed text-[var(--dw-muted)]">
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
    <div className="relative rounded-[18px] border border-[var(--dw-border-strong)] bg-gradient-to-br from-[var(--dw-panel)] to-[var(--dw-panel-2)] p-[18px] shadow-[var(--dw-shadow)]">
      <div className="mb-3.5 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[var(--dw-border-strong)]" />
        ))}
      </div>
      <div className="rounded-[13px] border border-[var(--dw-border)] bg-[var(--dw-card-2)] p-4">
        <div className="text-xs text-[var(--dw-muted)]">Learning progress</div>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-heading text-[34px] font-bold leading-none text-[var(--dw-text)]">
              78%
            </div>
            <div className="mt-[3px] text-[11px] text-[var(--dw-muted)]">
              Overall progress
            </div>
          </div>
          <span className="rounded-full border border-[rgba(15,240,179,0.3)] bg-[rgba(15,240,179,0.14)] px-[9px] py-[3px] text-[11px] font-bold text-[var(--dw-teal)]">
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
        <div className="mt-1 flex justify-between text-[10px] text-[var(--dw-muted)]">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="mt-[11px] flex items-center gap-[11px] rounded-[13px] border border-[var(--dw-border)] bg-[var(--dw-card-2)] px-3.5 py-3">
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#036ed9] to-[#0ff0b3] text-[#041e28]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[17px] w-[17px]">
            <path d="M3 9l9-4 9 4-9 4-9-4z M7 11v5c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex-1 leading-[1.3]">
          <div className="text-[13px] font-semibold text-[var(--dw-text)]">AI Tutor</div>
          <div className="text-[11px] text-[var(--dw-muted)]">Ask anything</div>
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
    <div className="relative rounded-[18px] border border-[var(--dw-border-strong)] bg-gradient-to-br from-[var(--dw-panel)] to-[var(--dw-panel-2)] p-[18px] shadow-[var(--dw-shadow)]">
      <div className="mb-3.5 flex items-center gap-[11px] border-b border-[var(--dw-border)] pb-3.5">
        <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#036ed9] to-[#08a17f] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[19px] w-[19px]">
            <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-[1.3]">
          <div className="text-[13.5px] font-semibold text-[var(--dw-text)]">Sales Agent</div>
          <div className="flex items-center gap-[5px] text-[11px] text-[var(--dw-teal)]">
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--dw-mint)] shadow-[0_0_7px_var(--dw-mint)]" />
            Online
          </div>
        </div>
      </div>
      <div className="max-w-[82%] rounded-[13px_13px_13px_4px] border border-[var(--dw-border)] bg-[var(--dw-card-2)] px-3.5 py-[11px] text-[12.5px] leading-[1.45] text-[var(--dw-text)]">
        Hi! I found some products you might like.
      </div>
      <div className="mt-3 flex gap-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex aspect-square flex-1 items-center justify-center rounded-xl border bg-[var(--dw-panel-3)] ${
              i === 1
                ? "border-[rgba(15,240,179,0.3)] text-[var(--dw-teal)] shadow-[0_0_0_1px_rgba(15,240,179,0.2)]"
                : "border-[var(--dw-border)] text-[var(--dw-muted)]"
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
        <span className="text-[12.5px] font-semibold text-[var(--dw-text)]">
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
    <div className="relative rounded-[18px] border border-[var(--dw-border-strong)] bg-gradient-to-br from-[var(--dw-panel)] to-[var(--dw-panel-2)] p-[18px] shadow-[var(--dw-shadow)]">
      <div className="mb-3 text-[13px] font-semibold text-[var(--dw-text)]">
        Production monitoring
      </div>
      <div className="relative aspect-video overflow-hidden rounded-[13px] border border-[var(--dw-border)] bg-gradient-to-br from-[var(--dw-panel-3)] via-[var(--dw-panel-2)] to-[var(--dw-card-2)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,240,179,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(15,240,179,0.06) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute bottom-[12%] left-[10%] h-[54%] w-[42%] rounded-lg border border-[var(--dw-border-strong)] bg-gradient-to-br from-[var(--dw-panel-3)] to-[var(--dw-panel-2)]" />
        <div className="absolute right-[10%] top-[18%] h-[46%] w-[42%] rounded-[7px] border-[1.5px] border-[#ff5a5a] shadow-[0_0_18px_rgba(255,90,90,0.4)]" />
        <div className="absolute right-[11%] top-[20%] rounded-[7px] border border-[rgba(255,90,90,0.4)] bg-[var(--dw-card)]/80 px-2.5 py-[7px] backdrop-blur-sm">
          <div className="text-[11px] font-bold text-[#ff7a7a]">Anomaly detected</div>
          <div className="mt-px text-[10px] text-[var(--dw-muted)]">Confidence: 98.6%</div>
        </div>
        <div
          className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#0ff0b3] to-transparent shadow-[0_0_14px_#0ff0b3]"
          style={{ animation: "dw-scan-y 3s ease-in-out infinite alternate" }}
        />
        <div className="absolute left-[11px] top-[11px] flex items-center gap-1.5 rounded-full bg-[var(--dw-bg)]/60 px-[9px] py-[3px] text-[10px] text-[var(--dw-text)]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#ff5a5a]"
            style={{ animation: "dw-blink 1.4s ease-in-out infinite" }}
          />
          REC
        </div>
      </div>
      <div className="mt-3.5 flex items-center justify-between">
        <span className="text-xs text-[var(--dw-muted)]">Line efficiency</span>
        <span className="font-heading text-[13px] font-bold text-[var(--dw-text)]">92%</span>
      </div>
      <div className="mt-[7px] h-[7px] overflow-hidden rounded-full bg-[var(--dw-border)]">
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
    <div className="relative rounded-[18px] border border-[var(--dw-border-strong)] bg-gradient-to-br from-[var(--dw-panel)] to-[var(--dw-panel-2)] p-[18px] shadow-[var(--dw-shadow)]">
      <div className="mb-3.5 text-[13px] font-semibold text-[var(--dw-text)]">
        Workflow automation
      </div>
      <div className="flex flex-col gap-2.5">
        {steps.map((step) => (
          <div
            key={step.label}
            className="flex items-center gap-3 rounded-xl border border-[var(--dw-border)] bg-[var(--dw-card-2)] px-3.5 py-[11px]"
          >
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[rgba(3,110,217,0.18)] text-[#036ed9]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <path d={step.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="flex-1 text-[12.5px] text-[var(--dw-text)]">{step.label}</span>
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
