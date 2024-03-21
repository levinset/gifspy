//import libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { SearchProvider } from "./context/SearchContext";
import { ToggleSwitchProvider } from "./context/ToggleSwithContext";
import GifPage from "./pages/GifPage";
import About from "./pages/About";

// Routes
const router = createBrowserRouter([
  {
    path: "/gifspy",
    element: <Home />,
  },
  {
    path: "/gifspy/gif/",
    element: <Home />,
  },
  {
    path: "/gifspy/favorites",
    element: <Favorites />,
  },
  {
    path: "/gifspy/gif/:id",
    element: <GifPage />,
  },
  {
    path: "/gifspy/about",
    element: <About />,
  },
]);

//main app
function App() {
  return (
    <SearchProvider>
      <ToggleSwitchProvider>
        <RouterProvider router={router} />
      </ToggleSwitchProvider>
    </SearchProvider>
  );
}

export default App;
