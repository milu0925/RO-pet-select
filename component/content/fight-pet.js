import React, { useEffect, useState } from "react";
import Select from "../select";
import Card from "./card";
import { ethnicity, props, shape } from "../json/ro";
import Mobile from "../mobile";
export default function FightPet() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="content">
      {!isMobile ? (
        <div className="top">
          <Select names="props" list={props} />
          <Select names="shape" list={shape} />
          <Select names="ethnicity" list={ethnicity} />
          <button className="question">
            <i className="icon-question"></i>
          </button>
        </div>
      ) : (
        <div className="top">
          <Mobile />
        </div>
      )}
      <div className="bottom">
        <Card />
      </div>
    </div>
  );
}
