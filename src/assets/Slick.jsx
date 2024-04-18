import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/icons/mena.svg'
import imgage2 from '../assets/icons/meta.svg'
import image3 from '../assets/icons/googleprt.svg'
import image4 from '../assets/icons/hubspot.svg'
import image5 from './icons/semrush.svg'
function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="image-1 mx-3 ">
        <img src={image1} alt="" style={{ width: 'auto' }} />
      </div>
      <div className="image-1 mx-2">
        <img src={imgage2} alt="" style={{ width: 'auto' }} />
      </div>
      <div className="image-1 mx-2">
        <img src={image3} alt="" style={{ width: 'auto' }} />
      </div>
      <div className="image-1 mx-2">
        <img src={image4} alt="" style={{ width: 'auto' }} />
      </div>
      <div className="image-1 mx-2">
        <img src={image5} alt="" style={{ width: 'auto' }} />
      </div>
    </Slider>
  </div>
  
  );
}

export default Slick;
