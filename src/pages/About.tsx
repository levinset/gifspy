//import libraries and components
import FooterComponent from "../components/general/FooterComponent";
import NavBar from "../components/general/NavBar";

//main component
export default function About() {
  return (
    <>
      <NavBar />
      <div className="container flex justify-center mx-auto mt-20">
        <div className="flex flex-col items-center max-sm:gap-0">
          <h1
            className={`text-xl font-semibold text-white max-sm:text-center `}
          >
            GIFspy Moments Await: Find, Share, and Delight!
          </h1>
          <p
            className={`font-bold text-transparent uppercase custom-gradient text-[10rem] bg-gradient-to-r bg-clip-text max-sm:text-6xl `}
          >
            gifspy
          </p>
          <p className="text-2xl text-white max-sm:text-center">
            GifSpy is a webApp for Searching, Saving and sharing Gifs and
            Stickers
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
