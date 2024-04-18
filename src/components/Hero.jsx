import React from "react";
import image from "../assets/pattern-1.svg";
import image2 from "../assets/pattern3.png";
import Slick from "../assets/Slick";

export default function Hero() {
  return (
    <div className="Hero" >
      <div className="col-12 banner d-flex">
        <div className="col-5 text_area text-center text-light d-flex flex-column justify-content-center align-items-center">
          <div className="heading ">
            <h1 className="m-2 p-2" style={{fontSize:'3rem'}}>
              STOP SEARCHING. YOU’VE FOUND <br />
              <span style={{ color: "#BA00BB"  }}>THE TOP SEO DUBAI AGENCY</span>
            </h1>
          </div>
          <div className="para text-center p-3">
            <p>
              With our SEO services in Dubai, you'll reach br the top of <br />
              Google's rankings & hold the throne for a long, long time.
            </p>
          </div>
          <div className="slick col-5 p-3" style={{ width: "700px" }}>
            <Slick />
            
          </div>
        </div>

        <div className="col-7">
          <img
            className="col-12"
            src={image}
            alt=""
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
