import React, { useEffect, useState } from "react";
import Select from "../select";
import Card from "./card";
import { ethnicity, props, shape } from "../json/ro";
import FightMobile from "../mobile/fight-mobile";
import { TiDelete } from "react-icons/ti";
import { FaDeleteLeft } from "react-icons/fa6";
import { skill2, skill3 } from "../json/ro";
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

  const [openQuestion, setOpenQuestion] = useState(false);
  return (
    <div className="content">
      {!isMobile ? (
        <div className="top">
          <Select names="props" list={props} question="屬性選擇" />
          <Select names="shape" list={shape} question="體型選擇" />
          <Select names="ethnicity" list={ethnicity} question="種族選擇" />
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
          <FightMobile />
        </div>
      )}
      <div className="bottom">
        <Card />
      </div>
      <div className="mobile-background-line"></div>
      {openQuestion ? (
        <div className="question-block black-block ">
          <button
            onClick={() => {
              setOpenQuestion(false);
            }}
          >
            <FaDeleteLeft />
          </button>
          <div className="skill-list">
            <div>
              <div>上陣兩隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill2).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
            <div>
              <div>上陣三隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill3).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
