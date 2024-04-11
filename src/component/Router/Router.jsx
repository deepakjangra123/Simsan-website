import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages//Services/Services";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Layout from "../layouts/Layout";
import Products from "../Pages/Products/Products";
import Company from "../Pages/Company/Company";
import PageNotFound from "../PageNotFound";
import Param_slug from "../Param_slug";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:x",
        element: <Param_slug />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "Products",
        element: <Products/>,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
