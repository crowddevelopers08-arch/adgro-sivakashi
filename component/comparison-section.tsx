"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AdvertisementBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/wat1.jpeg",
      alt: "Hair Transplant Results - Before and After - Case 1",
      technique: "FUE Technique"
    },
    {
      src: "/wat2.jpeg",
      alt: "Hair Transplant Results - Before and After - Case 2",
      technique: "DHI Technique"
    },
    {
      src: "/wat3.jpeg",
      alt: "Hair Transplant Results - Before and After - Case 3",
      technique: "Sapphire FUE"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="mx-auto my-6 w-[calc(100%-2rem)] max-w-[1400px] sm:my-8 sm:w-[calc(100%-3rem)] overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0505] shadow-xl sm:rounded-[32px]">
      <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-2 lg:items-end lg:gap-10 lg:px-8 lg:py-6">
        <div className="min-w-0 space-y-4">
          <div className="inline-flex items-center rounded-full border border-[#e82625]/30 bg-[#e82625]/10 px-4 py-2">
<span className="text-white font-bold text-sm sm:text-base">✓ Permanent Solution</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white leading-tight">
            Hair Transplant
          </h2>
        </div>
          <p className="text-[14px] sm:text-[15px] leading-[1.85] text-white/80 max-w-xl">
            Consider investing in a permanent, hassle-free solution with our hair transplantation procedure. Our advanced techniques ensure natural-looking results with minimal scarring and downtime.
          </p>
      </div>

      <div className="mx-4 grid overflow-hidden rounded-2xl border border-white/10 bg-[#1f0a0a] sm:mx-6 lg:mx-8 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 bg-[#0f0505] p-3 sm:p-4">
          <div className="relative h-[clamp(160px,50vw,340px)] w-full overflow-hidden rounded-xl lg:h-[clamp(260px,42svh,420px)]">
            {images.map((image, index) => (
              <div
                key={image.src}
                aria-hidden={index !== currentImageIndex}
                className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="(max-width: 1023px) 90vw, (max-width: 1450px) 65vw, 1000px" priority={index === 0} />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2" aria-label="Select hair transplant result">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                aria-pressed={currentImageIndex === index}
                className={`min-h-12 min-w-0 rounded-lg border px-2 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[13px] ${index === currentImageIndex ? "border-[#e82625] bg-[#e82625] text-white" : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10"}`}
              >
                {image.technique}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-5 border-t border-white/10 p-5 sm:p-6 lg:border-l lg:border-t-0">
          <ul className="m-0 grid list-none gap-5 p-0">
            {["FUE & DHI Techniques", "No Linear Scar", "3-5 Days Recovery"].map((feature, index) => (
              <li key={feature} className="flex items-start gap-3">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e82625]/30 text-[10px] font-bold text-[#e82625]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-[13px] font-medium leading-relaxed text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="h-px bg-white/10" />
            <a href="#form" className="w-full sm:w-auto justify-center bg-[#e82625] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-[#c41e1d] transition-colors shadow-lg text-sm sm:text-base inline-flex items-center gap-2 group">
                <span>Book Consultation</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 bg-white/[0.03] px-5 py-5 sm:justify-between sm:px-6 lg:px-8">
          <p className="text-white/90 text-xs sm:text-sm font-medium">
            Adgro Ambattur | Chennai
          </p>
          <p className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1">
            <span className="text-[#e82625]">✓</span> Free Consultation
          </p>
          <p className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1">
            <span className="text-[#e82625]">✓</span> EMI Available
          </p>
      </div>
    </section>
  );
};

export default AdvertisementBanner;
