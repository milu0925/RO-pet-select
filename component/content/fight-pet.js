import React, { useEffect, useState } from "react";
import Select from "../select";
import Card from "./card";
import { ethnicity, props, shape } from "../json/ro";
import Mobile from "../mobile";
import { TiDelete } from "react-icons/ti";
import { FaDeleteLeft } from "react-icons/fa6";
import { skill2,skill3 } from "../json/ro";
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

  console.log(skill2);
  

  const [openQuestion, setOpenQuestion] = useState(false);
  return (
    <div className="content">
      {!isMobile ? (
        <div className="top">
          <Select names="props" list={props} />
          <Select names="shape" list={shape} />
          <Select names="ethnicity" list={ethnicity} />
          <button
            className="question"
            onClick={() => {
              setOpenQuestion(true);
            }}
          >
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
        {openQuestion ? (
          <div className="question-block black-block">
            <button
              onClick={() => {
                setOpenQuestion(false);
              }}
            >
              <FaDeleteLeft />
            </button>
            <div>
              {Object.entries(skill2).map(([key,values],i)=>(<div key={i}>{key} : {values}</div>))}
              {/* {Object.entries(skill3).map(([key,values],i)=>(<div key={i}>{key} : {values}</div>))} */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
