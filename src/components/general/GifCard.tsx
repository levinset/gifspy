//imported libraries and components
import * as React from "react";
import { ExtendedGifType } from "../../types/GifTypes";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { handleToggleFavourite } from "../../utils/handleToggleFavourite";
import EmbedModal from "./EmbedModal";
import { useTransition, animated } from "@react-spring/web";
import { selectHeartAnimationConfig } from "../../config/animationsConfigs";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "../favorites/DeletConfirmationModal";
import Snackbar from "@mui/material/Snackbar";

//main component
export default function GifCard(props: ExtendedGifType) {
  //use navigation
  const navigate = useNavigate();
  //use state hooks
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [showEmbedModal, setShowEmbedModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeletModal] = useState<boolean>(false);
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
  //handel navigation to gif
  const handleGifNavigation = () => {
    navigate(`/gifspy/gif/${props.id}`);
  };
  //handle Snackbar
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsFavourite(false);
  };
  //
  return (
    <div className="relative overflow-hidden group" key={props.id}>
      {/* Apply random colorful background */}
      <div className="rounded-lg " style={{ backgroundColor: randomColor }}>
        <img
          className="z-50 w-full my-1 rounded-lg"
          src={props.images.original.url}
          alt={props.title}
        />
      </div>
      <div className="absolute inset-0 flex-col justify-end hidden my-1 rounded-lg group bg-gradient-to-t from-black to-gray group-hover:flex">
        <div className="h-[3rem] rounded-r-lg flex flex-col justify-center">
          <div className="flex flex-row justify-center gap-4 py-10 text-2xl text-white">
            <button
              onClick={
                isFavoritePage ? () => setShowDeletModal(true) : handleFavorite
              }
            >
              {isFavoritePage ? (
                <div className=" hover:text-red-600 hover:scale-125">
                  <IoClose />
                </div>
              ) : (
                <>
                  {transitions((style, item) =>
                    item ? (
                      <animated.div style={style}>
                        <FaHeart className="text-red-600 hover:scale-110" />
                      </animated.div>
                    ) : (
                      <animated.div style={style}>
                        <FaRegHeart className="hover:text-red-600 hover:scale-110" />
                      </animated.div>
                    )
                  )}
                </>
              )}
            </button>
            <button className=" hover:scale-125">
              <FaCode onClick={() => setShowEmbedModal(true)} />
            </button>
            <button className=" hover:scale-125">
              <FaRegEye onClick={handleGifNavigation} />
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
      {showDeleteModal && (
        <DeleteConfirmationModal
          handleDelete={handleDelete}
          onClose={() => setShowDeletModal(false)}
        />
      )}
      <Snackbar
        open={isFavourite}
        autoHideDuration={5000}
        message={
          isFavouriteGif
            ? "Added to you Favorites"
            : "Deleted from your Favorites"
        }
        onClose={handleClose}
      />
    </div>
  );
}
