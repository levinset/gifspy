import { MdGif } from "react-icons/md";
import { RiEmojiStickerLine } from "react-icons/ri";
import { useToggleSwitch } from "../../hooks/context/useToggleSwith";
import { motion } from "framer-motion";

// Main component
export default function ToggleSwitch() {
  // Switch state
  const { switchStatus, setSwitchStatus } = useToggleSwitch();

  // Function to toggle between "gifs" and "stickers"
  const toggleSwitch = () => {
    setSwitchStatus(switchStatus === "gifs" ? "stickers" : "gifs");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-end w-1/4 ">
        <div
          onClick={toggleSwitch}
          className="bg-[#434141]  h-[6rem] justify-end flex flex-col rounded-full cursor-pointer  "
        >
          <div className="flex flex-col gap-2 ">
            <motion.button
              className="rounded-full w-[3rem] h-[3rem] text-5xl  bg-[#EA4335] text-white"
              animate={{ y: switchStatus === "gifs" ? 2 : -50 }}
              transition={{ duration: 0.2 }}
            >
              {switchStatus === "gifs" ? <MdGif /> : <RiEmojiStickerLine />}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
