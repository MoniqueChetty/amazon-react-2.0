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
          {/* <img src="https://links.papareact.com/gi1" loading="lazy" /> */}
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg"
            loading="lazy"
          />
        </div>
        <div className="c">
          {/* <img src="https://links.papareact.com/6ff" loading="lazy" /> */}
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg"
            loading="lazy"
          />
        </div>
        <div className="c">
          {/* <img src="https://links.papareact.com/7ma" loading="lazy" /> */}
          <img
            loading="lazy"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
// https://www.npmjs.com/package/react-responsive-carousel
