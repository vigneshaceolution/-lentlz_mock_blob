const PromoSection = () => {
  return (
    <div className="relative w-full overflow-visible">
      <section
        className="w-full min-h-screen 2xl:min-h-[120vh] px-4 py-8 sm:px-6 sm:py-12 md:px-8 2xl:px-12 2xl:py-60 relative bg-[#ffa900]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col md:flex-col lg:flex-row items-start justify-between relative z-10">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-full lg:w-1/2 mt-8 sm:mt-12 md:mt-20 lg:mt-32 2xl:mt-40 px-2 sm:px-4 md:px-6 lg:pl-20 2xl:pl-28 text-center md:text-center lg:text-left relative z-20">
            <img
              src="/assets/EatBurst.png"
              alt="EatBurst"
              className="absolute left-20 sm:left-3 md:left-64 md:transform md:-translate-x-1/2 md:-ml-8 lg:left-24 2xl:left-32 -top-10 sm:-top-8 md:-top-15 2xl:-top-20 z-0 w-16 sm:w-20 md:w-24 lg:w-auto 2xl:w-32"
            />

            <h1
              className="text-[20px] sm:text-[24px] md:text-[40px] lg:text-[48px] 2xl:text-[64px] leading-tight text-white"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              EAT GOOD,
              <br />
              STAY HEALTHY
            </h1>
            <h2
              className="text-[22px] sm:text-[26px] md:text-[42px] lg:text-[48px] 2xl:text-[64px] -mt-1 leading-tight"
              style={{
                fontFamily: "'Fredoka One', cursive",
                color: "#F44E5D",
              }}
            >
              START TODAY!
            </h2>

            <p
              className="mt-6 sm:mt-8 md:mt-10 2xl:mt-14 text-[#FFAA29] font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Download our mobile app on
            </p>

            <div className="flex gap-3 sm:gap-4 2xl:gap-6 mt-3 sm:mt-4 2xl:mt-6 justify-center md:justify-center lg:justify-start">
              <img
                src="/assets/google-play.png"
                alt="Google Play"
                className="w-28 sm:w-32 md:w-40 lg:w-36 2xl:w-48 h-auto"
              />
              <img
                src="/assets/app-store.png"
                alt="App Store"
                className="w-28 sm:w-32 md:w-40 lg:w-36 2xl:w-48 h-auto"
              />
            </div>
          </div>

          {/* Right Side - Mobile Frame (moved below text on tablets) */}
          <div className="w-full md:w-full lg:w-1/2 flex items-end justify-center md:justify-center lg:justify-end relative mt-8 sm:mt-10 md:mt-16 lg:mt-0 2xl:mt-8 md:order-2 lg:order-none">
            <div className="relative w-[280px] sm:w-[280px] md:w-[320px] lg:w-[360px] 2xl:w-[440px] z-10">
              <img
                src="/assets/frame1.png"
                alt="Mobile Frame"
                className="relative z-20 md:top-0 lg:top-20 2xl:top-28 h-[460px] sm:h-[480px] md:h-[500px] lg:h-[520px] 2xl:h-[640px]"
              />
            </div>

            {/* Floating Info Cards - Repositioned for tablets and 2xl */}
            <div className="hidden md:block absolute md:top-[500px] lg:top-[195px] 2xl:top-[260px] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-44 md:-translate-x-1/2 lg:translate-x-0 lg:left-[-60px] 2xl:left-[-80px] z-0 space-y-4 sm:space-y-6 2xl:space-y-8">
              <div className="bg-white rounded-xl 2xl:rounded-2xl p-3 sm:p-4 2xl:p-6 shadow-lg w-[280px] sm:w-[320px] md:w-[380px] lg:w-[400px] 2xl:w-[480px] h-[100px] sm:h-[110px] md:h-[120px] 2xl:h-[140px] flex items-start gap-3 sm:gap-4 2xl:gap-6">
                <div className="w-[100px] sm:w-[110px] md:w-[80px] 2xl:w-[100px] h-full rounded-md 2xl:rounded-lg bg-[#F44E5D] flex items-center justify-center">
                  <img
                    src="/assets/Select Meals.png"
                    alt="Icon"
                    className="w-8 sm:w-9 md:w-10 2xl:w-12 h-6 sm:h-7 md:h-8 lg:h-10 2xl:h-12"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#114F3D] font-bold text-sm sm:text-base 2xl:text-lg">
                    Select and Customized <br />
                    your meals
                  </h3>
                  <p className="text-black text-xs sm:text-sm 2xl:text-base">
                    by Friday night through our
                    <br /> app or website.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl 2xl:rounded-2xl p-3 sm:p-4 2xl:p-6 shadow-lg w-[280px] sm:w-[320px] md:w-[380px] lg:w-[400px] 2xl:w-[480px] h-[100px] sm:h-[110px] md:h-[120px] 2xl:h-[140px] flex items-start gap-3 sm:gap-4 2xl:gap-6">
                <div className="w-[130px] sm:w-[145px] md:w-[80px] 2xl:w-[100px] h-full rounded-md 2xl:rounded-lg bg-[#F44E5D] flex items-center justify-center">
                  <img
                    src="/assets/Food Delivery.png"
                    alt="Icon"
                    className="w-8 sm:w-9 md:w-12 2xl:w-14 h-5 sm:h-5.5 md:h-6 2xl:h-8"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#114F3D] font-bold text-sm sm:text-base 2xl:text-lg">
                    Food <br />
                    Delivery
                  </h3>
                  <p className="text-black text-xs sm:text-sm 2xl:text-base">
                    Meals are cooked overnight and delivered between 5–7 AM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Decoration */}
        <img
          src="/assets/corner-decor.png"
          alt="Corner Decoration"
          className="absolute -bottom-1 sm:-bottom-20 2xl:bottom-0 left-0 w-[120px] sm:w-[150px] md:w-[180px] 2xl:w-[220px] z-0 lg:-bottom-18 md:-bottom-2"
        />
      </section>
    </div>
  );
};

export default PromoSection;
