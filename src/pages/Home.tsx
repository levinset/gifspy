//impoer libraries
import NavBar from "../components/general/NavBar";
import Hero from "../sections/home/Hero";
import { useSearch } from "../hooks/context/useSerach";

//main component
export default function Home() {
  //search data
  const { searchData } = useSearch();
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        {searchData && <p>Search Data: {searchData}</p>}
      </div>
    </>
  );
}
