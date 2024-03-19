//import libaries and components
import { MdGif } from "react-icons/md";
import { RiEmojiStickerLine } from "react-icons/ri";
import { useToggleSwitch } from "../../hooks/context/useToggleSwith";
//main components
export default function ToggleSwitch() {
  //swith state
  const { switchStatus, setSwitchStatus } = useToggleSwitch();
  return (
    <>
      <div className="flex flex-col items-center justify-end w-1/4 ">
        <div className="flex flex-col gap-2 ">
          <button
            onClick={() => setSwitchStatus("stickers")}
            className={` rounded-full w-[3rem] h-[3rem] text-5xl ${
              switchStatus === "stickers"
                ? "bg-[#EA4335] text-white"
                : "bg-white text-black"
            }`}
          >
            <RiEmojiStickerLine />
          </button>
          <button
            onClick={() => setSwitchStatus("gifs")}
            className={`bg-[#EA4335]  rounded-full w-[3rem] h-[3rem] text-5xl ${
              switchStatus === "gifs"
                ? "bg-[#EA4335] text-white"
                : "bg-white text-black"
            }`}
          >
            <MdGif />
          </button>
        </div>
      </div>
    </>
  );
}
