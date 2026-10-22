"use client";
import { Calendar, Clock, PhoneCall } from "lucide-react";
import React from "react";

const Footer = () => {
  const ICON_SIZE = 18;
  return (
    <footer className="w-full bg-black pb-[calc(56px+env(safe-area-inset-bottom,0px))] text-white sm:pb-0">
      <div className="max-w-[1400px] mx-auto px-6 pb-3 pt-6 sm:py-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-8 items-start sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 xl:grid-cols-[1fr_1.1fr_1.15fr_0.9fr] xl:gap-8">

          {/* LEFT – BRAND */}
          <div>
            <img
              src="/logo2.png"
              alt="Advanced Grohair"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Our experienced professionals and experts recommend the best
              treatment that matches your needs and assist you in achieving
              the desired results that you have always longed for.
            </p>
          </div>

          {/* CENTER – MAP */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[360px] h-[260px] sm:h-[280px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Adgro Hair Sivakasi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.6438086412472!2d77.79712447502398!3d9.44431459063454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cfe6ff93c8cd%3A0xaec4b11424c76861!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Sivakasi!5e1!3m2!1sen!2sin!4v1792588963873!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT – CONTACT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="font-medium text-white">
                
              </li>
              <li className="uppercase text-sm tracking-wide">
                  Adgro Hair Sivakasi
              </li>
              <li className="text-sm leading-relaxed">
                Second Floor Block No.20, Sankaran Avenue, Plot No.31, Pandian St, Indira Gandhi Nagar, Sivakasi, Chennai, Tamil Nadu 600042
              </li>
              <li>
                <a
                  href="mailto:customercare@adgrohairsivakasi.in"
                  className="break-words hover:text-[#e82625] transition"
                >
                  customercare@adgrohairsivakasi.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919610356789"
                  className="break-words hover:text-[#e82625] transition"
                >
                  +91 9610356789
                </a>
              </li>
            </ul>
          </div>

          {/* OPENING HOURS */}
          <div className="min-w-0">
            <h3 className="mb-5 flex items-center gap-2.5 text-2xl font-semibold">
              <Clock size={21} aria-hidden="true" className="shrink-0 text-[#e82625]" />
              Hours
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-1">
              <table className="w-full text-left text-[13px]">
                <caption className="sr-only">Clinic opening hours</caption>
                <tbody className="divide-y divide-white/10">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <tr key={day}>
                      <th scope="row" className="py-2.5 pr-3 font-medium text-gray-300">{day}</th>
                      <td className="whitespace-nowrap py-2.5 text-right font-medium tabular-nums text-white">10 am &ndash; 8 pm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-10 max-[470px]:mt-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Adgro Hair Sivakasi. All rights reserved.
          </p>

          {/* LINKS */}
          <a
            href="/privacy-policy"
            className="text-sm text-[#e82625] hover:underline"
          >
            Privacy & Policy
          </a>

        </div>

      </div>

               <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-black pb-[env(safe-area-inset-bottom,0px)] sm:hidden">
          <a
            href="tel:+919610356789"
            className="flex h-14 min-w-0 flex-1 items-center justify-center gap-2 bg-[#ea2424] px-3 text-sm font-semibold text-white hover:bg-[#ea2424]/90 transition-colors"
          >
            <PhoneCall size={ICON_SIZE} className="shrink-0" />
            <span>Call Now</span>
          </a>

          <a
            href="#form"
            className="flex h-14 min-w-0 flex-1 items-center justify-center gap-2 bg-black px-3 text-sm font-semibold text-white hover:bg-gray-900 transition-colors"
          >
            <Calendar size={ICON_SIZE} className="shrink-0" />
            <span>Book Now</span>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
