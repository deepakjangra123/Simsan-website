import * as React from "react";

import {
  createBrowserRouter
} from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages//Services/Services";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Layout from "../layouts/Layout";
import Layout2 from "../layouts/Layout2";
import Products from "../Pages/Products/Products";
import Company from "../Pages/Company/Company";
import PageNotFound from "../PageNotFound";
import Param_slug from "../Param_slug";
import Add_user from "../Pages/Add user/Add_user";
import Login from "../layouts/Login_signup/Login/Login";
import Signup from "../layouts/Login_signup/Signup/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2/>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ]
  },
  {
    path: "/out",
    element: <Layout/>,
    children: [
      {
        path: "home",
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
  {
    path: "/add_user",
    element: <Add_user/>,
  },


]);

export default router;
