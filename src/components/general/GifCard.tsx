//import libaraies and components
import { GifType } from "../../types/GifTypes";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { handleToggleFavourite } from "../../utils/handleToggleFavourite";

//main component
export default function GifCard(
  props: GifType & {
    isFavoritePage: boolean;
    handleDeleteFavorite: (id: string) => void;
  }
) {
  //use state
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  //handle favorites

  const handleFavorite = () => {
    handleToggleFavourite(props.id);
    setIsFavourite(!isFavourite);
  };

  // handle delete
  const handleDelete = () => {
    props.handleDeleteFavorite(props.id);
    handleToggleFavourite(props.id);
  };

  // Check if the gif ID is in favourites
  const isFavouriteGif = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  ).includes(props.id);

  const { isFavoritePage } = props;

  return (
    <div className="relative overflow-hidden group" key={props.id}>
      <img
        className="w-full my-2 rounded-lg "
        src={props.images.original.url}
        alt={props.title}
      />
      <div className="absolute inset-0 flex-row justify-end hidden my-2 rounded-lg group bg-gradient-to-l from-black to-gray group-hover:flex ">
        <div className="w-[3rem] rounded-r-lg flex flex-col justify-center ">
          <div className="flex flex-col items-center gap-4 text-2xl text-white ">
            <button onClick={isFavoritePage ? handleDelete : handleFavorite}>
              {isFavoritePage ? (
                <span className="text-red-600">
                  <FaTrash />
                </span>
              ) : (
                <>
                  {isFavouriteGif ? (
                    <span className="text-red-600">
                      <FaHeart />
                    </span>
                  ) : (
                    <FaRegHeart />
                  )}
                </>
              )}
            </button>
            <button>
              <FaCode />
            </button>
            <button>
              <FaRegEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
