//import libaries
import { GifType } from "../../types/GifTypes";
import { useSpring, animated } from "@react-spring/web";
import { heartAnimationConfig } from "../../config/animationsConfigs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { IoShareOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
//main component
export default function GifViewBig(props: GifType) {
  // State to manage the hover effect
  const [isHovered, setIsHovered] = useState(false);
  //heart animation config
  const heartAnimation = useSpring(heartAnimationConfig);
  return (
    <>
      <div className="container w-full p-2 mx-auto text-white ">
        <div className="flex flex-row">
          <div className="flex flex-col pt-8 pr-8 w-[20rem]  ">
            <div className="flex flex-row gap-2 ">
              <img className=" w-[4rem] " src={props.user.avatar_url} alt="" />
              <div className=" w-fit">
                <p> {props.user.username} </p>
                <p> {props.user.display_name} </p>
              </div>
            </div>
            <div>
              <p> {props.user.description} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full ">
            <p> {props.title} </p>
            <img src={props.images.original.url} alt="" />
          </div>
          <div className=" w-[10rem] ">
            <div className="flex flex-col gap-3 pt-8 pl-8 text-2xl ">
              <button
                className={`flex flex-row items-center gap-2 ${
                  isHovered ? "scale-110" : ""
                } `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <animated.div style={heartAnimation}>
                    <FaHeart className="text-red-600" />
                  </animated.div>
                ) : (
                  <FaRegHeart />
                )}
                <span className="pb-1 text-base font-semibold ">Favorite</span>
              </button>
              <button className="flex flex-row items-center gap-2 hover:scale-110">
                <IoShareOutline />
                <span className="text-base font-semibold ">Share</span>
              </button>
              <button className="flex flex-row items-center gap-2 hover:scale-110">
                <FaCode />
                <span className="pb-1 text-base font-semibold ">Embed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
