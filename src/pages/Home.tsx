//impoer libraries
import NavBar from "../components/general/NavBar";
import Hero from "../sections/home/Hero";
import GifsView from "../sections/home/GifsView";

//main component
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <GifsView />
    </>
  );
}
