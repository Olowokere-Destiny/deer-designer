import Image from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";
import heroBg from "../assets/images/hero-bg.jpg";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-160 flex items-center justify-center overflow-hidden bg-[#1a1f2e]">

      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Happy family outdoors"
          fill
          priority
          className="object-cover object-center opacity-45"
        />
      </div>

      {/* Dark overlay for extra depth */}
      <div className="absolute inset-0 bg-[#1a1f2e]/50" />

      {/* Card */}
      <div className="relative z-10 w-[88%] max-w-[720px] border border-[#C49E78]/20 rounded-2xl px-10 py-14 text-center bg-white/10 sm:px-16">

        {/* Headline */}
        <h1
          className={`${cormorant.className} text-[clamp(2.4rem,5.5vw,3.9rem)] leading-[1.15] font-light tracking-[0.01em] text-white mb-5`}
        >
          <em className="italic font-semibold">Your Future</em>{" "}
          <span className="text-[#C49E78] not-italic font-semibold">Starts Here</span>
        </h1>

        {/* Subheading */}
        <p
          className={`${cormorant.className} text-[clamp(1rem,2vw,1.2rem)] font-light leading-relaxed text-[#FFF7F0CC]/80 tracking-[0.02em] mb-7`}
        >
          Divorce &amp; Family Law Attorneys Serving Durham, Raleigh, Cary,
          <br className="hidden sm:block" /> the Triangle, and Throughout North
          Carolina.
        </p>

        {/* Badge */}
        <div
          className={`${aboreto.className} flex items-center justify-center gap-2.5 mb-9 text-[0.8rem] tracking-[0.18em] uppercase text-[#C49E78]/90`}
        >
          <span className="text-[#C49E78] text-[0.8rem]">★</span>
          Led by Board Certified Specialists in Family Law
          <span className="text-[#C49E78] text-[0.8rem]">★</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+19191234567"
            className={`${aboreto.className} w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C49E78] text-[#1a1209] px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase font-semibold rounded-sm transition-colors duration-200 hover:bg-[#b08a63]`}
          >
            Call Now <span aria-hidden="true">→</span>
          </a>

          <a
            href="/contact"
            className={`${aboreto.className} w-full sm:w-auto inline-flex items-center justify-center border border-white/60 text-white px-8 py-3.5 text-[0.75rem] tracking-[0.15em] uppercase font-medium rounded-sm transition-colors duration-200 hover:border-[#C49E78] hover:text-[#C49E78]`}
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}