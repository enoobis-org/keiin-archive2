import React from "react";
import { useState } from "react";
import Slider from "./Slider";

const Carousel = () => {
  const [slider, setSlider] = useState([
    {
      id: 0,
      url: "https://wallpapers.com/images/featured/minimalist-7xpryajznty61ra3.jpg",
      title: "wallpeper",
    },
    {
      id: 1,
      url: "https://wallpapers.com/images/hd/lake-and-mountains-nature-bofipjv7vzsti6gm.webp",
      title: "wallpeper",
    },
    {
      id: 2,
      url: "https://wallpapers.com/images/hd/nature-winter-mountains-yoogvnukea7ci87a.webp",
      title: "wallpeper",
    },
    {
      id: 3,
      url: "https://wallpapers.com/images/hd/glamorous-mountain-nature-view-5zvjo2ypc8wic0uj.webp",
      title: "wallpeper",
    },
    {
      id: 4,
      url: "https://wallpapers.com/images/hd/colorful-nature-artwork-ojcluk7izwzzjuqo.webp",
      title: "wallpeper",
    },
  ]);

  return (
    <section className="slider">
      <div className="containerStyles">
        <Slider slides={slider} />
      </div>
    </section>
  );
};

export default Carousel;
