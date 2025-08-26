const WhyLentlzSection = () => {
  return (
    <div
      id="why-lentlz"
      className="pt-20 px-4 md:px-6 md:pb-20 lg:pb-0 lg:px-8 lg:-mb-26 2xl:px-12 2xl:pt-16 2xl:-mt-40 2xl:pb-50 overflow-hidden bg-[#ffaa29] lg:bg-transparent"
    >
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto ">
        {/* Header Section */}
        <div className="relative ml-0 md:ml-10 lg:ml-60 2xl:ml-18 mb-8 lg:mb-0 2xl:mb-4 z-20">
          <img
            src="/assets/Mushrooms.png"
            alt="Mushrooms"
            className="select-none absolute
            -left-4 -top-10 w-14 h-14
            sm:-left-20 sm:w-14 sm:h-14
            md:-left-20 md:w-35 md:-top-2 md:h-auto
            lg:-left-70 lg:-top-10 lg:w-auto lg:h-auto
            2xl:-left-90 2xl:-top-0 2xl:w-auto 2xl:h-auto 2xl:scale-125"
          />

          {/* 100% Natural Badge */}
          <div className="absolute left-10 sm:-left-8 top-1/2 transform -translate-y-1/2 rounded-full p-1 md:p-2 lg:p-3 lg:-left-18 md:left-40 2xl:-left-10 2xl:p-4">
            <img
              src="/assets/Natural.png"
              className="w-20 sm:w-24 md:w-28 lg:w-40 2xl:w-52 select-none"
            />
          </div>

          {/* Title */}
          <div className="ml-8 md:ml-14 lg:ml-40 2xl:ml-56 text-center lg:text-left">
            <h1
              className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[78px] leading-none"
              style={{ fontFamily: "Fredoka One, cursive", fontWeight: "400" }}
            >
              WHY
              <br />
              LENTLZ?
            </h1>
          </div>
        </div>

        {/* Two Column Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 2xl:gap-16 pb-11 2xl:pb-16 ">
          {/* Left - Health Benefits */}
          <div className="lg:col-span-7 lg:ml-20 2xl:ml-0 lg:mt-10 2xl:mt-16 order-2 lg:order-1 z-20">
            <div className="flex items-center gap-4 relative mb-6 lg:mb-0 2xl:mb-4">
              <img
                src="/assets/HealthBenefitLeftBurst.png"
                alt="Burst"
                className="select-none w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] -ml-2 sm:-ml-4 md:left-60 md:top-3 md:-ml-8 lg:-ml-80 2xl:-ml-84 absolute -top-4 lg:-top-0 2xl:-top-2 left-17"
              />
              <h2
                className="mx-auto lg:ml-0 text-2xl md:text-3xl lg:text-[42.9px] 2xl:text-[56px] mb-4 lg:mb-8 2xl:mb-12 md:mx-auto md:pt-10 2xl:pt-16"
                style={{
                  fontFamily: "Fredoka One, cursive",
                  fontWeight: "400",
                  color: "#114F3D",
                }}
              >
                Health Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 2xl:gap-8 lg:-mb-10 lg:pb-0 2xl:-mb-16 md:ml-20 ml-18 lg:ml-0 2xl:ml-0">
              {/* Left Column */}
              <div className="space-y-4 lg:space-y-6 2xl:space-y-8">
                <div>
                  <h3 className="text-base md:text-lg lg:text-[19.9px] 2xl:text-[26px] font-bold text-black leading-tight">
                    <span>• No Preservatives,</span>
                    <br />
                    <span className="ml-4 block">No Artificial Colors</span>
                  </h3>
                  <p className="ml-4 text-sm md:text-base lg:text-[16px] 2xl:text-[20px] font-medium text-black leading-snug 2xl:leading-relaxed">
                    Unlike restaurant food, our <br />
                    meals are 100% natural and <br />
                    cooked fresh.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-[19.9px] 2xl:text-[26px] font-bold text-black leading-tight">
                    <span>• Balanced</span>
                    <br />
                    <span className="ml-4 block">Nutrition</span>
                  </h3>
                  <p className="ml-4 text-sm md:text-base lg:text-[16px] 2xl:text-[20px] font-medium text-black leading-snug 2xl:leading-relaxed">
                    Meals are designed by a <br />
                    certified nutritionist for <br />
                    optimal health benefits.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 lg:space-y-6 2xl:space-y-8">
                <div>
                  <h3 className="text-base md:text-lg lg:text-[19.9px] 2xl:text-[26px] font-bold text-black leading-tight">
                    <span>• Light on</span>
                    <br />
                    <span className="ml-4 block">Digestion</span>
                  </h3>
                  <p className="ml-4 text-sm md:text-base lg:text-[16px] 2xl:text-[20px] font-medium text-black leading-snug 2xl:leading-relaxed">
                    No heavy oils or artificial
                    <br /> additives, making the food <br />
                    light and easy to digest.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-[19.9px] 2xl:text-[26px] font-bold text-black leading-tight">
                    <span>• Dietary</span>
                    <br />
                    <span className="ml-4 block">Customization</span>
                  </h3>
                  <p className="ml-4 text-sm md:text-base lg:text-[16px] 2xl:text-[20px] font-medium text-black leading-snug 2xl:leading-relaxed">
                    Options for weight-loss diets, <br />
                    diabetic-friendly meals,
                    <br /> and macro-balanced meals.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Only - Chef & Bowls */}
            <div className="mt-8 2xl:mt-12 hidden lg:flex gap-4 2xl:gap-6 relative ">
              <div
                className="absolute -left-8 2xl:-left-12 top-24 2xl:top-82 
             bg-gray-200 rounded-2xl shadow-lg overflow-hidden
             w-[260px] h-[380px] 2xl:w-[340px] 2xl:h-[500px]"
              >
                <img
                  src="/assets/Professional chef cooking.png"
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Chef"
                />
              </div>
              <div className="absolute left-[270px] 2xl:left-[350px] top-[150px] 2xl:top-[400px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden w-[300px] h-[450px] 2xl:w-[390px] 2xl:h-[590px]">
                <img
                  src="/assets/Variety of healthy bowls.png"
                  className="w-full h-full object-cover rounded-2xl select-none"
                  alt="Healthy Bowls"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:-mt-20 2xl:-mt-32 lg:mr-8 2xl:mr-12 z-20">
            {/* Bowl Section */}
            <div className="relative flex justify-center lg:ml-28 2xl:ml-110 mb-20 2xl:mb-32">
              <div className="relative">
                <div
                  className="bg-gray-200 rounded-4xl shadow-lg overflow-hidden
             w-[280px] sm:w-[300px] md:w-[320px] lg:w-[380px] 2xl:w-[550px] 2xl:h-[800px] "
                >
                  <img
                    src="/assets/Lentlz food bowl.png"
                    alt="Bowl"
                    className="select-none w-[280px] sm:w-[300px] md:w-[320px] lg:w-[380px] 2xl:w-[550px] h-[420px] sm:h-[460px] md:h-[480px] lg:h-[500px] 2xl:h-auto object-cover rounded-4xl"
                  />
                </div>
                <div
                  className="absolute ml-6 2xl:ml-8 rounded-4xl shadow-lg border-4 border-white overflow-hidden bg-white
    w-[200px] h-[200px]
    sm:w-[220px] sm:h-[220px] -bottom-18 -left-16
    md:w-[250px] md:h-[250px] md:-bottom-18 md:-left-30
    lg:w-[250px] lg:h-[250px] lg:-bottom-20 lg:-left-30
    2xl:w-[400px] 2xl:h-[400px] 2xl:-bottom-28 2xl:-left-40"
                >
                  <img
                    src="/assets/Happy family eating.png"
                    alt="Family"
                    className="select-none w-full h-full object-cover rounded-4xl"
                  />
                </div>

                <img
                  src="/assets/green_leaf_corner.png"
                  alt="Leaf"
                  className="select-none absolute right-[-5vw] top-50 w-[10vw] h-auto "
                />
                <img
                  src="/assets/RedCirclesGroup.png"
                  alt="Red Circles"
                  className="select-none absolute -right-26 -bottom-32 w-20 h-20 sm:w-20 sm:h-20 lg:w-auto lg:h-auto lg:-right-38 lg:top-150 2xl:-right-40 2xl:top-250 2xl:scale-125 md:-right-80 md:w-60 md:h-auto md:-bottom-96"
                />
              </div>
            </div>

            {/* Mobile / Tablet Only - Chef & Bowl */}
            <div className="flex lg:hidden gap-4 justify-center mb-8">
              <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden w-32 h-48 sm:w-36 sm:h-52 md:w-40 md:h-60">
                <img
                  src="/assets/Professional chef cooking.png"
                  className="select-none w-full h-full object-cover rounded-2xl"
                  alt="Chef"
                />
              </div>
              <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden w-32 h-48 sm:w-40 sm:h-60 md:w-44 md:h-66">
                <img
                  src="/assets/Variety of healthy bowls.png"
                  className="select-none w-full h-full object-cover rounded-2xl"
                  alt="Bowls"
                />
              </div>
            </div>

            {/* Hygiene & Quality */}
            <div className="mt-8 lg:mt-30 2xl:mt-20 lg:-ml-50 2xl:-ml-4 lg:mb-0">
              <div className="relative lg:-top-12 2xl:top-20 md:left-50">
                <img
                  src="/assets/HealthBenefitLeftBurst.png"
                  alt="Burst"
                  className="select-none absolute -top-4 -ml-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] md:top-2 md:left-10 left-12 lg:top-30 2xl:top-40 lg:-left-14 2xl:-left-18"
                />
                <h2
                  className="ml-16 md:py-10 lg:ml-0 2xl:ml-0 mb-6 lg: text-2xl md:text-3xl lg:text-[40px] 2xl:text-[52px] lg:pt-40 2xl:pt-52"
                  style={{
                    fontFamily: "Fredoka One, cursive",
                    fontWeight: "400",
                    color: "#114F3D",
                  }}
                >
                  Hygiene & Quality
                  <br />
                  Assurance
                </h2>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 2xl:gap-20 pb-10 2xl:pb-16">
                  {/* Clean Cooking */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full bg-[#f44e5d] flex items-center justify-center mb-4 2xl:mb-6">
                      <img
                        src="/assets/Clean cooking environment icon.png"
                        alt="Clean Cooking"
                        className="select-none w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                      />
                    </div>
                    <p className="text-center lg:text-left text-sm md:text-base lg:text-[19.9px] 2xl:text-[18px] font-bold text-black">
                      <span>• A Clean, Professional</span>
                      <br />
                      <span className="lg:ml-3 2xl:ml-4">
                        Cooking Environment
                      </span>
                    </p>
                  </div>

                  {/* Handpicked */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full bg-[#f44e5d] flex items-center justify-center mb-4 2xl:mb-6">
                      <img
                        src="/assets/Handpicked ingredients icon.png"
                        alt="Handpicked"
                        className="select-none w-14 h-14 md:w-20 md:h-20 lg:w-12 lg:h-12 2xl:w-28 2xl:h-28"
                      />
                    </div>
                    <p className="text-center lg:text-left text-sm md:text-base lg:text-[19.9px] 2xl:text-[18px] font-bold text-black">
                      <span>• Handpicked</span>
                      <br />
                      <span className="lg:ml-4 2xl:ml-5">Ingredients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLentlzSection;
