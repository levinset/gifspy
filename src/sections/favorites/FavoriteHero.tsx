//import libaraies and components
import HandMobile from "../../assets/images/hand_mobile.png";

//main component
export default function FavoriteHero() {
  //return tsx
  return (
    <>
      <div className="bg-[#212121]">
        <div className="container flex flex-row justify-center mx-auto 2xl:gap-[10rem] ">
          <div className="mb-10 ">
            <img className=" w-[70%] " src={HandMobile} alt="Hand mobile" />
          </div>

          <div className="flex flex-row items-center justify-center mr-10">
            <p className="font-bold text-transparent custom-gradient text-8xl bg-gradient-to-r bg-clip-text w-fit max-sm:text-6xl ">
              Favorites
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
