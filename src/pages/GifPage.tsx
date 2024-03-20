import GifViewBig from "../components/general/GifViewBig";
import { useParams } from "react-router-dom";
import { useGetDataById } from "./../hooks/query/useGetDataById";
import { GifType } from "../types/GifTypes";
import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import Masonry from "react-masonry-css";
import { useGetAllData } from "../hooks/query/useGetAllData";
import GifCard from "../components/general/GifCard";
import { breakpointColumns } from "../config/breakpointColumns";
import { useEffect } from "react";

//main component
export default function GifPage() {
  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //get gif is
  const { id } = useParams();
  //queries
  const { data: gifData } = useGetDataById(id);
  const { data: relatedData } = useGetAllData("gifs", gifData && gifData.title);
  console.log(relatedData);

  return (
    <>
      <NavBar />
      <div className="mt-10 ">
        <div className=" bg-slate-500 h-[10rem] "></div>
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
      <Footer />
    </>
  );
}
