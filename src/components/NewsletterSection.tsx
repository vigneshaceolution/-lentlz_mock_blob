import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen">
      {/* Outer container to take all available space */}
      <div className="max-w-7xl 2xl:max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 2xl:px-28 w-full relative ">
        {/* Top Decorative Image */}
        <div className="hidden lg:block absolute -top-0 2xl:-top-36 right-28 2xl:right-54 transform -translate-x-1/2 z-20">
          <img
            src="/assets/top-decor.png"
            alt="Top Decoration"
            className="w-40 2xl:w-52"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl 2xl:max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 2xl:px-28 w-full">
          {/* Left Section */}
          <div className="flex-[2] mt-16 sm:mt-20 lg:mt-28 2xl:mt-36 ml-0 sm:ml-4 lg:ml-10 2xl:ml-14 text-center lg:text-left">
            <h2
              className="text-[24px] sm:text-[32px] lg:text-[40px] 2xl:text-[52px] font-extrabold mb-4 2xl:mb-6 px-2 sm:px-0"
              style={{ color: "#114F3D", fontFamily: "Montserrat, sans-serif" }}
            >
              Get to Know Us Better
            </h2>

            <p
              className="mb-6 2xl:mb-8 text-sm sm:text-base 2xl:text-lg font-medium px-2 sm:px-0"
              style={{ color: "#114F3D", fontFamily: "Montserrat, sans-serif" }}
            >
              Join our newsletter and save 10% off your first order
            </p>

            {/* Email Input & Button - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 2xl:gap-6 mb-6 sm:mb-8 2xl:mb-10 max-w-md 2xl:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
              <input
                type="email"
                placeholder=""
                className="w-full sm:flex-1 px-3 sm:px-4 2xl:px-6 py-3 sm:py-4 2xl:py-5 rounded-lg 2xl:rounded-xl outline-none text-sm sm:text-base 2xl:text-lg"
                style={{
                  backgroundColor: "#E4E8EE",
                  fontFamily: "Montserrat, sans-serif",
                }}
              />
              <button
                className="w-full sm:w-auto px-8 sm:px-12 2xl:px-16 py-3 sm:py-4 2xl:py-5 rounded-lg 2xl:rounded-xl text-white font-bold text-base sm:text-lg 2xl:text-xl whitespace-nowrap"
                style={{
                  backgroundColor: "#FFA900",
                  color: "#153704",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                JOIN
              </button>
            </div>

            {/* Social Media */}
            <div className="px-2 sm:px-0">
              <p
                className="mb-3 2xl:mb-4 font-bold text-base sm:text-lg 2xl:text-xl"
                style={{
                  color: "#F44E5D",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Follow us on Social Media
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 2xl:gap-8">
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16"
                />
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16"
                />
                <img
                  src="/assets/youtube.png"
                  alt="YouTube"
                  className="w-12 h-9 sm:w-16 sm:h-12 2xl:w-20 2xl:h-16"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Family Image - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block flex-[2] relative w-full h-full">
            <img
              src="/assets/family-image.png"
              alt="Family"
              className="absolute right-0 -bottom-85 2xl:-bottom-119 w-[550px] 2xl:w-[680px] z-10"
            />
          </div>
        </div>

        {/* Mobile/Tablet Family Image - Shown only on smaller screens */}
        <div className="lg:hidden mt-8 sm:mt-12 flex justify-center px-4 pb-3">
          <img
            src="/assets/family-image.png"
            alt="Family"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;