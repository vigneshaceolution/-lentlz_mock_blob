import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToPromo = () => {
    const promo = document.getElementById("promo");
    if (promo) {
      promo.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close menu on mobile if open
  };

  return (
    <header className="w-full font-['Montserrat'] pt-2 sm:pt-4 md:pt-6 -mb-1 lg:mb-0 lg:pt-0 xl:pt-10 3xl:pt-16 4xl:pt-20 relative bg-[#114F3D]">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 pt-0 xl:px-14 2xl:px-20 3xl:px-28 4xl:px-36 relative">
        <div className="absolute top-1 left-2 sm:top-2 sm:left-4 md:top-4 md:left-6 lg:top-6 lg:left-8 xl:top-10 xl:left-12 2xl:-left-20 2xl:top-0 3xl:left-40 4xl:left-48 z-20">
          <img
            src="/assets/logo.png"
            alt="Lentlz Logo"
            className="w-[80px] h-[65px] xs:w-[100px] xs:h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[115px] lg:w-[160px] lg:h-[130px] xl:w-[180px] xl:h-[150px] 2xl:w-[480px] 2xl:h-[280px] 3xl:w-[260px] 3xl:h-[210px] 4xl:w-[300px] 4xl:h-[240px] object-contain select-none"
          />
        </div>

        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 pt-0 xl:px-14 2xl:px-20 3xl:px-28 4xl:px-36">
          <div className="flex items-center justify-end h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 3xl:h-40 4xl:h-48">
            {/* Desktop Navigation - Enhanced for large monitors */}
            <nav className="hidden xl:flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 2xl:space-x-8 3xl:space-x-12 4xl:space-x-16">
              <button
                onClick={handleScrollToPromo}
                className="bg-[#F6A70B] text-[#FEFFEC] px-2 sm:px-3 xl:px-4 2xl:px-6 3xl:px-8 4xl:px-10 py-1.5 xl:py-2 3xl:py-3 4xl:py-4 rounded-2xl 3xl:rounded-3xl 4xl:rounded-3xl hover:bg-yellow-500 transition font-bold text-[13px] xl:text-[15px] 2xl:text-[16.9px] 3xl:text-[19px] 4xl:text-[22px]"
              >
                Download App
              </button>
            </nav>

            {/* Large Tablet Navigation */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-2 sm:space-x-3 ">
              <button
                onClick={handleScrollToPromo}
                className="bg-[#F6A70B] text-[#FEFFEC] px-2 py-1.5 rounded-2xl hover:bg-yellow-500 text-[12px] sm:text-[13px] font-bold"
              >
                Download App
              </button>
            </nav>

            {/* Medium Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-1.5 sm:space-x-2">
              <button
                onClick={handleScrollToPromo}
                className="bg-[#F6A70B] text-[#FEFFEC] px-2 py-1 rounded-xl hover:bg-yellow-500 text-[11px] sm:text-[12px] font-bold"
              >
                Download App
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-[#F6A70B] text-xl sm:text-2xl p-1.5 sm:p-2 hover:text-yellow-400 transition-colors rounded-lg hover:bg-yellow-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-3 sm:py-4 px-2 sm:px-4 mt-2 bg-[#114F3D] bg-opacity-95 border-t border-[#F6A70B]/30 backdrop-blur-sm rounded-b-lg shadow-lg animate-in slide-in-from-top-2 duration-200">
              <div className="space-y-2 sm:space-y-3">
                <div className="pt-3 border-t border-[#F6A70B]/20 mt-3">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-[#F44E5D] hover:text-pink-400 px-3 py-2 rounded-lg hover:bg-pink-50 text-[14px] sm:text-[15px] w-full"
                  >
                    Log In
                    <div className="ml-2 w-4 h-4 bg-[#F44E5D] rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px]">👤</span>
                    </div>
                  </button>
                  <button
                    onClick={handleScrollToPromo}
                    className="w-full mt-3 bg-[#F6A70B] text-[#FEFFEC] px-4 py-2 rounded-2xl hover:bg-yellow-500 text-[14px] sm:text-[16px] font-bold shadow-lg"
                  >
                    Download App
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
