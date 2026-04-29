import Image from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";

import partner1 from "../assets/images/partner-1.png";
import partner2 from "../assets/images/partner-2.png";
import partner3 from "../assets/images/partner-3.png";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  style: ['normal', 'italic']
});

const aboreto = Aboreto({ 
  subsets: ["latin"], 
  weight: "400" 
});

const partners = [
  {
    name: "DEREK DESIGNER",
    role: "Managing Partner",
    img: partner1,
  },
  {
    name: "AMANDA C. Knight",
    role: "Partner",
    img: partner2,
  },
  {
    name: "AUTUMN D. OSBOURNE",
    role: "Partner",
    img: partner3,
  },
];

const PartnerSection = () => {
  return (
    <section className={`bg-[#FFF7F0] py-20 px-6 lg:px-20 text-center ${cormorant.className}`}>
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-5xl italic text-[#1A1A1A] mb-6">
          Meet Our Partners
        </h2>
        <p className="text-lg text-[#16191F] leading-relaxed">
          Get to know the experienced leaders guiding our firm with strength,
          strategy, and a commitment to exceptional client service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl h-[380px] shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={partner.img}
                alt={partner.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 text-left">
              <h3 className={`${aboreto.className} text-[1.1rem] text-[#FFF7F0] tracking-widest uppercase mb-1`}>
                {partner.name}
              </h3>
              <p className="italic text-[#C49E78] text-lg">
                {partner.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="inline-flex items-center gap-3 bg-[#C49E78] px-10 py-4 group hover:bg-[#C49E78]/90 transition-colors">
        <span className={`${aboreto.className} text-sm tracking-[0.2em] text-[#16191F]`}>
          MEET ALL ATTORNEYS
        </span>
        <span className="text-[#16191F] group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </section>
  );
};

export default PartnerSection;