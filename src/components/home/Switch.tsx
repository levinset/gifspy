//import libaries and components
import { MdGif } from "react-icons/md";
import { RiEmojiStickerLine } from "react-icons/ri";
//main components
export default function Switch() {
  return (
    <>
      <div className="flex flex-col items-center justify-end w-1/4 ">
        <div className="flex flex-col gap-2 ">
          <button className="bg-white rounded-full w-[3rem] h-[3rem] text-5xl ">
            <RiEmojiStickerLine />
          </button>
          <button className="bg-[#EA4335] text-white rounded-full w-[3rem] h-[3rem] text-5xl ">
            <MdGif />
          </button>
        </div>
      </div>
    </>
  );
}
