export const NAV_LINKS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#how", label: "How We Work" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
] as const;

export const ECOSYSTEM = [
  { name: "AI Learning Systems", role: "Adaptive education & training", accent: "var(--dw-blue)" },
  { name: "AI Sales Agents", role: "Recommend, guide & convert", accent: "var(--dw-mint)" },
  { name: "Customer Experience", role: "Voice & chat, 24/7", accent: "var(--dw-teal)" },
  { name: "Industrial AI", role: "Vision & smart operations", accent: "var(--dw-blue)" },
  { name: "Intelligent Automation", role: "OCR, workflows & integration", accent: "var(--dw-mint)" },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Discover",
    short: "We map your goals, data, and bottlenecks to find where AI delivers real value.",
  },
  {
    n: "02",
    title: "Design",
    short: "We architect the solution — models, integrations, and the flow that fits your operations.",
  },
  {
    n: "03",
    title: "Build",
    short: "We develop, train, and integrate the system into your existing tools, securely.",
  },
  {
    n: "04",
    title: "Scale",
    short: "We monitor performance, refine the models, and scale as your needs grow.",
  },
] as const;

export const SOLUTIONS = [
  {
    num: "01",
    tag: "AI Learning Platform",
    name: "Modrs",
    desc: "An adaptive AI learning platform that personalizes every path and tutors each learner in real time.",
    caps: "Personalized paths · AI tutoring · Live analytics · Smart assessments",
  },
  {
    num: "02",
    tag: "Retail & Commerce",
    name: "AI Sales Agents",
    desc: "Assistants that recommend, guide, and convert across chat and voice — turning conversations into sales.",
    caps: "Recommendations · Conversational shopping · Sales automation",
  },
  {
    num: "03",
    tag: "Customer Experience",
    name: "Customer Experience AI",
    desc: "Always-on voice and chat agents that resolve support and calls across every channel, in Arabic and English.",
    caps: "Voice AI · Call automation · Omnichannel · AR / EN",
  },
  {
    num: "04",
    tag: "Computer Vision",
    name: "Industrial AI",
    desc: "Computer vision and smart operations for quality inspection, monitoring, and automation on the floor.",
    caps: "Quality inspection · Smart monitoring · Defect detection",
  },
  {
    num: "05",
    tag: "OCR & Workflows",
    name: "Intelligent Automation",
    desc: "OCR, document processing, and workflows that connect the systems you already run — end to end.",
    caps: "OCR · Document processing · Workflows · Integrations",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Education",
    impact: "Adaptive learning",
    desc: "AI that personalizes every learning path, tracks mastery, and lifts outcomes at scale.",
    gradient: "linear-gradient(150deg,#0b4f6b,#036ed9 55%,#08a17f)",
    gridColumn: "1 / 3",
    gridRow: "1 / 3",
    featured: true,
  },
  {
    name: "Industrial AI",
    impact: "Computer vision",
    desc: "Vision and operational intelligence for quality, safety, and uptime on the factory floor.",
    gradient: "linear-gradient(150deg,#06303f,#0a5a52 60%,#08a17f)",
    gridColumn: "3",
    gridRow: "1",
    featured: false,
  },
  {
    name: "Healthcare",
    impact: "Clinical intelligence",
    desc: "Secure, compliant AI that supports clinicians and streamlines patient care.",
    gradient: "linear-gradient(150deg,#073649,#0b7fae 60%,#0ff0b3)",
    gridColumn: "3",
    gridRow: "2",
    featured: false,
  },
  {
    name: "Retail & E-commerce",
    impact: "Smart commerce",
    desc: "Recommendations, pricing, and automation across the entire customer journey.",
    gradient: "linear-gradient(150deg,#08384a,#036ed9 70%,#1fb0ff)",
    gridColumn: "1",
    gridRow: "3",
    featured: false,
  },
  {
    name: "Customer Experience",
    impact: "AI agents",
    desc: "Always-on voice and chat agents that resolve requests across every channel.",
    gradient: "linear-gradient(150deg,#0a3d44,#08a17f 65%,#0ff0b3)",
    gridColumn: "2",
    gridRow: "3",
    featured: false,
  },
  {
    name: "Financial Services",
    impact: "Intelligent decisions",
    desc: "Fraud detection, risk scoring, and compliant automation built for sensitive data.",
    gradient: "linear-gradient(150deg,#052a39,#0b5f93 60%,#036ed9)",
    gridColumn: "3",
    gridRow: "3",
    featured: false,
  },
] as const;

export const WHY_US = [
  {
    title: "Custom AI solutions, not templates",
    icon: "M13 2L3 14h7l-1 8 10-12h-7l1-8z",
    accent: "var(--dw-blue)",
    label: "AI Processing Speed",
    value: "10x",
    caption: "faster than manual workflows",
    pill: "Running 24/7",
  },
  {
    title: "Secure and scalable architecture",
    icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",
    accent: "var(--dw-mint)",
    label: "Reliable by Design",
    value: "99.9%",
    caption: "uptime — secure, scalable infrastructure",
    pill: "Encrypted end-to-end",
  },
  {
    title: "Arabic and English AI experiences",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c2.5 2.5 2.5 15 0 18 M12 3c-2.5 2.5-2.5 15 0 18",
    accent: "var(--dw-teal)",
    label: "Bilingual AI",
    value: "AR / EN",
    caption: "native Arabic & English experiences",
    pill: "Dual-language ready",
  },
  {
    title: "Seamless integration with existing systems",
    icon: "M9 13a4 4 0 0 0 6 0l2-2a4 4 0 0 0-6-6l-1 1 M15 11a4 4 0 0 0-6 0l-2 2a4 4 0 0 0 6 6l1-1",
    accent: "var(--dw-blue)",
    label: "Connected Systems",
    value: "50+",
    caption: "connectors to the tools you already use",
    pill: "CRM · ERP · APIs",
  },
  {
    title: "Fast prototyping and production deployment",
    icon: "M5 13l4 8 2-5 5-2-8-4z M14 10l5-5",
    accent: "var(--dw-mint)",
    label: "Time to Prototype",
    value: "2–6 wks",
    caption: "from idea to production-ready",
    pill: "Shipping continuously",
  },
  {
    title: "Human-centered AI design",
    icon: "M12 21C5 14 4 9 7 6a4.5 4.5 0 0 1 5 1 4.5 4.5 0 0 1 5-1c3 3 2 8-5 15z",
    accent: "var(--dw-teal)",
    label: "Human-Centered",
    value: "100%",
    caption: "designed around the people who use it",
    pill: "Trusted by teams",
  },
] as const;

export const FAQS = [
  {
    q: "What AI solutions do you build?",
    a: "We build custom AI products and systems — chatbots and voice agents, OCR and document intelligence, workflow automation, computer vision, data analytics, and enterprise AI integrations — tailored to your business.",
  },
  {
    q: "Can you integrate AI with our current system?",
    a: "Yes. We specialize in connecting AI to the tools, data, and platforms you already use (CRM, ERP, internal apps) through secure APIs and integrations — no need to rebuild from scratch.",
  },
  {
    q: "Do you support Arabic and English?",
    a: "Absolutely. We design bilingual AI experiences with models and interfaces tuned for natural language in both Arabic and English.",
  },
  {
    q: "How long does an AI project take?",
    a: "Most engagements reach a working prototype in 2–6 weeks. From there we refine and harden the system toward a production-ready release on a timeline we agree together.",
  },
  {
    q: "Is the solution secure for business data?",
    a: "Security is designed in from day one — encryption, access controls, and scalable architecture that meets enterprise requirements for handling sensitive business data.",
  },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#why", label: "Why Us" },
  { href: "#usecases", label: "Use Cases" },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { href: "#faq", label: "FAQ" },
  { href: "#how", label: "How We Work" },
  { href: "#industries", label: "Industries" },
  { href: "#cta", label: "Contact" },
] as const;
