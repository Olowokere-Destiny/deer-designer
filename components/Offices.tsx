import Image from "next/image";
import { Cormorant_Garamond, Aboreto } from "next/font/google";

import officePlaceholder from "../assets/images/office-placeholder.png";
import mapPin from "../assets/icons/map-pin.svg";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400"],
  style: ['normal']
});

const aboreto = Aboreto({ 
  subsets: ["latin"], 
  weight: "400" 
});

const officeData = [
  { name: "DURHAM OFFICE", address: "3511 Shannon Road Suite 150 Durham, NC, 27707"},
  { name: "CARY OFFICE", address: "201 Shannon Oaks Circle Suite 100 Cary, NC, 27511"},
  { name: "WAKE FOREST OFFICE", address: "1740 Heritage Center Drive Suite 202 Wake Forest, NC, 27587"},
  { name: "PITTSBORO OFFICE", address: "27 Hillsboro Street Pittsboro, NC, 27312"},
];

const Offices = () => {
  return (
    <section className="bg-[#16191F] py-20 px-6 border-[#16191F]/90 border-y">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {officeData.map((office, i) => (
          <div 
            key={i} 
            className={`flex flex-col items-center text-center px-4 py-8 md:py-0 
              ${i !== officeData.length - 1 ? 'lg:border-r border-[#FFF7F0]/10' : ''} 
              ${i % 2 === 0 ? 'sm:border-r lg:border-r border-[#FFF7F0]/10' : 'sm:border-r-0 lg:border-r border-[#FFF7F0]/10'}
              last:border-r-0`}
          >
            <div className="mb-6">
               <Image 
                src={mapPin} 
                alt="Location" 
                width={34} 
                height={34} 
               />
            </div>

            <h3 className={`${aboreto.className} text-[#FFF7F0] text-sm tracking-[0.2em] mb-3`}>
              {office.name}
            </h3>

            <p className={`${cormorant.className} text-[#FFF7F0]/55 text-base leading-relaxed max-w-[220px] mb-8`}>
              {office.address}
            </p>

            <div className="relative w-full max-w-[280px] aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={officePlaceholder}
                alt={office.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offices;