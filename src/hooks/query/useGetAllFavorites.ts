import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getAllFavorites = async (gifIds: string[]) => {
  const url = "https://api.giphy.com/v1/gifs/";

  // API KEY as parameter
  const APIKEY = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  const params = {
    api_key: APIKEY,
    ids: gifIds.join(","),
  };

  // get data
  const response = await axios.get(url, { params });
  return response.data.data;
};

export function useGetAllFavorites() {
  const favoriteGifIdsString = localStorage.getItem("favourites");
  const gifIds = favoriteGifIdsString ? JSON.parse(favoriteGifIdsString) : [];

  return useQuery({
    queryKey: ["allfavorites"],
    queryFn: () => getAllFavorites(gifIds),
  });
}
