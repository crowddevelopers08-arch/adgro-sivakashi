"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CONCERN_OPTIONS = [
  "Hair Loss",
  "Alopecia Areata",
  "Dandruff",
  "Baldness",
  "Hair Thinning Treatment",
  "Receding Hair Solutions",
  "Genetic Hair Loss",
];

const HAIR_LOSS_STAGE_OPTIONS = [
  { id: "stage-1", label: "Stage 1", imageSrc: "/st1.jpeg" },
  { id: "stage-2", label: "Stage 2", imageSrc: "/st2.jpeg" },
  { id: "stage-3", label: "Stage 3", imageSrc: "/st3.jpeg" },
  { id: "stage-4", label: "Stage 4", imageSrc: "/st4.jpeg" },
  { id: "stage-5", label: "Stage 5", imageSrc: "/st5.jpeg" },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  concerns: string[];
  hairLossStage: string;
  willingToVisit: string;
}

interface FormFieldsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleConcernToggle: (concern: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const FormFields = ({
  formData,
  handleInputChange,
  handleConcernToggle,
  handleSubmit,
  isSubmitting,
}: FormFieldsProps) => (
  <form onSubmit={handleSubmit} noValidate className="grid min-w-0 gap-6 xl:grid-cols-2 xl:gap-x-7">
    <div className="min-w-0 space-y-4">
    <input
      type="text"
      name="name"
      aria-label="Your Full Name"
      autoComplete="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Your Full Name"
      className="w-full min-h-12 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-[#202020] placeholder:text-gray-400 focus:border-[#e82625] focus:outline-none focus:ring-2 focus:ring-[#e82625]/20 disabled:opacity-50"
      disabled={isSubmitting}
    />
    <input
      type="tel"
      name="phone"
      aria-label="Valid 10 Digit Phone No."
      autoComplete="tel"
      inputMode="tel"
      value={formData.phone}
      onChange={handleInputChange}
      placeholder="Valid 10 Digit Phone No."
      className="w-full min-h-12 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-[#202020] placeholder:text-gray-400 focus:border-[#e82625] focus:outline-none focus:ring-2 focus:ring-[#e82625]/20 disabled:opacity-50"
      disabled={isSubmitting}
    />
    <input
      type="email"
      name="email"
      aria-label="Example@gmail.com"
      autoComplete="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Example@gmail.com"
      className="w-full min-h-12 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-[#202020] placeholder:text-gray-400 focus:border-[#e82625] focus:outline-none focus:ring-2 focus:ring-[#e82625]/20 disabled:opacity-50"
      disabled={isSubmitting}
    />

    <div className="pt-1">
      <p className="text-[13px] font-medium text-gray-600 mb-3">What Are Your Concerns</p>
      <div className="flex flex-wrap gap-2">
        {CONCERN_OPTIONS.map((concern, index) => (
          <label key={index} className={`flex min-h-10 items-center gap-2 border px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${formData.concerns.includes(concern) ? "border-[#e82625]/60 bg-[#e82625]/10" : "border-gray-200 bg-white hover:bg-[#fff0f0]"}`}>
            <input
              type="checkbox"
              checked={formData.concerns.includes(concern)}
              onChange={() => handleConcernToggle(concern)}
              className="h-3 w-3 accent-[#e82625]"
              disabled={isSubmitting}
            />
            <span>{concern}</span>
          </label>
        ))}
      </div>
    </div>

    </div>
    <div className="min-w-0 space-y-6 xl:border-l xl:border-gray-200 xl:pl-7">
    <div className="pt-1">
      <p className="text-[13px] font-medium text-gray-600 mb-3">Select Your Hair Loss Stage</p>
      <div className="grid grid-cols-3 gap-2 min-[400px]:grid-cols-5">
        {HAIR_LOSS_STAGE_OPTIONS.map((stage) => (
          <label
            key={stage.id}
            className={`min-w-0 cursor-pointer overflow-hidden rounded-xl border transition focus-within:ring-2 focus-within:ring-[#e82625] ${
              formData.hairLossStage === stage.label
                ? "border-[#e82625] ring-2 ring-[#e82625]/40"
                : "border-gray-200 hover:border-[#e82625]/40"
            } bg-white ${isSubmitting ? "opacity-60 pointer-events-none" : ""}`}
          >
            <input
              type="radio"
              name="hairLossStage"
              value={stage.label}
              checked={formData.hairLossStage === stage.label}
              onChange={handleInputChange}
              className="sr-only"
              disabled={isSubmitting}
            />
            <div className="relative aspect-square w-full bg-white">
              <Image src={stage.imageSrc} alt={stage.label} fill sizes="(max-width: 399px) 27vw, (max-width: 1023px) 16vw, 90px" className="object-contain" />
            </div>
            <div className="py-2 text-center text-[11px] text-[#202020] font-medium">{stage.label}</div>
          </label>
        ))}
      </div>
    </div>

    <div className="pt-1">
      <p className="text-[13px] font-medium text-gray-600 mb-3">Are you willing to visit Adgro Sivakasi?</p>
      <div className="grid grid-cols-2 gap-3">
        {["yes", "no"].map((option) => (
          <label key={option} className={`flex min-h-11 items-center justify-center gap-2 border px-3 py-2 rounded-xl text-sm cursor-pointer transition-colors ${formData.willingToVisit === option ? "border-[#e82625]/60 bg-[#e82625]/10" : "border-gray-200 bg-white hover:bg-[#fff0f0]"}`}>
            <input
              type="radio"
              name="willingToVisit"
              value={option}
              checked={formData.willingToVisit === option}
              onChange={handleInputChange}
              className="h-4 w-4 accent-[#e82625]"
              disabled={isSubmitting}
            />
            <span>{option === "yes" ? "Yes" : "No"}</span>
          </label>
        ))}
      </div>
    </div>

    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="xl:col-span-2 mt-1 w-full bg-[#e82625] hover:bg-[#c41e1d] transition text-white py-3.5 px-8 rounded-[10px] text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? "Sending..." : "Get My Free Consultation"}
    </button>
  </form>
);

const RequestCallbackSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    concerns: [],
    hairLossStage: "",
    willingToVisit: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConcernToggle = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your name" });
      return false;
    }
    if (!formData.phone.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your phone number" });
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      setSubmitStatus({ type: "error", message: "Please enter a valid 10-digit phone number" });
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      return false;
    }
    if (!formData.hairLossStage) {
      setSubmitStatus({ type: "error", message: "Please select your hair loss stage" });
      return false;
    }
    if (!formData.willingToVisit) {
      setSubmitStatus({ type: "error", message: "Please answer whether you are willing to visit Adgro Sivakasi" });
      return false;
    }
    if (formData.willingToVisit !== "yes") {
      setSubmitStatus({ type: "error", message: "Form submission is available only for users willing to visit Adgro Sivakasi" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });
    if (!validateForm()) return;
    setShowConfirm(true);
  };

  const handleConfirmedSubmit = async () => {
    setShowConfirm(false);
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const concern = [
        formData.concerns.length ? `Concerns: ${formData.concerns.join(", ")}` : "",
        `Hair loss stage: ${formData.hairLossStage}`,
      ]
        .filter(Boolean)
        .join(" | ");

      const leadData = {
        formName: "adgro-sivakasi-leads",
        source: "Adgro Hair Sivakasi Website",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        concern,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/thank-you");
      } else {
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  const sharedFormProps = {
    formData,
    handleInputChange,
    handleConcernToggle,
    handleSubmit,
    isSubmitting,
  };

  return (
    <React.Fragment>
      {/* Confirmation popup */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-[420px] w-full p-8 flex flex-col items-center text-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#fff0f0] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4Z" stroke="#e82625" strokeWidth="2" fill="none" />
                <path d="M16 10V17" stroke="#e82625" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="16" cy="21.5" r="1.5" fill="#e82625" />
              </svg>
            </div>
            <h3 className="text-[18px] font-extrabold text-[#202020]">Ready to take the first step?</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Our team will call you back within{" "}
              <span className="font-semibold text-[#202020]">24 hours</span>{" "}
              to confirm your free consultation. Shall we proceed?
            </p>
            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-[14px] hover:bg-gray-50 transition-colors"
              >
                No, Go Back
              </button>
              <button
                onClick={handleConfirmedSubmit}
                className="flex-1 py-3 rounded-xl bg-[#e82625] hover:bg-[#c41e1d] text-white font-bold text-[14px] transition-colors shadow-lg"
              >
                Yes, Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      <section id="form" className="w-full scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-col items-center gap-4 text-center">
                <h2 className="mx-auto max-w-[1000px] text-balance text-[26px] sm:text-[34px] lg:text-[36px] font-extrabold leading-tight text-[#202020]">
                  Get Your Free Hair Analysis - No Commitment, No Cost.
                </h2>
                <p className="mx-auto max-w-[600px] text-[13px] leading-relaxed text-gray-500">
                  Tell us about your concern and we will call you back within 24 hours.
                </p>
          </div>
          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)] lg:gap-7">
            <div className="relative order-2 flex min-w-0 flex-col justify-center overflow-hidden rounded-[24px] bg-[#1c1c1c] p-6 sm:p-8 lg:order-1">
              <span aria-hidden="true" className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[40px] border-[#e82625]/10" />
              <span aria-hidden="true" className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e82625] pt-3 font-serif text-[48px] leading-none text-white">&ldquo;</span>
              <div className="relative flex w-full flex-col gap-6 text-white">
                <h3 className="text-[22px] sm:text-[26px] font-bold leading-tight">
                  Hear From Our Happy Patients
                </h3>
                <p className="text-[15px] leading-[1.9] text-white/80">
                  I started seeing results within the first two sessions. Four months in, my hair fall has reduced drastically. The doctor was warm, patient, and genuinely cared about my progress.
                </p>
                <div className="flex items-center gap-3">
                  <img src="/unnamed.png" alt="Archana Pandian" className="h-12 w-12 shrink-0 rounded-full border-2 border-white/40 object-cover" />
                  <p className="font-semibold text-[13px] text-white">Archana Pandian, Sivakasi Patient</p>
                </div>
              </div>
            </div>
            <div className="order-1 min-w-0 rounded-[24px] border border-gray-200 bg-white p-5 text-[#202020] shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-7 lg:order-2 xl:p-8">
                {submitStatus.type && (
                  <div role="status" aria-live="polite" className={`mb-4 p-3 rounded-lg text-sm ${submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                    {submitStatus.message}
                  </div>
                )}
                <FormFields {...sharedFormProps} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RequestCallbackSection;
