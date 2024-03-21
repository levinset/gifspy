//import libaraies and components
import Hand from "../../assets/images/hand.png";
import SearchBar from "../../components/home/SearchBar";
import ToggleSwitch from "../../components/home/ToggleSwitch";

//main component
export default function Hero() {
  //return tsx
  return (
    <>
      <div className="bg-[#212121] py-10">
        <div className="container flex flex-row justify-between mx-auto ">
          <div className="mx-12">
            <img src={Hand} alt="Hnad" />
          </div>
          <div className="flex flex-col justify-center w-full gap-10 ">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-xl font-semibold text-white ">
                GIFspy Moments Await: Find, Share, and Delight!
              </h1>
              <p className="font-bold text-transparent uppercase custom-gradient text-8xl bg-gradient-to-r bg-clip-text w-fit">
                gifspy
              </p>
            </div>
            <div className="">
              <SearchBar />
            </div>
          </div>
          <ToggleSwitch />
        </div>
      </div>
    </>
  );
}
