import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
export default function Counts() {
  const [counterOn, setcounteron] = useState(false);

  return (
    <div className="counts bg-black p-5">
      <ScrollTrigger
        onEnter={() => setcounteron(true)}
        onExit={() => setcounteron(false)}
      >
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="col-3">
            <h1 className="text-light d-flex flex-column">
              <span>
                <CountUp start={0} end={5000} duration={4} delay={0} />+
              </span>
              happy customer
            </h1>
          </div>
          <div className="col-3">
            <h1 className="text-light d-flex flex-column">
              <span>
                <CountUp start={0} end={2000} duration={4} delay={0} />+
              </span>
              Projects
            </h1>
          </div>
          <div className="col-3">
            <h1 className="text-light d-flex flex-column">
              <span>
                <CountUp start={0} end={2000} duration={4} delay={0} />+
              </span>
              Countries
            </h1>
          </div>
          <div className="col-3">
            <h1 className="text-light d-flex flex-column">
              <span>
                <CountUp start={0} end={2000} duration={4} delay={0} />+
              </span>
              happy customer
            </h1>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
