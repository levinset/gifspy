//import libraries
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

//main component
export default function NavBar() {
  return (
    <>
      <div className=" bg-[#212121] py-6 border-b-[1px]  ">
        <div className="container flex flex-row items-center justify-between mx-auto text-white">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-row gap-4 font-semibold">
            <Link className="font-bold uppercase " to="/">
              home
            </Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="favorites">favorites</Link>
          </div>
        </div>
      </div>
    </>
  );
}
