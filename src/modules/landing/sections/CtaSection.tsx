import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,5vw,40px)] py-[clamp(56px,8vw,100px)]"
    >
      <div
        data-reveal
        className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--dw-blue)] to-[var(--dw-teal)] px-[clamp(28px,5vw,60px)] py-[clamp(48px,7vw,84px)] text-center shadow-[0_30px_70px_-28px_var(--dw-blue)]"
      >
        <svg
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-[0.22]"
        >
          <g stroke="#fff" strokeWidth="1.4" fill="none">
            <path d="M560 60h-70l-18 18M560 110h-110l-22 22M560 160h-60M40 240l24-24h70M40 200h120l18-18" />
            <circle cx="472" cy="78" r="3" fill="#fff" />
            <circle cx="428" cy="132" r="3" fill="#fff" />
            <circle cx="134" cy="216" r="3" fill="#fff" />
            <circle cx="178" cy="182" r="3" fill="#fff" />
          </g>
        </svg>

        <h2 className="relative m-auto max-w-[20ch] font-heading text-[clamp(28px,4.5vw,48px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
          Ready to Build Your Next AI Solution?
        </h2>
        <p className="relative mx-auto mt-[18px] max-w-[56ch] text-[clamp(15px,1.7vw,18px)] leading-relaxed text-white/90">
          Let&apos;s transform your business process into an intelligent,
          automated, and scalable AI system.
        </p>
        <Link
          href="#top"
          className="relative mt-8 inline-flex items-center gap-[9px] rounded-full bg-white px-8 py-4 text-base font-bold text-[#041e28] no-underline shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-14px_rgba(0,0,0,0.55)]"
        >
          Book a Consultation <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}
