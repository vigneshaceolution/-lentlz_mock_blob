import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FoodCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const FoodPresentationSection: React.FC = () => {
  const [foodCards, setFoodCards] = useState<FoodCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    if (typeof window === "undefined") return 280 + 20; // default
    const width = window.innerWidth;
    if (width >= 1536) return 320 + 15; // 2xl: Larger cards with more margin
    if (width >= 1024) return 260 + 20; // Card + margin (10 left + 10 right)
    if (width >= 768) return 280 + 20;
    return 280 + 20;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    // Sample data since we can't fetch from external API in this environment
    const sampleData = [
      {
        id: 1,
        image: "/assets/FoodCard-1.png",
        title: "Description",
        description: `Presentations are tools that can be used as lectures`,
      },
      {
        id: 2,
        image: "/assets/FoodCard-2.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 3,
        image: "/assets/FoodCard-3.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 4,
        image: "/assets/FoodCard-1.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
      {
        id: 5,
        image: "/assets/FoodCard-2.png",
        title: "Description",
        description: "Presentations are tools that can be used as lectures",
      },
    ];
    setFoodCards(sampleData);
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setVisibleCards(3); // Keep 3 cards visible on 2xl
      } else if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
      setCardWidth(getCardWidth());
      setCurrentIndex(0); // Reset index on resize
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = foodCards.length - visibleCards;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Dynamic styles based on screen size
  const getTitleFontSize = () => {
    if (typeof window === "undefined") return "28px";
    const width = window.innerWidth;
    if (width >= 1536) return "45px"; // 2xl
    if (width >= 1024) return "37px"; // lg
    if (width >= 768) return "32px"; // md
    return "28px"; // default
  };

  const getCardHeight = () => {
    if (typeof window === "undefined") return "350px";
    const width = window.innerWidth;
    if (width >= 1536) {
      return cardWidth >= 320 ? "460px" : "440px"; // 2xl
    }
    return cardWidth >= 260 ? "390px" : cardWidth >= 250 ? "370px" : "350px";
  };

  const getImageHeight = () => {
    if (typeof window === "undefined") return "200px";
    const width = window.innerWidth;
    if (width >= 1536) {
      return cardWidth >= 320 ? "280px" : "260px"; // 2xl
    }
    return cardWidth >= 260 ? "240px" : cardWidth >= 250 ? "220px" : "200px";
  };

  const getImageWidth = () => {
    if (typeof window === "undefined") return cardWidth - 40;
    const width = window.innerWidth;
    if (width >= 1536) {
      return cardWidth - 50; // 2xl: Larger margin
    }
    return cardWidth - 40;
  };

  const getCardContentWidth = () => {
    if (typeof window === "undefined") return cardWidth - 40;
    const width = window.innerWidth;
    if (width >= 1536) {
      return cardWidth - 26; // 2xl
    }
    if (width >= 768) {
      return cardWidth - 20; // Tablet and Laptop
    }
    return cardWidth - 40; // Mobile
  };

  const getTitleFontStyles = () => {
    if (typeof window === "undefined") return { fontSize: "14px" };
    const width = window.innerWidth;
    if (width >= 1536) {
      return { fontSize: "20px" }; // 2xl
    }
    if (width >= 1024) {
      return { fontSize: "16px" }; // lg
    }
    if (width >= 768) {
      return { fontSize: "15px" }; // md
    }
    return { fontSize: "14px" }; // default
  };

  const getDescriptionFontStyles = () => {
    if (typeof window === "undefined") return { fontSize: "13px" };
    const width = window.innerWidth;
    if (width >= 1536) {
      return { fontSize: "18px" }; // 2xl
    }
    if (width >= 1024) {
      return { fontSize: "15px" }; // lg
    }
    if (width >= 768) {
      return { fontSize: "14px" }; // md
    }
    return { fontSize: "13px" }; // default
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
  px-4 pt-12 pb-10            // mobile padding
  md:px-10 md:pt-14 md:pb-12  // tablet
  lg:px-16 lg:pt-20 lg:pb-0   // laptop
  2xl:px-24 2xl:pt-28 2xl:pb-0 // 2xl desktop
  bg-[#114F3D] lg:bg-transparent"
    >
      {/* Title */}
      <div className="relative mb-8 lg:mb-12 2xl:mb-16 flex items-center justify-center">
        {/* Title */}
        <h1
          className="text-white text-center z-10 lg:mt-28 2xl:mt-26 mb-4 lg:mb-8 2xl:mb-22 px-4"
          style={{
            fontFamily: "Fredoka One, cursive",
            fontSize: getTitleFontSize(),
            fontWeight: "400",
          }}
        >
          Have a peek at our menu
        </h1>

        {/* Masala Images - Only show on large screens to maintain laptop design */}
        <img
          src="/assets/masala-one.png"
          alt="Masala Top"
          className="absolute top-38 -left-74 transform -translate-x-1/2 z-21 hidden lg:block 2xl:top-52 2xl:-left-110"
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 1536
                ? "300px"
                : "200px",
          }}
        />

        <img
          src="/assets/masala-two.png"
          alt="Masala Side"
          className="absolute top-1/2 -left-90 transform -translate-y-1/2 z-20 hidden lg:block 2xl:-left-130"
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 1536
                ? "300px"
                : "150px",
          }}
        />
      </div>

      <div className="flex items-center justify-center w-full max-w-7xl 2xl:max-w-full">
        {/* Left Button */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 rounded-full shadow-md transition duration-300 mr-2 lg:mr-15 2xl:mr-20 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-xl"
          }`}
          style={{ backgroundColor: "#f44e5d" }}
        >
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-white" />
        </button>

        {/* Cards Container */}
        <div
          className="overflow-hidden mx-2 lg:mx-6 2xl:mx-auto"
          style={{
            width: `${cardWidth * visibleCards}px`,
          }}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex *
                (window.innerWidth >= 768 ? cardWidth : cardWidth - 20)
              }px)`,
            }}
          >
            {foodCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#ffa900] rounded-[20px] lg:rounded-[40px] 2xl:rounded-[50px] p-3 lg:p-4 2xl:p-6 shadow-lg hover:shadow-xl mx-[10px] 2xl:mx-[12px] flex-shrink-0"
                style={{
                  width: `${getCardContentWidth()}px`,
                  height: getCardHeight(),
                }}
              >
                <div className="mb-4 lg:mb-6 2xl:mb-8 flex justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-[15px] lg:rounded-[30px] 2xl:rounded-[35px] border-[3px] lg:border-[4px] 2xl:border-[5px] border-white object-cover"
                    style={{
                      width: `${getImageWidth()}px`,
                      height: getImageHeight(),
                    }}
                  />
                </div>
                <div className="text-center px-2 2xl:px-4">
                  <h3
                    className="mb-2 lg:mb-3 2xl:mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      ...getTitleFontStyles(),
                      fontWeight: 600,
                      color: "#114F3D",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      ...getDescriptionFontStyles(),
                      fontWeight: 500,
                      color: "#000000",
                      lineHeight: "1.4",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex + visibleCards >= foodCards.length}
          className={`z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 rounded-full shadow-md transition duration-300 ml-2 lg:ml-15 2xl:ml-20 ${
            currentIndex + visibleCards >= foodCards.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-xl"
          }`}
          style={{ backgroundColor: "#f44e5d" }}
        >
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-white" />
        </button>
      </div>
    </div>
  );
};

export default FoodPresentationSection;
