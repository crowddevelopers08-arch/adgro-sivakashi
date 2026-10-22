"use client";
import React, { useEffect, useState } from "react";

const desktopBanners = ["/siva-ban-1.png", "/siva-ban.png"];
const mobileBanners = ["/siva-mbles-2.png", "/siva-mble-2.png"];

const BannerCtaSection = () => {
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const currentDesktopBanner = desktopBanners[currentDesktopSlide];
  const currentMobileBanner = mobileBanners[currentMobileSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentDesktopSlide((slide) => (slide + 1) % desktopBanners.length);
      setCurrentMobileSlide((slide) => (slide + 1) % mobileBanners.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-0 md:py-0">

      <div className="max-w-[1500px] mx-auto px-0 sm:px-6 lg:px-0">

        {/* ── MOBILE: banner carousel ── */}
        <div className="mobile-banner md:hidden relative aspect-[941/1672] w-full overflow-hidden rounded-2xl bg-white">
          <img
            key={currentMobileBanner}
            src={currentMobileBanner}
            alt="Adgro Hair Clinic Banner"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Dot indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {mobileBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentMobileSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  currentMobileSlide === i
                    ? "w-4 h-2 bg-[#e82625]"
                    : "w-2 h-2 bg-white opacity-70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── TABLET: banner carousel ── */}
        <div className="hidden md:block lg:hidden relative w-full overflow-hidden rounded-2xl bg-white">
          <div className="relative aspect-[1448/1086] w-full">
            <img
              key={currentDesktopBanner}
              src={currentDesktopBanner}
              alt="Adgro Hair Clinic Banner"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── DESKTOP: banner carousel ── */}
        <div className="hidden lg:block relative w-full rounded-2xl overflow-hidden" style={{ height: "580px" }}>
          <img
            key={currentDesktopBanner}
            src={currentDesktopBanner}
            alt="Adgro Hair Clinic Banner"
            className="absolute inset-0  w-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default BannerCtaSection;