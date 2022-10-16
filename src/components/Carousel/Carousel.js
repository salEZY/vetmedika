import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import baner1 from "../../assets/baner1.jpg";
import baner2 from "../../assets/baner2.jpg";
import baner3 from "../../assets/baner3.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img src={baner1} alt="baner1" />
      </div>
      <div>
        <img src={baner2} alt="baner2" />
      </div>
      <div>
        <img src={baner3} alt="baner3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
