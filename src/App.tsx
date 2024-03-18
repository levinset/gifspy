//import libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { SearchProvider } from "./context/SearchContext";

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
]);

//main app
function App() {
  return (
    <SearchProvider>
      <RouterProvider router={router} />;
    </SearchProvider>
  );
}

export default App;
