import GifViewBig from "../components/general/GifViewBig";
import { useParams } from "react-router-dom";
import { useGetDataById } from "./../hooks/query/useGetDataById";
import { GifType } from "../types/GifTypes";
import NavBar from "../components/general/NavBar";
import Masonry from "react-masonry-css";
import { useGetAllData } from "../hooks/query/useGetAllData";
import GifCard from "../components/general/GifCard";
import { breakpointColumns } from "../config/breakpointColumns";
import { useEffect } from "react";
import { ThreeDot } from "react-loading-indicators";
import FooterComponent from "../components/general/FooterComponent";

//main component
export default function GifPage() {
  //get gif is
  const { id } = useParams();
  //queries
  const {
    data: gifData,
    refetch,
    isLoading: gifIsLoading,
    error: gifError,
  } = useGetDataById(id);
  const {
    data: relatedData,
    isLoading: relatedLoading,
    error: relatedError,
  } = useGetAllData("gifs", gifData && gifData.title);

  //hande change in id
  useEffect(() => {
    refetch();
  }, [id, refetch]);
  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="mt-20 ">
        <div className="container mx-auto ">
          {gifData &&
            gifData.map((gif: GifType) => <GifViewBig {...gif} key={gif.id} />)}
        </div>
        <div className="container mx-auto ">
          <div className="pt-4 pb-2 pl-3 font-semibold text-white ">
            <p>Related Gif and Stickers</p>
          </div>
          {relatedData && (
            <Masonry
              className="flex flex-row w-auto"
              columnClassName="pl-2 bg-clip-padding-box"
              breakpointCols={breakpointColumns}
            >
              {relatedData.pages.map((page) =>
                page.map((gif: GifType) => (
                  <GifCard isFavoritePage={false} {...gif} key={gif.id} />
                ))
              )}
            </Masonry>
          )}
        </div>
      </div>
      {(gifIsLoading || relatedLoading) && (
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

      {(gifError || relatedError) && (
        <p>
          {gifError?.message}
          {relatedError?.message}{" "}
        </p>
      )}
      <FooterComponent />
    </>
  );
}
