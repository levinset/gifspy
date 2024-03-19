import { ExtendedGifType } from "../../types/GifTypes";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { handleToggleFavourite } from "../../utils/handleToggleFavourite";
import EmbedModal from "./EmbedModal";
import { useTransition, animated } from "@react-spring/web";
import { selectHeartAnimationConfig } from "../../config/animationsConfigs";

//main component
export default function GifCard(props: ExtendedGifType) {
  //use state hooks
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  //handle favorite
  const handleFavorite = () => {
    handleToggleFavourite(props.id);
    setIsFavourite(!isFavourite);
  };
  //handle delet favorite
  const handleDelete = () => {
    if (props.handleDeleteFavorite) {
      props.handleDeleteFavorite(props.id);
    }
    handleToggleFavourite(props.id);
  };
  //check is faorite
  const isFavouriteGif = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  ).includes(props.id);
  const { isFavoritePage } = props;
  //random color generator
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  //Define transition animation
  const transitions = useTransition(isFavouriteGif, selectHeartAnimationConfig);

  return (
    <div className="relative overflow-hidden group" key={props.id}>
      {/* Apply random colorful background */}
      <div className="rounded-lg " style={{ backgroundColor: randomColor }}>
        <img
          className="z-50 w-full my-2 rounded-lg"
          src={props.images.original.url}
          alt={props.title}
        />
      </div>
      <div className="absolute inset-0 flex-row justify-end hidden my-2 rounded-lg group bg-gradient-to-l from-black to-gray group-hover:flex">
        <div className="w-[3rem] rounded-r-lg flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4 py-10 text-2xl text-white">
            <button onClick={isFavoritePage ? handleDelete : handleFavorite}>
              {isFavoritePage ? (
                <span className="text-red-600">
                  <FaTrash />
                </span>
              ) : (
                <>
                  {transitions((style, item) =>
                    item ? (
                      <animated.div style={style}>
                        <FaHeart className="text-red-600" />
                      </animated.div>
                    ) : (
                      <animated.div style={style}>
                        <FaRegHeart className="hover:text-red-600" />
                      </animated.div>
                    )
                  )}
                </>
              )}
            </button>
            <button className=" hover:text-violet-600 hover:scale-110">
              <FaCode onClick={() => setShowModal(true)} />
            </button>
            <button className=" hover:text-violet-600 hover:scale-110">
              <FaRegEye />
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <EmbedModal
          embedUrl={props.embed_url}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
