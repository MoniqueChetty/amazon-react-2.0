import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="c">
          <img src="https://links.papareact.com/gi1" loading="lazy" />
        </div>
        <div className="c">
          <img src="https://links.papareact.com/6ff" loading="lazy" />
        </div>
        <div className="c">
          <img src="https://links.papareact.com/7ma" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
// https://www.npmjs.com/package/react-responsive-carousel
