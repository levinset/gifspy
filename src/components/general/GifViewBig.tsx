//import libaries
import { GifType } from "../../types/GifTypes";
import { useSpring, animated } from "@react-spring/web";
import {
  embedAnimationConfig,
  heartAnimationConfig,
} from "../../config/animationsConfigs";
import { shareAnimationConfig } from "../../config/animationsConfigs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { IoShareOutline, IoShare } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { handleToggleFavourite } from "../../utils/handleToggleFavourite";
//main component

export default function GifViewBig(props: GifType) {
  //useState
  const [isFavoriteHovered, setIsFavoriteHovered] = useState<boolean>(false);
  const [isShareHovered, setIsShareHovered] = useState<boolean>(false);
  const [isEmbedHovered, setIsEmbedHovered] = useState<boolean>(false);

  //check if isFavorites
  const [isFavourite, setIsFavourite] = useState<boolean>(
    JSON.parse(localStorage.getItem("favourites") || "[]").includes(props.id)
  );
  //heart animation config
  const heartAnimation = useSpring(heartAnimationConfig);
  const shareAnimation = useSpring(shareAnimationConfig);
  const embedAnimation = useSpring(embedAnimationConfig);
  //handle favorite
  const handleFavorite = () => {
    handleToggleFavourite(props.id);
    setIsFavourite(!isFavourite);
  };
  //manage icons changes
  const heartIcon =
    isFavoriteHovered || isFavourite ? (
      <FaHeart className="text-red-600" />
    ) : (
      <FaRegHeart />
    );
  const shareIcon = isShareHovered ? <IoShare /> : <IoShareOutline />;

  //
  return (
    <>
      <div className="container w-full p-2 mx-auto text-white ">
        <div className="flex flex-row">
          <div className="flex flex-col pt-8 pr-8 w-[20rem] gap-5  ">
            <div className="flex flex-row gap-2 ">
              <img className=" w-[4rem] " src={props.user?.avatar_url} alt="" />
              <div className=" w-fit">
                <p className="font-bold "> {props.user?.username} </p>
                <p className="text-gray-400 "> {props.user?.display_name} </p>
              </div>
            </div>
            <div>
              {props.user?.description && (
                <p className="font-semibold">Who am I?</p>
              )}
              <p className="text-sm "> {props.user?.description} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full ">
            <p> {props?.title} </p>
            <img src={props.images.original.url} alt="" />
          </div>
          <div className=" w-[10rem] ">
            <div className="flex flex-col gap-3 pt-8 pl-8 text-2xl ">
              <button
                onClick={handleFavorite}
                className={`flex flex-row items-center gap-2 ${
                  isFavoriteHovered ? "scale-110" : ""
                } `}
                onMouseEnter={() => setIsFavoriteHovered(true)}
                onMouseLeave={() => setIsFavoriteHovered(false)}
              >
                <animated.div style={heartAnimation}>{heartIcon}</animated.div>

                <span className="pb-1 text-base font-semibold ">Favorite</span>
              </button>
              <button
                onMouseEnter={() => {
                  setIsShareHovered(true);
                }}
                onMouseLeave={() => {
                  setIsShareHovered(false);
                }}
                className="flex flex-row items-center gap-2 group "
              >
                <animated.div style={isShareHovered ? shareAnimation : {}}>
                  {shareIcon}
                </animated.div>

                <span className="text-base font-semibold group-hover:scale-110 ">
                  Share
                </span>
              </button>
              <button
                onMouseEnter={() => setIsEmbedHovered(true)}
                onMouseLeave={() => setIsEmbedHovered(false)}
                className="flex flex-row items-center gap-2 hover:scale-110"
              >
                <animated.div style={isEmbedHovered ? embedAnimation : {}}>
                  <FaCode />
                </animated.div>
                <span className="pb-1 text-base font-semibold ">Embed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
