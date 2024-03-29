//import libararies
import { useState } from "react";
import { ModalProps } from "../../types/ModalTypes";
import { IoClose } from "react-icons/io5";

//main componnet
export default function EmbedModal({ embedUrl, onClose }: ModalProps) {
  //use states
  const [copied, setCopied] = useState(false);
  //handle copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedUrl);
    setCopied(true);
  };

  //
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-8 bg-black rounded-lg opacity-85"
      >
        <div className="flex flex-row justify-end">
          <button
            className="text-2xl text-white hover:scale-110 hover:text-red-500"
            onClick={onClose}
          >
            <IoClose />
          </button>
        </div>
        <p className="mb-4 text-white">Embed URL:</p>
        <div className="flex flex-row">
          <input
            className="h-[3rem] rounded-l-full text-black w-full px-8 focus:outline-none "
            type="text"
            value={embedUrl}
            readOnly
          />
          <button
            className="px-4 font-semibold text-white rounded-r-full bg-violet-500 hover:bg-violet-600"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
