import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { DestinationApp } from "./pages/DestinationApp";
import { Favorites } from "./pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search-destination",
        element: <DestinationApp />
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ],
  },
]);