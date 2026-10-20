import BannerCtaSection from "@/component/banner-cta-section";
import AdvertisementBanner from "@/component/comparison-section";
import DermatologistSection from "@/component/dermatologist-section";
import RequestCallbackSection from "@/component/drag";
import FAQSection from "@/component/faq";
import Footer from "@/component/footer";
import GrohairTopBar from "@/component/header";
import LocationSection from "@/component/location-section";
import ClinicVideosResponsiveGrid from "@/component/review";
import TrustSection from "@/component/trust-section";
import WhyChooseSection from "@/component/why-choose-section";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <RedTopAnnouncementBar /> */}
      <GrohairTopBar />

      <section id="hero">
        <BannerCtaSection />
        {/* <PromoHeroSlider /> */}
      </section>
      <section id="hero-details">
        {/* <AdGloHeroReplica /> */}
      </section>
    {/* <HairTreatmentsGrid /> */}
    <WhyChooseSection />
   <DermatologistSection />
   {/* <OurTreatmentsSection /> */}
   <TrustSection />
   <LocationSection />

      {/* <HairConsultationCardExact /> */}
    
      {/* <section id="why">
        <ImageCarouselGrid />
      </section> */}

    <AdvertisementBanner />
    <ClinicVideosResponsiveGrid />
    {/* <InstagramVideosSection /> */}
      {/* <GloskinHighlightSection /> */}

<RequestCallbackSection />
      <section id="faq">
        <FAQSection />
      </section>

        {/* <AppointmentFormnew /> */}

      <Footer />
    </main>
  );
}
