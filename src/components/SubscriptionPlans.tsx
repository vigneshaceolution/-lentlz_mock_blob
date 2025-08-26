import React, { useEffect, useState } from "react";

interface Plan {
  id: number;
  dayCount: number;
  title: string;
  description: string;
  weeklyPrice: number;
  image: string; // Just the key, like "food1"
}

const imageMap: Record<string, string> = {
  food1: "/assets/Food Image 1.png",
  food2: "/assets/Food Image 2.png",
  food3: "/assets/Food Image 3.png",
};

const MealSubscriptionPlans: React.FC = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState<Plan[]>([]);

  useEffect(() => {
    // Sample data since we can't fetch from external API in this environment
    const sampleData = [
      {
        id: 1,
        dayCount: 3,
        title: "Weekly Plan",
        description: "Perfect for trying our service",
        weeklyPrice: 399,
        image: "food1",
      },
      {
        id: 2,
        dayCount: 4,
        title: "Bi-Weekly Plan",
        description: "Great for regular meals",
        weeklyPrice: 499,
        image: "food2",
      },
      {
        id: 3,
        dayCount: 5,
        title: "Monthly Plan",
        description: "Best value for families",
        weeklyPrice: 599,
        image: "food3",
      },
    ];
    setSubscriptionPlans(sampleData);
  }, []);

  // 🎯 Determine offset dynamically based on index
  const getOffsetClass = (index: number) => {
    if (index === 0) return "mt-0";
    return "lg:mt-20 2xl:mt-48 mt-0";
  };

  const scrollToPromo = () => {
    const promoElement = document.getElementById("promo");
    if (promoElement) {
      promoElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full mx-auto 
      sm:p-0 pb-0.5 md:pb-0.5 lg:p-0 2xl:p-0
      sm:mb-0 md:mb-0 lg:mb-0 2xl:mb-0
      font-[Inter] z-20 "
    >
      {/* Background for mobile and tablet only */}
      <div
        className="absolute inset-0 bg-[url('/assets/mock-bg.png')] bg-cover bg-no-repeat opacity-10 sm:opacity-20 md:opacity-20 lg:hidden"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-6xl 2xl:max-w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-2 2xl:p-4 font-[Inter] mb-24 2xl:mb-32">
        {/* Background for mobile and tablet only */}
        <div
          className="absolute inset-0 bg-[url('/assets/mock-bg.png')] bg-cover bg-no-repeat opacity-10 sm:opacity-20 md:opacity-20 lg:hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-x-4 md:gap-x-6 lg:gap-x-0 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-10 2xl:gap-y-14 relative">
          {/* Desktop decorative images - hidden on mobile/tablet */}
          <img
            src="/assets/GreenLeafGroup.png"
            alt="GreenLeafGroup"
            className="select-none absolute -left-20 2xl:-left-10 -top-16 2xl:-top-20 hidden lg:block"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth >= 1536
                  ? "200px"
                  : "240px",
            }}
          />

          <img
            src="/assets/right-leaf.png"
            alt="Right Leaf Decor"
            className="select-none w-[190px] 2xl:w-[240px] absolute -top-30 2xl:-top-36 -right-16 2xl:-right-4 hidden lg:block"
          />

          {subscriptionPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[480px] lg:max-w-[340px] 2xl:max-w-[480px] pt-3 sm:pt-4 md:pt-5 lg:pt-5 2xl:pt-8 ${getOffsetClass(
                index
              )}`}
            >
              {/* Heading above the 3rd plan - responsive positioning */}
              {index === 2 && (
                <>
                  <img
                    src="/assets/OurSubscriptionsLeftBurst.png"
                    alt="Our Subscriptions Left Burst"
                    className="select-none w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 2xl:w-[130px] 2xl:h-[130px] absolute -top-6 sm:-top-7 md:-top-8 lg:-top-10 2xl:-top-14 -left-10 lg:-left-16 2xl:-left-20 sm:right-18 md:right-20 lg:right-77"
                  />
                  <h2
                    className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[38px] 2xl:text-[48px] mb-3 sm:mb-4 2xl:mb-6 text-start leading-tight"
                    style={{
                      fontFamily: "Fredoka One",
                      color: "#114F3D",
                    }}
                  >
                    OUR
                    <br />
                    SUBSCRIPTIONS
                  </h2>
                </>
              )}

              <div className="relative rounded-2xl 2xl:rounded-3xl shadow-none pt-4 sm:pt-5 md:pt-6 lg:pt-6 2xl:pt-8 pb-0 px-0 overflow-visible">
                {/* Order Now Button - responsive sizing */}
                <button
                  onClick={scrollToPromo}
                  className="absolute top-0.5 2xl:top-1 right-6 sm:right-8 md:right-40 lg:right-14 2xl:right-18 z-20 px-2 sm:px-2.5 md:px-3 lg:px-2 2xl:px-4 pb-1.5 sm:pb-2 2xl:pb-3 pt-1 2xl:pt-2 rounded-lg 2xl:rounded-xl bg-white border-2 2xl:border-3 hover:bg-gray-100 transition-all shadow"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize:
                      typeof window !== "undefined" && window.innerWidth >= 1536
                        ? "16px"
                        : "12px",
                    borderColor: "#153704",
                    color: "#114F3D",
                  }}
                >
                  <span className="sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
                    ORDER NOW
                  </span>
                </button>

                {/* Plan Description Block - responsive layout */}
                <div className="flex items-start">
                  <div
                    className="w-1/2 px-2.5 sm:px-3 md:px-3.5 lg:px-4 2xl:px-6 pb-6 sm:pb-7 md:pb-8 lg:pb-10 2xl:pb-12 pt-3 sm:pt-3.5 md:pt-4 lg:pt-5 2xl:pt-7 rounded-l-3xl 2xl:rounded-l-4xl"
                    style={{
                      backgroundColor: "#FFAA29",
                      minHeight:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1536
                          ? "220px"
                          : "180px",
                    }}
                  >
                    <div
                      className="text-white font-bold leading-tight text-[18px] sm:text-[20px] md:text-[24px] lg:text-[34px] 2xl:text-[42px]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {plan.dayCount}-Day
                    </div>
                    <div
                      className="text-white font-bold leading-tight text-[18px] sm:text-[20px] md:text-[24px] lg:text-[34px] 2xl:text-[42px]"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Plan
                    </div>
                  </div>

                  <div
                    className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[150px] 2xl:w-[180px] px-2.5 sm:px-3 md:px-3.5 lg:px-4 2xl:px-5 py-4 sm:py-4.5 md:py-5 lg:py-6 2xl:py-8 flex items-center rounded-r-3xl 2xl:rounded-r-4xl"
                    style={{
                      backgroundColor: "#F44E5D",
                      minHeight:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1536
                          ? "180px"
                          : "140px",
                    }}
                  >
                    <p
                      className="text-white font-semibold text-[10px] sm:text-xs md:text-sm 2xl:text-base"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Food Image - responsive sizing */}
                <div className="relative z-10 -mt-20 sm:-mt-18 md:-mt-26 lg:-mt-24 2xl:-mt-28">
                  <img
                    src={imageMap[plan.image]}
                    alt={`${plan.title} meal`}
                    className="select-none w-full object-contain"
                    style={{
                      height:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1536
                          ? "auto"
                          : "auto",
                    }}
                  />

                  {/* Price Tag Bubble - responsive positioning and sizing */}
                  <div className="absolute -bottom-3 sm:-bottom-3.5 md:-bottom-0 lg:-bottom-6 2xl:-bottom-8 right-0.5 sm:right-1 md:right-1.5 lg:right-2 2xl:right-3 w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] 2xl:w-[170px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] 2xl:h-[85px] z-30">
                    <img
                      src="/assets/priceTagBubble.png"
                      alt="Price bubble"
                      className="select-none w-full h-full object-contain"
                    />
                    <div
                      className="absolute inset-0 flex justify-center flex-row text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] mt-4 sm:mt-4.5 md:mt-5 lg:mt-7 2xl:mt-9 ml-2.5 sm:ml-3 md:ml-3.5 lg:ml-4 2xl:ml-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="text-black mr-1 leading-none">
                        WEEKLY
                      </span>
                      <span
                        className="text-base sm:text-lg md:text-lg lg:text-xl 2xl:text-2xl"
                        style={{ color: "#F44E5D" }}
                      >
                        ${plan.weeklyPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom decorative image - hidden on mobile/tablet */}
          <img
            src="/assets/food-leaf.png"
            alt="Burst Decoration"
            className="select-none absolute -bottom-31 2xl:-bottom-60 left-90 2xl:left-160 hidden lg:block"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth >= 1536
                  ? "200px"
                  : "160px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MealSubscriptionPlans;
