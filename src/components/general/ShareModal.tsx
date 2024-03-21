//import libararies and components
import { useState, useEffect } from "react";
import { ShareModalProps } from "../../types/ModalTypes";
import { IoClose } from "react-icons/io5";

//main component
export default function ShareModal({ images, onClose }: ShareModalProps) {
  //use states
  const [copied, setCopied] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Original");
  const [urlToCopy, setUrlToCopy] = useState("");
  //handle compy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(urlToCopy);
    setCopied(true);
  };
  //handle copy button when selected changes
  useEffect(() => {
    setCopied(false);
  }, [selectedButton]);
  //calculate image sizes
  const SmallSize = images.downsized_still?.size
    ? (Number(images.downsized_still.size) / 100000).toFixed(1)
    : null;
  const SocialSize = images.downsized_medium?.size
    ? (Number(images.downsized_medium.size) / 1000000).toFixed(1)
    : null;
  const OriginalSize = images.original?.size
    ? (Number(images.original.size) / 1000000).toFixed(1)
    : null;
  const Mp4Size = images.original_mp4?.mp4_size
    ? (Number(images.original_mp4.mp4_size) / 1000000).toFixed(1)
    : null;

  //
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center pl-[8rem] bg-black bg-opacity-50 max-sm:pr-2 max-sm:pl-2"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-8 bg-black rounded-lg opacity-85"
      >
        <div className="flex flex-row items-center justify-between mb-2">
          <p className="font-bold text-white">Share GIF</p>
          <button
            className="text-2xl text-white hover:scale-110 hover:text-red-500"
            onClick={onClose}
          >
            <IoClose />
          </button>
        </div>
        <hr />
        <div className="flex flex-row gap-4 px-2 mt-10 text-sm opacity-60">
          {images.downsized_still?.url && (
            <button
              onClick={() => {
                if (images.downsized_still?.url) {
                  setUrlToCopy(images.downsized_still.url);
                  setSelectedButton("Small");
                }
              }}
              className={`font-bold ${
                selectedButton === "Small" ? "underline" : ""
              }`}
            >
              Small: {SmallSize}MB
            </button>
          )}
          {images.downsized_medium?.url && (
            <button
              onClick={() => {
                if (images.downsized_medium?.url) {
                  setUrlToCopy(images.downsized_medium.url);
                  setSelectedButton("Social");
                }
              }}
              className={`font-bold ${
                selectedButton === "Social" ? "underline" : ""
              }`}
            >
              Social{SocialSize ? `:${SocialSize}MB` : ""}
            </button>
          )}
          {images.original?.url && (
            <button
              onClick={() => {
                if (images.original?.url) {
                  setUrlToCopy(images.original.url);
                  setSelectedButton("Original");
                }
              }}
              className={`font-bold ${
                selectedButton === "Original" ? "underline" : ""
              }`}
            >
              Original: {OriginalSize}MB
            </button>
          )}
          {images.original_mp4?.mp4 && (
            <button
              onClick={() => {
                if (images.original_mp4?.mp4) {
                  setUrlToCopy(images.original_mp4.mp4);
                  setSelectedButton("MP4");
                }
              }}
              className={`font-bold ${
                selectedButton === "MP4" ? "underline" : ""
              }`}
            >
              MP4: {Mp4Size}MB
            </button>
          )}
        </div>

        <div className="flex flex-row justify-center mt-5 ">
          <button
            className="p-2 px-8 font-semibold text-white rounded-full bg-violet-500 hover:bg-violet-600"
            onClick={copyToClipboard}
          >
            {copied ? "Link Copied!" : "Copy GIF Link"}
          </button>
        </div>
      </div>
    </div>
  );
}
