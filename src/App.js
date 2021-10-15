import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfoilio from "./components/Portfoilio";
import Testimonal from "./components/Testimonal";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfoilio />
      <Testimonal />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
