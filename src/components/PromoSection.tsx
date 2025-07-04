import React from "react";

const PromoSection = () => {
  return (
    <div className="relative w-full bg-[#114F3D] lg:bg-[#ffa900] 2xl:bg-[#114F3D] overflow-hidden font-[Montserrat]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-28 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Left Side - Text and Download */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
          {/* Burst Decoration */}
          <img
            src="/assets/EatBurst.png"
            alt="EatBurst"
            className="hidden lg:block absolute -top-10 -left-14 "
          />

          <h1
            className="text-3xl lg:text-5xl text-white leading-tight mb-2"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            EAT GOOD,
            <br />
            STAY HEALTHY
          </h1>
          <h2
            className="text-3xl lg:text-5xl  text-[#F44E5D] leading-tight mb-6"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            START TODAY!
          </h2>

          <p className="text-[#FFAA29] font-semibold text-base lg:text-lg mb-4">
            Download our mobile app on
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <img
              src="/assets/google-play.png"
              alt="Google Play"
              className="w-32 lg:w-36 h-auto"
            />
            <img
              src="/assets/app-store.png"
              alt="App Store"
              className="w-32 lg:w-36 h-auto"
            />
          </div>
        </div>

        {/* Right Side - Phone + Floating Cards */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end  relative z-10">
          {/* Phone */}
          <img
            src="/assets/frame1.png"
            alt="Mobile Frame"
            className="h-auto relative z-10"
            style={{ width: "clamp(240px, 25vw, 320px)" }}
          />

          {/* Floating Info Cards */}
          <div className="hidden lg:flex flex-col gap-6 absolute left-0 top-20 z-0">
            <div
              className="bg-white shadow-lg rounded-xl p-4 flex items-start gap-4"
              style={{ width: "clamp(280px, 40vw, 480px)" }}
            >
              <div className="bg-[#F44E5D] w-16 h-16 flex items-center justify-center rounded-lg">
                <img
                  src="/assets/Select Meals.png"
                  alt="Select"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-[#114F3D] font-bold text-base leading-tight mb-1">
                  Select and Customized
                  <br />
                  your meals
                </h3>
                <p className="text-sm text-black">
                  by Friday night through our
                  <br />
                  app or website.
                </p>
              </div>
            </div>

            <div
              className="bg-white shadow-lg rounded-xl p-4 flex items-start gap-4"
              style={{ width: "clamp(280px, 40vw, 480px)" }}
            >
              <div className="bg-[#F44E5D] w-16 h-16 flex items-center justify-center rounded-lg">
                <img
                  src="/assets/Food Delivery.png"
                  alt="Delivery"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-[#114F3D] font-bold text-base leading-tight mb-1">
                  Food
                  <br />
                  Delivery
                </h3>
                <p className="text-sm text-black">
                  Meals are cooked overnight
                  <br />
                  and delivered between 5–7 AM.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Decoration */}
        <img
          src="/assets/corner-decor.png"
          alt="Corner Decoration"
          className="absolute bottom-0 left-0 w-32 lg:w-44 z-20"
        />
      </section>
    </div>
  );
};

export default PromoSection;
