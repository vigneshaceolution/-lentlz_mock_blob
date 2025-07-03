import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 lg:py-12 2xl:py-16 min-h-[100px] 2xl:min-h-[140px] font-[Montserrat] bg-[#100F0D] ">
      <div className="max-w-7xl 2xl:max-w-full mx-auto px-4 sm:px-6 lg:px-20 2xl:px-28 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 2xl:space-x-3 mb-4 sm:mb-6 lg:mb-0">
          <span className="font-medium text-sm sm:text-base 2xl:text-lg">Powered by</span>
          <span className="flex items-center text-white text-base 2xl:text-lg font-medium">
            <img
              src="/assets/acelutionIcon.png"
              alt="acelutionIcon"
              className="w-32 h-7 sm:w-36 sm:h-8 lg:w-44 lg:h-10 2xl:w-56 2xl:h-12 mx-0.5 inline-block"
            />
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-2 sm:gap-3 lg:gap-4 2xl:gap-6 font-normal">
          <a href="#" className="hover:underline text-sm sm:text-base 2xl:text-lg text-center sm:text-left">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base 2xl:text-lg text-center sm:text-left">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base 2xl:text-lg text-center sm:text-left">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline text-sm sm:text-base 2xl:text-lg text-center sm:text-left">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;