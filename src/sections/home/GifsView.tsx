//import libraries and components
import GifCard from "../../components/general/GifCard";
import { useSearch } from "../../hooks/context/useSerach";
import { useGetAllData } from "../../hooks/query/useGetAllData";
import { GifType } from "../../types/GifTypes";
import Masonry from "react-masonry-css";
import { breakpointColumns } from "../../config/breakpointColumns";
import { useEffect } from "react";
import { useToggleSwitch } from "../../hooks/context/useToggleSwith";
import { OrbitProgress, ThreeDot } from "react-loading-indicators";

//main component
export default function GifsView() {
  //context hooks
  const { searchData } = useSearch();
  const { switchStatus } = useToggleSwitch();
  //queries
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
    isError,
    error,
  } = useGetAllData(switchStatus, searchData);

  // Load more data when user scrolls to the bottom
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200; //threshold
      const isAtBottom =
        window.innerHeight + window.scrollY + threshold >=
        document.body.offsetHeight;
      if (isAtBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Refetch data when switchStatus changes
  useEffect(() => {
    refetch();
  }, [switchStatus, refetch, searchData]);

  return (
    <div className="bg-[#212121] ">
      <div className="container pt-10 mx-auto max-sm:pr-2">
        {data && (
          <Masonry
            className="flex flex-row w-auto"
            columnClassName="pl-2 bg-clip-padding-box"
            breakpointCols={breakpointColumns}
          >
            {data.pages.map((page) =>
              page.map((gif: GifType) => (
                <GifCard isFavoritePage={false} {...gif} key={gif.id} />
              ))
            )}
          </Masonry>
        )}
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

        {isFetchingNextPage && (
          <div className="fixed transform -translate-x-1/2 -translate-y-1/2 bottom-10 left-1/2">
            <OrbitProgress
              color="#EA4335"
              size="large"
              text="loading"
              textColor=""
            />
          </div>
        )}
      </div>
      {isError && <p>{error.message} </p>}
    </div>
  );
}
