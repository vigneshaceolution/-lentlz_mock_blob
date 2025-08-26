import React from "react";
import Header from "./Header";
import WhyLentlz from "./WhyLentlzSection";
import FoodPresentationSection from "./FoodCard";
import MealSubscriptionPlans from "./SubscriptionPlans";
import PromoSection from "./PromoSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import HomeSection from "./HomeSection";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="relative overflow-visible">
        <img
          src="/assets/blob-background.png"
          alt="Decorative Green Blob"
          className="hidden lg:block absolute top-0 left-0 w-[60vw] z-10 pointer-events-none select-none"
        />

        <div className="relative ">
          <Header />
          <div className="relative overflow-y-visible">
            <img
              src="/assets/blob-pink.png"
              alt="Pink Blob"
              className="hidden lg:block absolute top-[40vw] right-0 z-20 w-[40vw] pointer-events-none select-none"
            />
            <div className="relative">
              <HomeSection />
              <div className="relative overflow-y-visible">
                <img
                  src="/assets/blob-green-3.png"
                  alt="Pink Blob"
                  className="hidden lg:block absolute top-0 left-0 z-10 w-[100vw] pointer-events-none select-none"
                />
                <div className="relative">
                  <WhyLentlz />
                  <div className="relative overflow-y-visible">
                    <img
                      src="/assets/FoodBg.png"
                      alt="Pink Blob"
                      className="hidden lg:block absolute w-full h-full object-cover pointer-events-none select-none opacity-10"
                    />
                    <div className="relative z-50">
                      <FoodPresentationSection />
                      <div className="relative overflow-y-visible">
                        <img
                          src="/assets/PromoBg.png"
                          alt="Pink Blob"
                          className="hidden lg:block 2xl:hidden absolute bottom-0 left-0 z-10 w-[100vw] pointer-events-none select-none"
                        />
                        <div className="relative">
                          <MealSubscriptionPlans />
                          <PromoSection />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default HeroSection;
