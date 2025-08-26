import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <div className="w-full bg-white font-[Montserrat] relative overflow-x-hidden">
      {/* Top Decorative Image (visible only on lg and up) */}
      {/* <div className="hidden lg:block absolute -top-20 right-48 z-40">
        <img
          src="/assets/top-decor.png"
          alt="Top Decoration"
          className="w-40  select-none"
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#114F3D] mb-4">
            Get to Know Us Better
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#114F3D] mb-6">
            Join our newsletter and save 10% off your first order
          </p>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder=""
              className="w-full px-4 py-3 rounded-lg bg-[#E4E8EE] outline-none text-sm sm:text-base"
            />
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-sm sm:text-base bg-[#FFA900] text-[#153704]">
              JOIN
            </button>
          </div>

          {/* Social Section */}
          <div>
            <p className="text-[#F44E5D] font-bold text-base mb-4">
              Follow us on Social Media
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <img
                src="/assets/instagram.png"
                alt="Instagram"
                className="w-10 h-10 select-none"
              />
              <img
                src="/assets/facebook.png"
                alt="Facebook"
                className="w-10 h-10 select-none"
              />
              <img
                src="/assets/youtube.png"
                alt="YouTube"
                className="w-12 h-10 select-none"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/assets/family-image.png"
            alt="Family"
            className="w-full max-w-md lg:max-w-xl h-auto object-contain select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
