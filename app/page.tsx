import AdSection from "@/components/AdSection";
import CertificationsSection from "@/components/Certification";
import Footer from "@/components/Footer";
import GuidanceSection from "@/components/GuidanceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/NewsLetterSection";
import Offices from "@/components/Offices";
import PartnerSection from "@/components/Partners";
import TestimonialSection from "@/components/Testimonials";

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
    <TestimonialSection />
    <Offices />
    <Footer />
    </>
  );
}
