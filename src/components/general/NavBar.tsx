//import libaries and components
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { heartAnimationConfig } from "../../config/animationsConfigs";

//Main component
export default function NavBar() {
  //State to manage the hover effect
  const [isHovered, setIsHovered] = useState(false);
  //heart animation config
  const heartAnimation = useSpring(heartAnimationConfig);

  //
  return (
    <>
      <div className="bg-[#212121] px-2 py-6 border-b-[1px] max-sm:px-4 max-sm:py-2 2xl:text-2xl 2xl:py-8 ">
        <div className="container flex flex-row items-center justify-between mx-auto text-white">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-row items-center gap-4 font-semibold">
            <Link className="hover:underline" to="/gifspy/">
              Home
            </Link>

            <Link className="hover:underline" to="/gifspy/about">
              About
            </Link>

            {/* Animated heart icon */}
            <Link
              to="/gifspy/favorites"
              className="relative text-3xl group"
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
