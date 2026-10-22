export const metadata = { title: "Thank You | Advanced GroHair Sivakasi" };

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f0]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e82625" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h1 className="mb-3 text-3xl font-extrabold text-[#202020]">Thank You!</h1>
      <p className="mb-8 max-w-[460px] text-gray-500">
        We&apos;ve received your details. Our Advanced GroHair Sivakasi team will call you shortly to confirm your free consultation.
      </p>
      <a href="/" className="rounded-md bg-[#e82625] px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#c41e1d]">
        Back to Home
      </a>
    </main>
  );
}
