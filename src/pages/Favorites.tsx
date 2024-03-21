//import libaries and components
import FooterComponent from "../components/general/FooterComponent";
import NavBar from "../components/general/NavBar";
import FavoriteHero from "../sections/favorites/FavoriteHero";
import FavoritesView from "../sections/favorites/FavoritesView";

//main component
export default function Favorites() {
  return (
    <>
      <NavBar />
      <FavoriteHero />
      <FavoritesView />
      <FooterComponent />
    </>
  );
}
