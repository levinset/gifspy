//import libarie and components
import { useState, useEffect } from "react";
import Hand from "../../assets/images/hand.png";
import SearchBar from "../../components/home/SearchBar";
import ToggleSwitch from "../../components/home/ToggleSwitch";

//main component
export default function Hero() {
  //use state hook
  const [isSticky, setIsSticky] = useState(false);
  //maneg sticky scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //tsx
  return (
    <>
      <div
        className={`bg-[#212121] sticky px-2 top-0 z-50 ${
          isSticky ? "sticky-nav" : ""
        } max-sm:px-4 max-sm:pt-2 `}
      >
        <div className="container flex flex-row justify-between mx-auto">
          <div
            className={`${
              isSticky ? "hidden" : ""
            }  flex flex-col max-sm:hidden`}
          >
            <img src={Hand} alt="Hand" />
          </div>

          <div className="flex flex-col justify-center w-full gap-10 max-sm:gap-2">
            <div className="flex flex-col items-center gap-4 max-sm:gap-0">
              <h1
                className={`text-xl font-semibold text-white max-sm:text-center ${
                  isSticky ? "hidden" : ""
                } `}
              >
                GIFspy Moments Await: Find, Share, and Delight!
              </h1>
              <p
                className={`font-bold text-transparent uppercase custom-gradient bg-gradient-to-r bg-clip-text max-sm:text-6xl ${
                  isSticky
                    ? "text-6xl pl-[5rem] justify-center"
                    : "text-8xl text-center"
                }`}
              >
                gifspy
              </p>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-end pl-[2rem] py-[2rem] max-sm:py-0 max-sm:pl-3 ${
              isSticky ? "pl-0" : ""
            } `}
          >
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </>
  );
}
