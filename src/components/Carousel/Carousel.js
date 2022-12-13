import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import baner1 from "../../assets/baner1.jpg";
import baner2 from "../../assets/baner2.jpg";
import baner3 from "../../assets/baner3.jpg";
import baner4 from "../../assets/baner4.jpg";
import baner5 from "../../assets/baner5.jpg";

const CarouselComponent = () => {
  const imgStyle = {
    width: "500px",
    heigth: "350px",
  };

  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div style={imgStyle}>
        <img src={baner5} alt="baner5" />
      </div>
      <div style={imgStyle}>
        <img src={baner1} alt="baner1" />
      </div>
      <div style={imgStyle}>
        <img src={baner4} alt="baner4" />
      </div>
      <div style={imgStyle}>
        <img src={baner2} alt="baner2" />
      </div>
      <div style={imgStyle}>
        <img src={baner3} alt="baner3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
