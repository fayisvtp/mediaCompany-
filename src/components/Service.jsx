import React from "react";
import icon1 from "../assets/icons/settinngs.png";
import icon2 from "../assets/icons/growth.png";
import icon3 from "../assets/icons/award.png";
import icon4 from "../assets/icons/client.png";
import icon5 from "../assets/icons/review.png";
import icon6 from "../assets/icons/project.svg";

export default function Service() {
  return (
    <div className="servicePage text-light">
      <div
        className="head d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <h1 className="service_heading ">OUR 360 DEGREE SERVICES</h1>
        <p className="ervice_para text-center">
          360-degree SEO services. It’s a pretty bold statement, but one we’re
          confident in making. <br />
          Like a pack of wolves, we attack from every angle, leaving no
          proverbial stone unturned (although wolves can’t overturn stones – no
          opposable thumbs).
        </p>
      </div>
      <div className="col-12 d-flex row services ">
        
        <div className="col-4 service-1   ">
          <div className="icon1 d-flex flex-column align-items-center justify-content-center   ">
            <img src={icon1} alt="" style={{ width: "8em" }} />
            <h4>24*7 happy Services</h4>
            <p>Lorum ipsum dummy texts </p>
          </div>
        </div>


        <div className="col-4 service-2 ">
          <div className="icon2  d-flex flex-column  align-items-center justify-content-center">
            <img src={icon2} alt="" style={{ width: "8em" }} />
            <h4>REVENUE</h4>
            <p>
Generated over AED 100M in sales for our clients</p>
          </div>
        </div>


        <div className="col-4 service-3 ">
          <div className="icon3 d-flex flex-column align-items-center justify-content-center">
            <img src={icon3} alt="" style={{ width: "8em" }} />
            <h4>AWARDS</h4>
            <p>
10 Awards and counting</p>
          </div>
        </div>


        <div className="col-4 service-4 ">
          <div className="icon4 d-flex flex-column align-items-center justify-content-center">
            <img src={icon4} alt="" style={{ width: "8em" }} />
            <h4>CLIENTS</h4>
            <p>400+ Happy clients</p>
          </div>
        </div>


        <div className="col-4 service-5  ">
          <div className="icon15 d-flex flex-column align-items-center justify-content-center">
            <img src={icon5} alt="" style={{ width: "8em" }} />
            <h4>REVIEWS</h4>
            <p>
450+ reviews on Google with a 4.8/5 rating </p>
          </div>
        </div>


        <div className="col-4 service-6 ">
          <div className="icon6 d-flex flex-column align-items-center justify-content-center">
            <img src={icon6} alt="" style={{ width: "8em" }} />
            <h4>Projects</h4>
            <p>Lorum ipsum dummy texts</p>
          </div>
        </div>


      </div>
    </div>
  );
}
