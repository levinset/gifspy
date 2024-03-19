// FavoritesView component
import { useState, useEffect } from "react";
import GifCard from "../../components/general/GifCard";
import { GifType } from "../../types/GifTypes";
import Masonry from "react-masonry-css";
import { breakpointColumns } from "../../config/breakpointColumns";
import { useGetAllFavorites } from "../../hooks/query/useGetAllFavorites";

export default function FavoritesView() {
  const [favorites, setFavorites] = useState<GifType[]>([]);

  // Fetch favorites initially
  const { data } = useGetAllFavorites();

  // Update favorites state when data changes
  useEffect(() => {
    if (data) {
      setFavorites(data);
    }
  }, [data]);

  // Function to handle immediate deletion of a favorite
  const handleDeleteFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };

  return (
    <div className="bg-[#212121] h-[70vh] ">
      <div className="container pt-10 mx-auto">
        {favorites.length > 0 && (
          <Masonry
            className="flex flex-row w-auto"
            columnClassName="pl-5 bg-clip-padding-box"
            breakpointCols={breakpointColumns}
          >
            {favorites.map((gif: GifType) => (
              <GifCard
                isFavoritePage={true}
                {...gif}
                key={gif.id}
                handleDeleteFavorite={handleDeleteFavorite} // Pass the deletion handler
              />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
