"use client";

import { useState, useEffect } from "react";
import { Aboreto } from "next/font/google";
import Image from "next/image";
import fbIcon from "../assets/icons/fb-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import ytIcon from "../assets/icons/yt-icon.svg";
import brandIcon from "../assets/images/brand-icon.png";

const aboreto = Aboreto({ weight: "400", subsets: ["latin"] });

const navLinks = [
  { label: "About", href: "#" },
  { label: "Family Law", href: "#" },
  { label: "Estate Planning", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`w-full bg-[#12161E] border-b border-[#2a2a35]  ${aboreto.className}`}>
      {/* Top bar */}
      <div className="px-6 lg:px-10 py-2 flex items-center justify-between max-w-7xl mx-auto">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook">
            <Image src={fbIcon} alt="Facebook" width={28} height={28} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src={linkedInIcon} alt="LinkedIn" width={28} height={28} />
          </a>
          <a href="#" aria-label="YouTube">
            <Image src={ytIcon} alt="YouTube" width={28} height={28} />
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:9196269148"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-80 transition-opacity duration-200"
        >
          <span className="text-[#C49E78]">Call</span>{" "}
          <span className="text-[#FFF7F099]">919-626-9148</span>
        </a>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-[#12161E] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="shrink-0 flex items-center gap-2.5">
            <Image src={brandIcon} alt="Deer Designer" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#FFF7F099] text-[10px] lg:text-[10px] xl:text-[11px] tracking-[0.15em] xl:tracking-[0.18em] uppercase font-medium hover:text-[#C49E78] transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden lg:inline-flex items-center border border-[#C49E78] text-[#C49E78] text-[9px] xl:text-[10px] tracking-[0.15em] xl:tracking-[0.2em] uppercase px-3 xl:px-5 py-2.5 hover:bg-[#C49E78] hover:text-[#12161E] transition-all duration-200 font-medium whitespace-nowrap"
            >
              Schedule a Consultation
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              className="lg:hidden flex flex-col gap-1.25 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-[#C49E78] transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#C49E78] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#C49E78] transition-transform duration-300 ${
                  menuOpen ? "translate-y-[-6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0d0f17] border-t border-[#1e2030] px-6 lg:px-10 py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#FFF7F099] text-[11px] tracking-[0.18em] uppercase font-medium py-3.5 border-b border-[#1e2030] last:border-0 hover:text-[#C49E78] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center border border-[#C49E78] text-[#C49E78] text-[10px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-[#C49E78] hover:text-[#12161E] transition-all duration-200 font-medium lg:hidden"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}