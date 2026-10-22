"use client";
import React from "react";

const trustPoints = [
  { stat: "2000+", label: "Hair Transformations" },
  { stat: "✓", label: "Board-Certified Doctors" },
  { stat: "FDA", label: "Approved Equipment" },
  { stat: "24/7", label: "Patient Support" },
  { stat: "EMI", label: "No Hidden Costs" },
  { stat: "60+", label: "Clinics Pan-India" },
];

const TrustSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">

      {/* ══════════ MOBILE LAYOUT ══════════ */}
      <div className="md:hidden flex flex-col px-5 gap-5">

        {/* 1. Heading */}
        <h2 className="text-[22px] font-extrabold text-[#202020] leading-tight text-center">
          Not Just a Hair Clinic. A Center for Hair Restoration You Can Actually{" "}
          <span className="text-[#e82625]">Trust.</span>
        </h2>

        {/* 2. Subheading pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-[#fff0f0] text-[#e82625] text-[11px] font-bold px-4 py-1.5 rounded-full border border-[#fdd] uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#e82625] inline-block" />
            Why Choose Us
          </span>
        </div>

        {/* Mobile trust roadmap */}
          <div className="w-full min-w-0 py-2">
            <div className="relative mx-auto h-[540px] w-full max-w-[430px]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 480 540" preserveAspectRatio="none" fill="none">
                <path d="M 240 45 C 300 45 300 135 240 135 S 180 225 240 225 S 300 315 240 315 S 180 405 240 405 S 300 495 240 495" stroke="#fde4e4" strokeWidth="7" strokeLinecap="round" />
                <path className="trust-route" d="M 240 45 C 300 45 300 135 240 135 S 180 225 240 225 S 300 315 240 315 S 180 405 240 405 S 300 495 240 495" stroke="#e82625" strokeWidth="3" strokeLinecap="round" pathLength="100" strokeDasharray="10 90" />
              </svg>
              <ol aria-label="Why patients trust us" className="absolute inset-0 m-0 list-none p-0">
                {trustPoints.map((point, index) => (
                  <li
                    key={point.label}
                    className="trust-milestone absolute left-0 flex h-[90px] w-full items-center"
                    style={{ top: `${index * 90}px`, "--trust-delay": `${index * 0.9}s` } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="trust-dot absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[#e82625] text-[9px] font-bold text-white shadow-[0_0_0_1px_#fbd4d4]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className={`absolute top-1/2 h-px w-[11%] bg-[#e82625]/25 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`} />
                    <div className={`trust-tile relative flex h-[84px] w-[39%] flex-col items-center justify-center gap-1 rounded-2xl border border-[#e82625]/10 bg-white px-2 py-2 text-center shadow-[0_4px_18px_rgba(100,30,30,0.04)] sm:px-3 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                      <span className="block text-[20px] font-extrabold leading-none tracking-tight text-[#e82625] sm:text-[23px]">{point.stat}</span>
                      <h3 className="flex min-h-[32px] max-w-[170px] items-center justify-center text-balance text-[11px] font-semibold leading-[1.35] text-[#343434] sm:text-[12px]">{point.label}</h3>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <style jsx>{`
              .trust-route { animation: trust-route-travel 5.4s linear infinite; }
              .trust-tile {
                animation: trust-tile-light 5.4s ease-in-out infinite;
                animation-delay: var(--trust-delay);
              }
              .trust-dot {
                animation: trust-dot-light 5.4s ease-in-out infinite;
                animation-delay: var(--trust-delay);
              }
              @keyframes trust-route-travel {
                from { stroke-dashoffset: 10; }
                to { stroke-dashoffset: -90; }
              }
              @keyframes trust-tile-light {
                0%, 24%, 100% {
                  background-color: white;
                  border-color: rgba(232, 38, 37, 0.1);
                  box-shadow: 0 4px 18px rgba(100, 30, 30, 0.04);
                }
                7%, 15% {
                  background-color: #fff5f5;
                  border-color: rgba(232, 38, 37, 0.35);
                  box-shadow: 0 5px 20px rgba(232, 38, 37, 0.09);
                }
              }
              @keyframes trust-dot-light {
                0%, 24%, 100% { box-shadow: 0 0 0 1px #fbd4d4; }
                7%, 15% { box-shadow: 0 0 0 6px rgba(232, 38, 37, 0.14); }
              }
              @media (prefers-reduced-motion: reduce) {
                .trust-route, .trust-tile, .trust-dot { animation: none; }
              }
            `}</style>
          </div>

        {/* 4. Red divider */}
        {/* <div className="w-12 h-1 rounded-full bg-[#e82625] mx-auto" /> */}

        {/* 5. Description */}
        <p className="text-gray-500 text-[13px] leading-[1.8] text-center">
          There's no shortage of hair clinics in Chennai. What sets Advanced GroHair apart is
          simple: we measure our success by your results, not by the number of treatments we
          sell you.
        </p>
        <p className="text-gray-500 text-[13px] leading-[1.8] text-center">
          With over 2,000 transformations across 60+ clinics nationwide, our team of
          board-certified trichologists and hair transplant surgeons brings both expertise and
          empathy to every consultation. We use only FDA-approved equipment, offer no-cost EMI,
          and stay available 24/7 — because hair loss doesn't keep business hours.
        </p>

        {/* 6. Button */}
        <div className="flex justify-center pt-1">
          <a href="#form">
            <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-bold px-7 py-3 rounded-md text-[14px] shadow-lg">
              Book Free Consultation →
            </button>
          </a>
        </div>

      </div>

      {/* ══════════ DESKTOP LAYOUT ══════════ */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-6">
        <div className="flex flex-row gap-16 items-center">

          {/* LEFT: text content */}
          <div className="w-[52%] flex flex-col gap-5">

            <span className="inline-flex self-start items-center gap-2 bg-[#fff0f0] text-[#e82625] text-[12px] font-bold px-4 py-1.5 rounded-full border border-[#fdd] uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#e82625] inline-block" />
              Why Choose Us
            </span>

            <h2 className="text-[30px] lg:text-[34px] font-extrabold text-[#202020] leading-tight">
              Not Just a Hair Clinic. A Center for Hair Restoration You Can Actually{" "}
              <span className="text-[#e82625]">Trust.</span>
            </h2>

            {/* <div className="w-14 h-1 rounded-full bg-[#e82625]" /> */}

            <p className="text-gray-500 text-[15px] leading-[1.85]">
              There's no shortage of hair clinics in Chennai. What sets Advanced GroHair apart is
              simple: we measure our success by your results, not by the number of treatments we
              sell you.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.85]">
              With over 2,000 transformations across 60+ clinics nationwide, our team of
              board-certified trichologists and hair transplant surgeons brings both expertise and
              empathy to every consultation. We use only FDA-approved equipment, offer no-cost EMI,
              and stay available 24/7 — because hair loss doesn't keep business hours.
            </p>

            <div className="pt-2">
              <a href="#form">
                <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-bold px-8 py-3.5 rounded-md text-[15px] shadow-lg">
                  Book Free Consultation →
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT: trust roadmap */}
          <div className="w-[48%] min-w-0 py-4 lg:py-6">
            <div className="relative mx-auto h-[540px] w-full max-w-[480px]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 480 540" preserveAspectRatio="none" fill="none">
                <path d="M 240 45 C 300 45 300 135 240 135 S 180 225 240 225 S 300 315 240 315 S 180 405 240 405 S 300 495 240 495" stroke="#fde4e4" strokeWidth="7" strokeLinecap="round" />
                <path className="trust-route" d="M 240 45 C 300 45 300 135 240 135 S 180 225 240 225 S 300 315 240 315 S 180 405 240 405 S 300 495 240 495" stroke="#e82625" strokeWidth="3" strokeLinecap="round" pathLength="100" strokeDasharray="10 90" />
              </svg>
              <ol aria-label="Why patients trust us" className="absolute inset-0 m-0 list-none p-0">
                {trustPoints.map((point, index) => (
                  <li
                    key={point.label}
                    className="trust-milestone absolute left-0 flex h-[90px] w-full items-center"
                    style={{ top: `${index * 90}px`, "--trust-delay": `${index * 0.9}s` } as React.CSSProperties}
                  >
                    <span aria-hidden="true" className="trust-dot absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[#e82625] text-[9px] font-bold text-white shadow-[0_0_0_1px_#fbd4d4]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className={`absolute top-1/2 h-px w-[11%] bg-[#e82625]/25 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`} />
                    <div className={`trust-tile relative flex h-[80px] w-[39%] flex-col items-center justify-center gap-1 rounded-2xl border border-[#e82625]/10 bg-white px-2 py-2 text-center shadow-[0_4px_18px_rgba(100,30,30,0.04)] lg:px-4 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                      <span className="block text-[22px] font-extrabold leading-none tracking-tight text-[#e82625] lg:text-[25px]">{point.stat}</span>
                      <h3 className="flex min-h-[32px] max-w-[170px] items-center justify-center text-balance text-[11px] font-semibold leading-[1.35] text-[#343434] lg:text-[13px]">{point.label}</h3>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <style jsx>{`
              .trust-route { animation: trust-route-travel 5.4s linear infinite; }
              .trust-tile {
                animation: trust-tile-light 5.4s ease-in-out infinite;
                animation-delay: var(--trust-delay);
              }
              .trust-dot {
                animation: trust-dot-light 5.4s ease-in-out infinite;
                animation-delay: var(--trust-delay);
              }
              @keyframes trust-route-travel {
                from { stroke-dashoffset: 10; }
                to { stroke-dashoffset: -90; }
              }
              @keyframes trust-tile-light {
                0%, 24%, 100% {
                  background-color: white;
                  border-color: rgba(232, 38, 37, 0.1);
                  box-shadow: 0 4px 18px rgba(100, 30, 30, 0.04);
                }
                7%, 15% {
                  background-color: #fff5f5;
                  border-color: rgba(232, 38, 37, 0.35);
                  box-shadow: 0 5px 20px rgba(232, 38, 37, 0.09);
                }
              }
              @keyframes trust-dot-light {
                0%, 24%, 100% { box-shadow: 0 0 0 1px #fbd4d4; }
                7%, 15% { box-shadow: 0 0 0 6px rgba(232, 38, 37, 0.14); }
              }
              @media (prefers-reduced-motion: reduce) {
                .trust-route, .trust-tile, .trust-dot { animation: none; }
              }
            `}</style>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TrustSection;
