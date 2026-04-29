import React from 'react';
import { Cormorant_Garamond, Aboreto } from "next/font/google";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  style: ['normal', 'italic']
});

const aboreto = Aboreto({ 
  subsets: ["latin"], 
  weight: "400" 
});

const steps = [
  { number: "01", label: "CONSULT" },
  { number: "02", label: "MATCH" },
  { number: "03", label: "ADVOCATE" }
];

const AdSection = () => {
  return (
    <section className={`bg-[#FFF7F0] py-20 px-6 text-center ${cormorant.className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl italic text-[#16191F] mb-16">
          Close Attention To What You Need
        </h2>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-16">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#16191F] flex items-center justify-center mb-4">
                  <span className="text-[#C49E78] text-2xl font-normal">
                    {step.number}
                  </span>
                </div>
                <span className={`${aboreto.className} text-[#16191F] tracking-[0.2em] text-sm`}>
                  {step.label}
                </span>
              </div>
              
              {/* Arrow separator (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block px-8">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="#16191F" strokeWidth="1"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto space-y-8 mb-12">
          <p className="text-[#16191F] text-lg leading-relaxed italic">
            When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior level attorney to tell your story. From there, you will work with one lawyer for the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.
          </p>
          <p className="text-[#16191F] text-lg leading-relaxed italic">
            We take care to match you with the attorney at our firm who can be of the most help in your unique situation. We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you can face the future from a position of strength and hope.
          </p>
        </div>

        {/* Button */}
        <button className="inline-flex items-center gap-3 bg-[#C49E78] px-10 py-4 group hover:bg-[#C49E78]/90 transition-colors">
          <span className={`${aboreto.className} text-xs tracking-[0.2em] text-[#16191F]`}>
            LEARN MORE ABOUT US
          </span>
          <span className="text-[#16191F] group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default AdSection;