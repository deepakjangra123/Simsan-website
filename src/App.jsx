import "./App.css";
// import Slider from "./component/layouts/Slider/Slider";
// import Footer from "./component/layouts/Footer/Footer";
// import Header from "./component/layouts/Header/Header";
// import Services from "./component/Services";
// import HeroSection from "./component/HeroSection";
// import Footer_Bottom from "./component/Footer_Bottom";
// import Footer_Middle from "./component/Footer_Middle";
// import Portfolio from "./component/Portfolio";
// import WWE_section from "./component/WWE_section";
// import WCU_section from "./component/WCU_section";
// import Services_box from "./component/Services_box";
import React from "react";
import router from "./component/Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header />
      <HeroSection />
      <Slider />
      <Services />
      <Footer />
      <Services_box />
      <WCU_section />
      <WWE_section />
      <Portfolio />
      <Footer_Middle />
      <Footer_Bottom /> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
