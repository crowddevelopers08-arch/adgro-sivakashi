"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AdvertisementBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/bfaf-1.webp",
      alt: "Hair Transplant Results - Before and After - Case 1",
      technique: "FUE Technique"
    },
    {
      src: "/bfaf-2.jpg",
      alt: "Hair Transplant Results - Before and After - Case 2",
      technique: "DHI Technique"
    },
    {
      src: "/bfaf-3.jpg",
      alt: "Hair Transplant Results - Before and After - Case 3",
      technique: "Sapphire FUE"
    }
  ];

  const features = ["FUE & DHI Techniques", "No Linear Scar", "3-5 Days Recovery"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative mx-auto my-6 w-[calc(100%-2rem)] max-w-[1400px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1f0a0a] via-[#0f0505] to-[#0f0505] shadow-xl sm:my-8 sm:w-[calc(100%-3rem)] sm:rounded-[32px]">
      {/* decorative ring */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border-[40px] border-[#e82625]/10" />

      <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10 max-sm:gap-0">
        {/* LEFT: content */}
        <div className="min-w-0 order-2 lg:order-1 max-sm:contents">
          <span className="inline-flex items-center rounded-full border max-sm:order-1 max-sm:justify-self-start border-[#e82625]/30 bg-[#e82625]/10 px-4 py-2 text-sm font-bold text-white sm:text-base">
            ✓ Permanent Solution
          </span>
          <h2 className="mt-4 max-sm:order-2 text-[30px] font-extrabold leading-tight text-white sm:text-[38px] lg:text-[46px]">
            Hair <span className="text-[#e82625]">Transplant</span>
          </h2>
          <p className="mt-3 max-sm:order-3 max-w-xl text-[14px] leading-[1.85] text-white/80 sm:text-[15px]">
            Consider investing in a permanent, hassle-free solution with our hair transplantation procedure. Our advanced techniques ensure natural-looking results with minimal scarring and downtime.
          </p>

          {/* vertical roadmap */}
          <ol className="relative mt-6 space-y-4 max-sm:order-6">
            <span aria-hidden="true" className="absolute left-[15px] top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#e82625] to-[#e82625]/10" />
            {features.map((feature, index) => (
              <li key={feature} className="relative flex items-center gap-4">
                <span aria-hidden="true" className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e82625] text-[11px] font-bold text-white ring-4 ring-[#0f0505]">
                  {index + 1}
                </span>
                <span className="text-[14px] font-semibold text-white/90 sm:text-[15px]">{feature}</span>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center max-sm:order-7">
            <a href="#form" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e82625] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#c41e1d] sm:w-auto sm:text-base">
              <span>Book Consultation</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs font-medium text-white/90 sm:text-sm">Adgro Sivakasi</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 max-sm:order-8">
            {["Free Consultation", "EMI Available"].map((chip) => (
              <span key={chip} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/90 sm:text-sm">
                <span className="text-[#e82625]">✓</span> {chip}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: framed image */}
        <div className="min-w-0 order-1 lg:order-2 max-sm:contents">
          <div className="relative max-sm:order-4 max-sm:mt-6">
            {/* offset red frame */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-[#e82625]/60" />

            <div className="relative h-[clamp(220px,62vw,400px)] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1f0a0a] lg:h-[clamp(300px,48svh,440px)]">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  aria-hidden={index !== currentImageIndex}
                  className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                >
                  {/* blurred copy fills the empty space so every slide looks the same size */}
                  <Image src={image.src} alt="" aria-hidden="true" fill className="scale-110 object-cover opacity-50 blur-2xl" sizes="200px" />
                  <Image src={image.src} alt={image.alt} fill className="relative object-contain" sizes="(max-width: 1023px) 90vw, (max-width: 1450px) 45vw, 640px" priority={index === 0} />
                </div>
              ))}

              <span className="absolute bottom-3 left-3 z-10 rounded-full bg-[#e82625] px-3 py-1 text-[11px] font-bold text-white shadow-lg sm:text-xs">
                {images[currentImageIndex].technique}
              </span>
            </div>
          </div>

          {/* selector */}
          <div className="mt-6 flex items-center justify-center gap-2 max-sm:order-5" aria-label="Select hair transplant result">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                aria-pressed={currentImageIndex === index}
                aria-label={image.technique}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[13px] ${index === currentImageIndex ? "border-[#e82625] bg-[#e82625] text-white" : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10"}`}
              >
                {image.technique}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanner;
