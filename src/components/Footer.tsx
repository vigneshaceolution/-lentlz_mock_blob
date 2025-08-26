import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-[#100F0D] py-6 lg:py-10 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <span className="text-sm sm:text-base lg:text-lg font-medium">Powered by</span>
          <img
            src="/assets/acelutionIcon.png"
            alt="Acelution Logo"
            className="h-6 sm:h-8 lg:h-10 object-contain select-none"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg font-normal text-center lg:text-right">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
