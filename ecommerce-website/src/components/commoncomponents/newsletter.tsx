// components/NewsletterSection.tsx

import React from 'react';
import { Mail } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  return (
    
    <div className="w-[95%] 2xl:w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center bg-black text-white py-8 px-6 md:px-12 rounded-lg gap-x-4 xl:gap-0">
      {/* Left Text Section */}
      <h2 className="text-[26px] sm:text-[30px] cs:text-[35px] lg:text-[40px] font-oswald  font-bold mb-4 md:mb-0 text-center md:text-left">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>

      {/* Right Input Section */}
      <div className="flex flex-col  items-center w-full md:w-auto space-y-4 md:space-y-0 gap-y-4">
        {/* Input Box */}
        <div className="relative flex items-center w-full md:w-80">
          <Mail className="absolute left-4 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-white text-black placeholder-gray-400 border-none rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Subscribe Button */}
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 w-full transition">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
    
  );
};


