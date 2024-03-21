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
import { Avatar } from "flowbite-react";
import EmbedModal from "./EmbedModal";
import ShareModal from "./ShareModal";
import Snackbar from "@mui/material/Snackbar";

//main component
export default function GifViewBig(props: GifType) {
  //useState
  const [isFavoriteHovered, setIsFavoriteHovered] = useState<boolean>(false);
  const [isShareHovered, setIsShareHovered] = useState<boolean>(false);
  const [isEmbedHovered, setIsEmbedHovered] = useState<boolean>(false);
  const [showEmbedModal, setShowEmbedModal] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showSnackbar, setShowSnackBar] = useState<boolean>(false);
  //check if isFavorites
  const [isFavourite, setIsFavourite] = useState<boolean>(
    JSON.parse(localStorage.getItem("favourites") || "[]").includes(props.id)
  );
  //animation configs
  const heartAnimation = useSpring(heartAnimationConfig);
  const shareAnimation = useSpring(shareAnimationConfig);
  const embedAnimation = useSpring(embedAnimationConfig);
  //handle favorite
  const handleFavorite = () => {
    handleToggleFavourite(props.id);
    setIsFavourite(!isFavourite);
    setShowSnackBar(true);
  };
  //manage icons changes
  const heartIcon =
    isFavoriteHovered || isFavourite ? (
      <FaHeart className="text-red-600" />
    ) : (
      <FaRegHeart />
    );
  const shareIcon = isShareHovered ? <IoShare /> : <IoShareOutline />;
  //handle Snackbar
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackBar(false);
  };
  //
  return (
    <>
      <div className="container w-full p-2 mx-auto text-white ">
        <div className="flex flex-row">
          <div className="flex flex-col pt-8 pr-8 w-[20rem] gap-5 max-sm:hidden  ">
            <div className="flex flex-row gap-2 ">
              {props.user?.avatar_url ? (
                <img
                  className=" w-[4rem] "
                  src={props.user?.avatar_url}
                  alt="userAvatar"
                />
              ) : (
                <div className="flex flex-row gap-2 ">
                  <Avatar />
                  <p>This Gif has no user</p>
                </div>
              )}

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
            <img src={props.images.original.url} alt="gif and stikcer" />
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
                <animated.div
                  style={isFavoriteHovered || isFavourite ? heartAnimation : {}}
                >
                  {heartIcon}
                </animated.div>

                <span className="pb-1 text-base font-semibold ">Favorite</span>
              </button>
              <button
                onClick={() => setShowShareModal(true)}
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
                onClick={() => setShowEmbedModal(true)}
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
        {showEmbedModal && (
          <EmbedModal
            embedUrl={props.embed_url}
            onClose={() => setShowEmbedModal(false)}
          />
        )}
        {showShareModal && (
          <ShareModal
            images={props.images}
            onClose={() => setShowShareModal(false)}
          />
        )}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={5000}
          message={
            isFavourite
              ? "Added to you Favorites"
              : "Deleted from your Favorites"
          }
          onClose={handleClose}
        />
      </div>
    </>
  );
}
