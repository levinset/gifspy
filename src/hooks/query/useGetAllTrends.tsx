import axios from "axios";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

// Function to fetch trend gifs
const getAllTrends = async (offset: number, showStatus: string) => {
  // API URL
  const url = `https://api.giphy.com/v1/${showStatus}/trending`;
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

// Custom hook for getting all trend gifs
export function useGetAllTrends(switchStatus: string) {
  return useInfiniteQuery({
    queryKey: ["alltrend"],
    queryFn: ({ pageParam }) => getAllTrends(pageParam, switchStatus),
    getNextPageParam: (lastPage, allPages) => {
      // Calculate the offset for the next page
      return lastPage.length ? allPages.length * 25 : undefined;
    },
    initialPageParam: 0, // Set initial page offset
    placeholderData: keepPreviousData, // Maintain previous data while fetching new pages
  });
}
