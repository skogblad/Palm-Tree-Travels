import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Error } from "./pages/Error/Error";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { DestinationSearch } from "./pages/DestinationSearch";
import { Destination } from "./pages/Destination/Destination";

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
        element: <DestinationSearch />
      },
      {
        path: "/destination/:id",
        element: <Destination />
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ],
  },
]);