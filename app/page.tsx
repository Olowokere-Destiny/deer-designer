import AdSection from "@/components/AdSection";
import CertificationsSection from "@/components/Certification";
import GuidanceSection from "@/components/GuidanceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/NewsLetterSection";
import PartnerSection from "@/components/Partners";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <NewsletterSection />
    <GuidanceSection />
    <CertificationsSection />
    <PartnerSection />
    <AdSection />
    </>
  );
}
