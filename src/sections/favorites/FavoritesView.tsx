// FavoritesView component
import { useState, useEffect } from "react";
import GifCard from "../../components/general/GifCard";
import { GifType } from "../../types/GifTypes";
import Masonry from "react-masonry-css";
import { breakpointColumns } from "../../config/breakpointColumns";
import { useGetAllFavorites } from "../../hooks/query/useGetAllFavorites";
import { ThreeDot } from "react-loading-indicators";

//main component
export default function FavoritesView() {
  const [favorites, setFavorites] = useState<GifType[]>([]);
  // Fetch favorites initially
  const { data, isLoading, error } = useGetAllFavorites();
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
    <div className="bg-[#212121] ">
      <div className="container mx-auto max-sm:pr-2">
        {favorites.length > 0 && (
          <Masonry
            className="flex flex-row w-auto"
            columnClassName="pl-2 bg-clip-padding-box"
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
      {isLoading && (
        <div className="fixed transform -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2">
          <ThreeDot
            variant="bob"
            color="#EA4335"
            size="large"
            text="Loding"
            textColor=""
          />
        </div>
      )}

      {error && <p>{error?.message}</p>}
    </div>
  );
}
