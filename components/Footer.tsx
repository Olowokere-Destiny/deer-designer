import Image from "next/image";
import { Aboreto, Cormorant_Garamond } from "next/font/google";
import logo from "../assets/images/footer-logo.svg";
import facebook from "../assets/icons/fb-icon.svg"; 
import linkedin from "../assets/icons/linkedin-icon.svg";
import youtube from "../assets/icons/yt-icon.svg";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400"],
  style: ['normal']
});

const aboreto = Aboreto({ 
  subsets: ["latin"],
  weight: "400" 
});

const Footer = () => {
  return (
    <footer className="bg-[#16191F] pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-4 gap-y-12 mb-20">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start justify-start">
          <div className="mb-10">
            <Image 
              src={logo} 
              alt="Deer Designer Family Law" 
              width={150} 
              height={80}
              className="brightness-0 invert object-contain" 
            />
          </div>
          <div className="flex gap-3">
            {[
              { icon: facebook, label: 'f' },
              { icon: linkedin, label: 'in' },
              { icon: youtube, label: 'y' }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-8 h-8 rounded-full border border-[#C49E78]/30 flex items-center justify-center transition-all hover:bg-[#C49E78]/10 group"
              >
                <Image 
                  src={social.icon} 
                  alt={social.label} 
                  width={14} 
                  height={14}
                  className="opacity-70 group-hover:opacity-100 transition-opacity" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className={`${aboreto.className} text-[#C49E78]/80 text-[0.65rem] tracking-[0.3em] mb-8`}>QUICK LINKS</h4>
          <ul className={`${cormorant.className} text-[#FFF7F0]/40 text-[0.85rem] space-y-2.5 uppercase tracking-[0.15em]`}>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Resources</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-[#C49E78] transition-colors">Schedule a Consultation</a></li>
          </ul>
        </div>

        {/* Family Law Column */}
        <div>
          <h4 className={`${aboreto.className} text-[#C49E78]/80 text-[0.65rem] tracking-[0.3em] mb-8`}>FAMILY LAW</h4>
          <ul className={`${cormorant.className} text-[#FFF7F0]/40 text-[0.85rem] space-y-2.5 uppercase tracking-[0.15em]`}>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Divorce</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">High-Asset Divorce</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Child Custody</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Child Support</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Property Division</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Spousal Support</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Prenuptial Agreements</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Domestic Violence</a></li>
          </ul>
        </div>

        {/* Estate Planning Column */}
        <div>
          <h4 className={`${aboreto.className} text-[#C49E78]/80 text-[0.65rem] tracking-[0.3em] mb-8`}>ESTATE PLANNING</h4>
          <ul className={`${cormorant.className} text-[#FFF7F0]/40 text-[0.85rem] space-y-2.5 uppercase tracking-[0.15em]`}>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Will and Trust</a></li>
            <li><a href="#" className="hover:text-[#FFF7F0] transition-colors">Power of Attorney</a></li>
          </ul>
        </div>
      </div>

      {/* Legal Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#FFF7F0]/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className={`${aboreto.className} flex gap-8 text-[0.55rem] tracking-[0.3em] text-[#FFF7F0]/30 uppercase`}>
          <a href="#" className="hover:text-[#C49E78] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#C49E78] transition-colors">Disclaimer</a>
        </div>
        
        <p className={`${aboreto.className} text-[0.55rem] tracking-[0.2em] text-[#FFF7F0]/20`}>
          © DEER DESIGNER FAMILY LAW, P.L.L.C.
        </p>

        <p className={`${aboreto.className} text-[0.55rem] tracking-[0.2em] text-[#FFF7F0]/20 uppercase`}>
          Designed by <span className="text-[#FFF7F0]/40 ml-1">Second Click Media</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;