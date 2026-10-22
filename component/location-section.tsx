"use client";
import React from "react";

const paragraphs = [
  "Advanced GroHair is one of Chennai's leading hair and skin clinics, with a dedicated center in Sivakasi serving patients across South Chennai. If you've been searching for a \"hair transplant clinic near me\" or a \"trichologist near me\" — your search ends here.",
  "Our Sivakasi clinic offers everything from a first-time hair fall consultation to full hair transplant surgery, all under one roof. We also offer advanced scalp analysis, Growth therapy, laser hair regrowth, and cosmetic hair systems — tailored to your budget and lifestyle.",
  "We don't believe in a one-size-fits-all approach. Every patient gets a personalised treatment plan, flexible financing, and a care team that actually follows through.",
];

const LocationSection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0a0a] py-10 sm:py-14 lg:py-20">
      <img
        src="/hair-loss-treatment.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/75" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />

      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6 lg:sticky lg:top-24 lg:py-5">
          <span className="inline-flex self-start items-center gap-2 text-[#e82625] text-[10px] sm:text-[11px] font-bold px-4 py-2.5 rounded-full uppercase tracking-[0.12em]"
            style={{ background: "rgba(232,38,37,0.15)", border: "1px solid rgba(232,38,37,0.35)" }}>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M6 0C3.24 0 1 2.24 1 5C1 8.5 6 14 6 14C6 14 11 8.5 11 5C11 2.24 8.76 0 6 0Z" fill="#e82625" />
              <circle cx="6" cy="5" r="1.8" fill="#0a0a0a" />
            </svg>
            Sivakasi, South Chennai
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight">
            Looking for a Hair Clinic Near You in Sivakasi?{" "}
            <span className="text-[#e82625]">We're Closer Than You Think.</span>
          </h2>
          {/* <div aria-hidden="true" className="h-1 w-16 rounded-full bg-[#e82625]" /> */}
          <div className="hidden pt-2 lg:block">
        <a href="#form" className="inline-flex w-full sm:w-auto">
          <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-bold w-full px-6 py-3.5 rounded-xl text-[14px] shadow-xl tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e82625]">
            Book Free Consultation →
          </button>
        </a>
          </div>
        </div>

        <div className="min-w-0">
          <ol aria-label="About our Sivakasi clinic" className="m-0 list-none space-y-4 p-0">
            {paragraphs.map((text, index) => (
              <li key={text} className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6">
                <span aria-hidden="true" className="absolute inset-y-5 left-0 w-[3px] rounded-r-full bg-[#e82625]" />
                <div className="flex items-start gap-4 sm:gap-5">
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e82625]/30 bg-[#e82625]/10 text-[14px] font-bold tabular-nums text-[#e82625] sm:h-11 sm:w-11">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-[13px] leading-[1.85] text-white/90 sm:text-[14px]">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 lg:hidden">
        <a href="#form" className="inline-flex w-full sm:w-auto">
          <button className="bg-[#e82625] hover:bg-[#c41e1d] transition-colors duration-200 text-white font-bold w-full px-6 py-3.5 rounded-xl text-[14px] shadow-xl tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e82625]">
            Book Free Consultation →
          </button>
        </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
