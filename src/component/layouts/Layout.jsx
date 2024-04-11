import React from "react";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer_Bottom from "../Footer_Bottom";
import Footer_Middle from "../Footer_Middle";
function Layout() {
  return <div><Header/>
  <Outlet/>
  <Footer_Middle/>
  <Footer_Bottom/>
  </div>;
}

export default Layout;
