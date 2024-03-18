//import libraries and components
import GifCard from "../../components/general/GifCard";
import { useSearch } from "../../hooks/context/useSerach";
import { useGetAllTrendGifs } from "../../hooks/query/useGetAllTrendGifs";
import { GifType } from "../../types/GifTypes";
import Masonry from "react-masonry-css";
import { breakpointColumns } from "../../config/breakpointColumns";
import { useEffect } from "react";

//main component
export default function GifsView() {
  const { searchData } = useSearch();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllTrendGifs();

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

  return (
    <div className="bg-[#212121] ">
      <div className="container pt-10 mx-auto">
        {searchData && <p>{searchData}</p>}
        {data && (
          <Masonry
            className="flex flex-row w-auto"
            columnClassName="pl-5 bg-clip-padding-box"
            breakpointCols={breakpointColumns}
          >
            {data.pages.map((page) =>
              page.map((gif: GifType) => <GifCard {...gif} key={gif.id} />)
            )}
          </Masonry>
        )}
        {isFetchingNextPage && <p>Loading...</p>}
        {!hasNextPage && <p>No more GIFs to load</p>}
      </div>
    </div>
  );
}
