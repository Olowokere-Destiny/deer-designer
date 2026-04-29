import Image, { StaticImageData } from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";

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

export interface PracticeCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

export default function PracticeCard({ image, title, description, href }: PracticeCardProps) {
  return (
    <div
      className="flex flex-col bg-[#16191F] border border-white/20 rounded-2xl px-7 py-8"
      style={{
        boxShadow:
          "inset 0 1px 0 0 rgba(255,255,255,0.07), inset 1px 0 0 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="mb-5 w-10 h-10 relative">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <h3 className={`${aboreto.className} text-[0.8rem] tracking-[0.12em] text-[#FFF7F0] mb-4`}>
        {title}
      </h3>

      <p className={`${cormorant.className} text-[1rem] font-light leading-[1.8] text-[#FFF7F0]/55 flex-1 mb-8`}>
        {description}
      </p>

      <a
        href={href}
        className={`${aboreto.className} inline-flex items-center gap-2 text-[0.8rem] tracking-[0.15em] text-[#C49E78]/75 hover:text-[#C49E78] transition-colors duration-200`}
      >
        Learn More <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}