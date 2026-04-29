import Image from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";
import quote from "../assets/icons/quote.svg";
import placeholder from "../assets/images/placeholder.png";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
});

const categories = ["FAMILY", "DIVORCE", "CHILD CUSTODY", "DOMESTIC VIOLENCE"];

const TestimonialSection = () => {
  return (
    <section
      className={`bg-[#16191F] py-24 px-6 text-center ${cormorant.className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow Label */}
        <span
          className={`${aboreto.className} text-[0.7rem] tracking-[0.22em] text-[#C49E78]/70 mb-4`}
        >
          TESTIMONIALS
        </span>

        {/* Heading */}
        <h2
          className={`${cormorant.className} text-4xl md:text-5xl font-normal italic text-[#FFF7F0] leading-[1.15] mb-6`}
        >
          Hear What Our Clients Have to Say
        </h2>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`${aboreto.className} text-[0.7rem] tracking-widest p-2 rounded-full border border-[#C49E78]/30 transition-all
                ${i === 0 ? "bg-[#C49E78] text-[#16191F] border-[#C49E78]" : "text-[#C49E78]/70 hover:border-[#C49E78]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[1, 2].map((card, i) => (
            <div
              key={card}
              className="bg-[#16191F] border border-white/20 rounded-xl p-10 relative flex flex-col items-center"
            >
              {/* Quote Image Replacement */}
              <div className="mb-6 relative w-12 h-10">
                <Image
                  src={quote}
                  alt="Quote Icon"
                  fill
                  className="object-contain opacity-40"
                />
              </div>

              <p className="text-[#FFF7F0]/55 text-xl italic leading-relaxed mb-10 max-w-md">
                "Autumn Osbourne offered top-notch counsel and legal support
                during a difficult, high-conflict divorce. The entire Deer
                Designer Family Law team — from Autumn to paralegals to office
                staff — consistently goes above and beyond for their clients."
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#FFF7F0]/10 flex items-center justify-center overflow-hidden border border-[#C49E78]/20 relative">
                  <Image
                    src={placeholder}
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4
                    className={`${aboreto.className} text-[#C49E78] text-xs tracking-widest`}
                  >
                    {i === 0 ? "MARY" : "DAVID AND PAM"}
                  </h4>
                  <p className="text-[#FFF7F0]/40 text-xs italic">
                    Placeholder
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-16">
          <div className="w-6 h-1.5 rounded-full bg-[#C49E78]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFF7F0]/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFF7F0]/20" />
        </div>

        {/* CTA Button with Corrected Text Color */}
        <button className="inline-flex items-center gap-3 bg-[#C49E78] px-10 py-4 group hover:bg-[#C49E78]/90 transition-colors">
          <span
            className={`${aboreto.className} text-xs tracking-[0.2em] text-[#16191F]`}
          >
            READ MORE TESTIMONIALS
          </span>
          <span className="text-[#16191F] group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
