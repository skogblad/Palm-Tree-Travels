import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";

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
    ],
  },
], {
  basename: import.meta.env.DEV ? "" : "Palm-Tree-Travels/",
});