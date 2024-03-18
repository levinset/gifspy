//
import Hand from "../../assets/images/hand.png";

//main component
export default function Hero() {
  return (
    <>
      <div className=" bg-[#212121] flex flex-row justify-center gap-10 ">
        <div>
          <img src={Hand} alt="Hnad" />
        </div>
        <div className="flex flex-col justify-center gap-10 ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-white ">
              GIFspy Moments Await: Find,Share, and Delight!
            </h1>
            <p className="font-bold text-transparent uppercase custom-gradient text-7xl bg-gradient-to-r bg-clip-text w-fit ">
              gifspy
            </p>
          </div>
          <div className="bg-white rounded-full ">searchbar</div>
        </div>
        <div className="flex flex-col justify-end ">
          <div className="flex flex-col gap-2">
            <button className="bg-white rounded-full ">stickers</button>
            <button className="bg-red-400 rounded-full ">GIFs</button>
          </div>
        </div>
      </div>
    </>
  );
}
