//import libraries
import axios from "axios";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

//hook function
const getAllTrendGifs = async (offset: number) => {
  // API URL
  const url = "https://api.giphy.com/v1/gifs/trending";
  // API KEY as parameter
  const APIKEY = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  const params = {
    api_key: APIKEY,
    offset: offset,
  };
  // get data
  const response = await axios.get(url, { params });
  return response.data.data;
};

// export hook
export function useGetAllTrendGifs() {
  return useInfiniteQuery({
    queryKey: ["alltrend"],
    queryFn: ({ pageParam = 0 }) => getAllTrendGifs(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // Calculate the offset for the next page
      return lastPage.length ? allPages.length * 25 : undefined;
    },
    initialPageParam: 0, // Set initial page offset
    placeholderData: keepPreviousData, // Maintain previous data while fetching new pages
  });
}
