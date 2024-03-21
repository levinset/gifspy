import FooterComponent from "../components/general/FooterComponent";
import NavBar from "../components/general/NavBar";
import FavoriteHero from "../sections/favorites/FavoriteHero";
import FavoritesView from "../sections/favorites/FavoritesView";

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
