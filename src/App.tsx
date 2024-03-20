//import libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { SearchProvider } from "./context/SearchContext";
import { ToggleSwitchProvider } from "./context/ToggleSwithContext";
import GifPage from "./pages/GifPage";

// Routes
const router = createBrowserRouter([
  {
    path: "gifspy",
    element: <Home />,
  },
  {
    path: "gifspy/favorites",
    element: <Favorites />,
  },
  {
    path: "gifspy/:id",
    element: <GifPage />,
  },
]);

//main app
function App() {
  return (
    <SearchProvider>
      <ToggleSwitchProvider>
        <RouterProvider router={router} />;
      </ToggleSwitchProvider>
    </SearchProvider>
  );
}

export default App;
