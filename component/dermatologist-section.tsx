"use client";
import React from "react";

const DermatologistSection = () => {
  return (
    <section
      className="w-full overflow-hidden py-4"
      style={{
        background:
          "linear-gradient(115deg, #fef2f2 0%, #fdf5f5 30%, #fafafa 60%, #f9fafb 100%)",
      }}
    >

      {/* ══════════ MOBILE LAYOUT (hidden on md+) ══════════ */}
      <div className="md:hidden flex flex-col px-5 py-6 gap-4">

        {/* 1. Heading */}
        <h2 className="text-[24px] font-extrabold text-[#202020] leading-tight text-center">
          FUE &amp; DHI Hair Transplant in Chennai —{" "}
          <span className="text-[#e82625]">Permanent. Natural. Yours.</span>
        </h2>

        {/* 2. Subheading */}
        <p className="text-[#e82625] text-[14px] font-semibold text-center">
          Leading Chain Of Hair Clinics in India
        </p>

        {/* Mobile treatment roadmap */}
        <div className="relative mx-auto h-[440px] w-full max-w-[420px]">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 320 440" preserveAspectRatio="none" fill="none">
            <path d="M 160 44 C 200 44 200 132 160 132 S 120 220 160 220 S 200 308 160 308 S 120 396 160 396" stroke="#e82625" strokeOpacity="0.15" strokeWidth="5" strokeLinecap="round" />
            <path className="mobile-wave-trail" d="M 160 44 C 200 44 200 132 160 132 S 120 220 160 220 S 200 308 160 308 S 120 396 160 396" stroke="#e82625" strokeWidth="3" strokeLinecap="round" pathLength="100" strokeDasharray="12 88" />
          </svg>
          <ol aria-label="Hair transplant highlights" className="absolute inset-0 m-0 list-none p-0">
            {[
              "FUE & DHI Techniques",
              "No Linear Scar",
              "3\u20135 Days Recovery Time",
              "Free Consultation Available",
              "No-Cost EMI Options",
            ].map((title, index) => (
              <li
                key={title}
                className="absolute left-0 flex h-[88px] w-full items-center"
                style={{ top: `${index * 88}px`, "--step-delay": `${index * 1.4}s` } as React.CSSProperties}
              >
                <span aria-hidden="true" className="mobile-wave-number absolute left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fdf5f5] bg-[#e82625] text-[11px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className={`absolute top-1/2 h-px w-[11%] bg-[#e82625]/25 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`} />
                <h3 className={`mobile-wave-title relative flex min-h-[68px] w-[39%] items-center justify-center rounded-xl border border-[#e82625]/10 bg-white/90 px-2 py-3 text-center text-balance text-[12px] font-semibold leading-relaxed text-[#202020] shadow-sm sm:text-[14px] ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                  {title}
                </h3>
              </li>
            ))}
          </ol>
          <style jsx>{`
            .mobile-wave-trail { animation: mobile-wave-travel 7s linear infinite; }
            .mobile-wave-title {
              animation: mobile-wave-highlight 7s ease-in-out infinite;
              animation-delay: var(--step-delay);
            }
            .mobile-wave-number {
              animation: mobile-wave-glow 7s ease-in-out infinite;
              animation-delay: var(--step-delay);
            }
            @keyframes mobile-wave-travel {
              from { stroke-dashoffset: 12; }
              to { stroke-dashoffset: -88; }
            }
            @keyframes mobile-wave-highlight {
              0%, 25%, 100% { color: #202020; background-color: rgba(255,255,255,0.9); }
              10%, 15% { color: #e82625; background-color: #fff1f1; }
            }
            @keyframes mobile-wave-glow {
              0%, 25%, 100% { box-shadow: 0 0 0 0 rgba(232,38,37,0); }
              10%, 15% { box-shadow: 0 0 0 5px rgba(232,38,37,0.12); }
            }
            @media (prefers-reduced-motion: reduce) {
              .mobile-wave-trail, .mobile-wave-title, .mobile-wave-number { animation: none; }
            }
          `}</style>
        </div>

        {/* 4. Description */}
        <p className="text-gray-500 text-[13px] leading-[1.8] text-center">
          Stop spending on treatments that only delay the inevitable. A hair transplant at
          Advanced GroHair Sivakasi gives you a permanent solution — hair that grows from
          your own follicles, in a hairline designed just for you.
        </p>
        <p className="text-gray-500 text-[13px] leading-[1.8] text-center">
          Our surgeons use the latest FUE and DHI techniques, leaving no linear scars and
          requiring just 3–5 days of recovery time. Most patients return to work the
          following week.
        </p>

        {/* 5. Button */}
        <div className="flex justify-center pt-1">
          <a href="#form">
            <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-semibold px-7 py-3 rounded-md text-[14px] shadow-lg">
              View All Doctors
            </button>
          </a>
        </div>

      </div>

      {/* ══════════ DESKTOP LAYOUT (hidden below md) ══════════ */}
      <div className="hidden md:flex flex-row items-stretch max-w-[1400px] mx-auto min-h-[500px]">

        {/* LEFT: treatment roadmap */}
        <div className="relative flex w-[52%] items-center justify-center px-5 py-10 lg:px-10">
          <div className="wave-roadmap relative h-[340px] w-full max-w-[600px]">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 500 320" preserveAspectRatio="none" fill="none">
              <path d="M 50 180 C 90 180 110 110 150 110 S 210 180 250 180 S 310 110 350 110 S 410 180 450 180" stroke="#e82625" strokeOpacity="0.15" strokeWidth="5" strokeLinecap="round" />
              <path className="wave-trail" d="M 50 180 C 90 180 110 110 150 110 S 210 180 250 180 S 310 110 350 110 S 410 180 450 180" stroke="#e82625" strokeWidth="3" strokeLinecap="round" pathLength="100" strokeDasharray="12 88" />
            </svg>
            <ol aria-label="Hair transplant highlights" className="absolute inset-0 m-0 list-none p-0">
              {[
                "FUE & DHI Techniques",
                "No Linear Scar",
                "3\u20135 Days Recovery Time",
                "Free Consultation Available",
                "No-Cost EMI Options",
              ].map((title, index) => (
                <li
                  key={title}
                  className="wave-step absolute inset-y-0 w-[20%]"
                  style={{ left: `${index * 20}%`, "--step-delay": `${index * 1.4}s` } as React.CSSProperties}
                >
                  <span
                    aria-hidden="true"
                    className="wave-number absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#fdf5f5] bg-[#e82625] text-xs font-bold text-white lg:h-12 lg:w-12 lg:text-sm"
                    style={{ top: index % 2 === 0 ? "56.25%" : "34.375%" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="absolute left-1/2 w-px -translate-x-1/2 bg-[#e82625]/25"
                    style={{ top: index % 2 === 0 ? "63%" : "25%", height: "7%" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="wave-title absolute left-0 w-full px-1 text-center text-[12px] font-semibold leading-relaxed text-[#202020] lg:text-[15px]"
                    style={index % 2 === 0 ? { top: "73%" } : { bottom: "78%" }}
                  >
                    {title}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
          <style jsx>{`
            .wave-trail {
              animation: wave-travel 7s linear infinite;
            }
            .wave-title {
              animation: wave-float 7s ease-in-out infinite;
              animation-delay: var(--step-delay);
            }
            .wave-number {
              animation: wave-glow 7s ease-in-out infinite;
              animation-delay: var(--step-delay);
            }
            @keyframes wave-travel {
              from { stroke-dashoffset: 12; }
              to { stroke-dashoffset: -88; }
            }
            @keyframes wave-float {
              0%, 25%, 100% { transform: translateY(0); color: #202020; }
              10%, 15% { transform: translateY(-6px); color: #e82625; }
            }
            @keyframes wave-glow {
              0%, 25%, 100% { box-shadow: 0 0 0 0 rgba(232, 38, 37, 0); }
              10%, 15% { box-shadow: 0 0 0 7px rgba(232, 38, 37, 0.12); }
            }
            @media (prefers-reduced-motion: reduce) {
              .wave-trail, .wave-title, .wave-number { animation: none; }
            }
          `}</style>
        </div>

        {/* RIGHT: text */}
        <div className="w-[48%] flex flex-col justify-center px-10 lg:px-14 text-left">
          <h2 className="text-[38px] lg:text-[42px] font-extrabold text-[#202020] leading-tight mb-3">
            FUE &amp; DHI Hair Transplant in Chennai —<br />Permanent. Natural. Yours.
          </h2>
          <p className="text-[#e82625] text-[17px] font-semibold mb-5">
            Leading Chain Of Hair Clinics in India
          </p>
          <p className="text-gray-500 text-[15px] leading-[1.8] mb-3 max-w-[500px]">
            Stop spending on treatments that only delay the inevitable. A hair transplant at
            Advanced GroHair Sivakasi gives you a permanent solution — hair that grows from
            your own follicles, in a hairline designed just for you.
          </p>
          <p className="text-gray-500 text-[15px] leading-[1.8] mb-8 max-w-[500px]">
            Our surgeons use the latest FUE (Follicular Unit Extraction) and DHI (Direct Hair
            Implantation) techniques, leaving no linear scars and requiring just 3–5 days of
            recovery time. Most patients return to work the following week.
          </p>
          <div>
            <a href="#form">
              <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-semibold px-8 py-[13px] rounded-md text-[15px] tracking-wide shadow-lg">
                View All Doctors
              </button>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default DermatologistSection;
