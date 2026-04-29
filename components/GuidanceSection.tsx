import { Cormorant_Garamond, Aboreto } from "next/font/google";
import { StaticImageData } from "next/image";
import PracticeCard from "@/components/PracticeCard";

import guidanceImg1 from "../assets/icons/guidance-img-1.svg";
import guidanceImg2 from "../assets/icons/guidance-img-2.svg";
import guidanceImg3 from "../assets/icons/guidance-img-3.svg";
import guidanceImg4 from "../assets/icons/guidance-img-4.svg";
import guidanceImg5 from "../assets/icons/guidance-img-5.svg";
import guidanceImg6 from "../assets/icons/guidance-img-6.svg";
import guidanceImg7 from "../assets/icons/guidance-img-7.svg";
import guidanceImg8 from "../assets/icons/guidance-img-8.svg";
import guidanceImg9 from "../assets/icons/guidance-img-9.svg";

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

interface PracticeArea {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

const practiceAreas: PracticeArea[] = [
  {
    image: guidanceImg1,
    title: "Divorce & Separation",
    description: "Steady, strategic guidance through divorce, with a focus on protecting your future at every stage.",
    href: "/practice/divorce",
  },
  {
    image: guidanceImg2,
    title: "High-Asset Divorce",
    description: "Sophisticated representation for divorces involving substantial assets, complex finances, and long-term financial interests.",
    href: "/practice/high-asset-divorce",
  },
  {
    image: guidanceImg3,
    title: "Child Custody",
    description: "Thoughtful advocacy for parenting arrangements that protect your children and preserve what matters most.",
    href: "/practice/child-custody",
  },
  {
    image: guidanceImg4,
    title: "Child Support",
    description: "Clear, informed guidance on establishing, modifying, and enforcing child support with care and precision.",
    href: "/practice/child-support",
  },
  {
    image: guidanceImg5,
    title: "Property Division",
    description: "Strategic counsel for dividing assets and debts in a way that safeguards your financial future.",
    href: "/practice/property-division",
  },
  {
    image: guidanceImg6,
    title: "Spousal Support",
    description: "Experienced representation in alimony matters involving lifestyle, earning capacity, and long-term stability.",
    href: "/practice/spousal-support",
  },
  {
    image: guidanceImg7,
    title: "Prenuptial Agreements",
    description: "Carefully crafted agreements designed to protect assets, set clear expectations, and support peace of mind.",
    href: "/practice/prenuptial-agreements",
  },
  {
    image: guidanceImg8,
    title: "Estate Planning",
    description: "Personalized estate planning services to help you protect your wishes, your assets, and the people you love.",
    href: "/practice/estate-planning",
  },
  {
    image: guidanceImg9,
    title: "Domestic Violence",
    description: "Compassionate, decisive legal support when your safety, stability, and next steps cannot wait.",
    href: "/practice/domestic-violence",
  },
];

export default function GuidanceSection() {
  return (
    <section className="w-full px-8 py-20 md:px-16 lg:px-24" style={{ backgroundColor: "#16191F" }}>
      {/* Header */}
      <div className="text-center mb-14">
        <p className={`${aboreto.className} text-[0.7rem] tracking-[0.22em] text-[#C49E78]/70 mb-4`}>
          Deer Designer Family Practice Areas
        </p>
        <h2 className={`${cormorant.className} text-[clamp(2.2rem,4.5vw,3.4rem)] font-normal italic text-[#FFF7F0] leading-[1.15]`}>
          Legal Guidance For Every Step Forward
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {practiceAreas.map((area) => (
          <PracticeCard
            key={area.title}
            image={area.image}
            title={area.title}
            description={area.description}
            href={area.href}
          />
        ))}
      </div>
    </section>
  );
}