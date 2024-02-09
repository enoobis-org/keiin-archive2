import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default App;
