import React from "react";
import image from "../assets/icons/about.png";
export default function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="col-12 d-flex col text-light ">
      <div className="col-6 image d-flex justify-content-center align-items-center">
  <img className="aboutusimg" src={image} alt="about" />
</div>

        <div className="col-6 row  texts d-flex flex-column justify-content-center align-items-center ">
          <div className="heading_aboutus">
            <h3>A BIT ABOUT US</h3>

          </div>
          <div className="para text m-2 ">
            <p >
              We’re a team of 50+ experts based in Dubai, offering digital
              marketing solutions to over 400 businesses in the UAE alone. We’re
              the top ranked search engine optimization company Dubai on Google.
              ae and boast an incredible rating of 4.8/5 on Google from over 450
              reviews. But you don’t want to know about us: you want to know
              what we can do for you. Well, quite simply, we’ll boost your
              online presence and increase your bottom line. Want proof? We have
              generated millions in extra revenue for our clients through our
              SEO company services, taking them from the shadows of Google to
              the tops of search results for some of the most challenging search
              terms around.
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
}
