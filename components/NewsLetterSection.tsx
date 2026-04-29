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

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[#F5EDE0] px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">

        {/* Left — copy */}
        <div className="flex-1">
          <p className={`${aboreto.className} text-[0.7rem] tracking-[0.2em] uppercase text-[#523F3F] mb-3`}>
            Newsletter Signup
          </p>

          <h2 className={`${cormorant.className} text-[2.6rem] leading-[1.15] font-normal text-[#2b2118] mb-6`}>
            <em className="italic">Ex Files featuring </em>
            <span className="text-[#C49E78] not-italic">Pour Decisions</span>
          </h2>

          <ul className={`${cormorant.className} text-[1.05rem] font-normal text-[#2b2118] leading-[1.9] mb-6 space-y-0.5 list-none`}>
            <li className="flex items-start gap-2">
              <span className="mt-[0.45em] text-[0.45rem] text-[#2b2118]">●</span>
              Stay up to date on changes in North Carolina law
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[0.45em] text-[0.45rem] text-[#2b2118]">●</span>
              Get specialist legal insights to your most pressing family law questions
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[0.45em] text-[0.45rem] text-[#2b2118]">●</span>
              Access exclusive guides and resources you won't find anywhere else
            </li>
          </ul>

          <p className={`${cormorant.className} text-[1rem] italic font-normal text-[#2b2118] leading-[1.75] max-w-[420px]`}>
            And for a fun twist: don't miss our "Pour Decisions" section, featuring wine tips from our lawyer-wine specialist Deer Designer!
          </p>
        </div>

        {/* Right — form */}
        <div className="flex-1 w-full max-w-[480px] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your Name"
            className={`${cormorant.className} w-full bg-white border border-[#d6c9b8] text-[#2b2118] placeholder:text-[#b0a090] text-[1rem] px-5 py-4 outline-none focus:border-[#C49E78] transition-colors duration-200`}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className={`${cormorant.className} w-full bg-white border border-[#d6c9b8] text-[#2b2118] placeholder:text-[#b0a090] text-[1rem] px-5 py-4 outline-none focus:border-[#C49E78] transition-colors duration-200`}
          />
          <button
            className={`${aboreto.className} w-full bg-[#C49E78] text-[#16191F] text-[0.7rem] tracking-[0.2em] uppercase px-5 py-4 hover:bg-[#b08a63] transition-colors duration-200`}
          >
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
}