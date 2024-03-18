//import libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

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
  return <RouterProvider router={router} />;
}

export default App;
