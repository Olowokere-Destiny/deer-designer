import Image from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";
import certBadge from "../assets/images/cert-badge.png";

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

export default function CertificationsSection() {
  return (
    <section className="w-full bg-[#F5EDE0] px-8 py-20 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">

        {/* Left — badge */}
        {/* <div className="shrink-0 w-52 h-52 relative border border-red-500">
        </div> */}
          <Image
            src={certBadge}
            alt="Board Certified badge"
            className="flex-1 p-6 xl:p-14"
          />

        {/* Right — copy */}
        <div className="max-w-lg">
          <h2 className={`${cormorant.className} text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.2] text-[#2b2118] mb-6 text-center lg:text-left`}>
            <em className="italic font-normal">Caring Representation Led By</em>
            <br />
            <span className="not-italic font-normal text-[#C49E78]">Board-Certified Specialists</span>
          </h2>

          <p className={`${cormorant.className} text-[1rem] font-light leading-[1.8] text-[#2b2118]/75 mb-4`}>
            When you are facing a divorce or another family law challenge in the Triangle area, it can
            seem like the world is falling apart around you. At Deer Designer Family Law, PLLC., we
            understand the turmoil you are going through, and we are committed to guiding you
            toward the best resolution possible.
          </p>

          <p className={`${cormorant.className} text-[1rem] font-light leading-[1.8] text-[#2b2118]/75 mb-10`}>
            Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne, both
            specialists with a board certification in family law from the North Carolina State Board of
            Legal Specialization, and includes other board-certified family law specialists as well. You
            can count on our depth of experience and dedication to excellence to help you through this
            difficult time.
          </p>

          <a
            href="/board-certified"
            className={`${aboreto.className} inline-flex items-center gap-3 border border-[#2b2118]/30 text-[#16191F] text-[0.6rem] tracking-[0.18em] px-6 py-4 bg-[#C49E78]`}
          >
            What Does It Mean To Be A Certified Family Law Specialist? <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}