import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getDataById = async (gifId: string | undefined) => {
  const url = `https://api.giphy.com/v1/gifs?ids=${gifId}`;

  // API KEY as parameter
  const APIKEY = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";
  const params = {
    api_key: APIKEY,
  };

  // get data
  const response = await axios.get(url, { params });
  return response.data.data;
};

export function useGetDataById(gifId: string | undefined) {
  return useQuery({
    queryKey: ["databyid"],
    queryFn: () => getDataById(gifId),
  });
}
