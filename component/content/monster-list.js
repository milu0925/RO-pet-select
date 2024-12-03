import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelect } from "@/hook/select-context";
import MCard from "./m-card";
import {
  strengthen,
  enchant,
  refine,
  repair,
  protect,
  other,
} from "../json/ro";

import Slider from "react-slick";
import MonsterMobile from "../mobile/monster-mobile";

export default function ContentMonsterList() {
  const [active, setActive] = useState("strengthen");
  const { selects = [], setselects } = useSelect(); // 確保 selects 有默認值

  // 按鈕點擊處理
  const handleActive = (e) => {
    const name = e.target.name;
    setActive(name);
  };

  // 計算滑動位置
  const calculatePosition = () => {
    const buttonNames = [
      "strengthen",
      "enchant",
      "refine",
      "repair",
      "protect",
      "other",
    ];
    const index = buttonNames.indexOf(active);
    return index * 100;
  };

  // 獲取當前的數組數據
  const getActiveArray = () => {
    const arrays = { strengthen, enchant, refine, repair, protect, other };
    return arrays[active] || [];
  };

  // 處理選擇
  const handleSelect = (value) => {
    const updatedSelects = [...selects];
    updatedSelects[3] = value;
    setselects(updatedSelects);
  };

  // scroll
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  };

  // 手機板
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
      <div className="top">
        {!isMobile ? (
          <div className="black-block scroll-search">
            {[
              "strengthen",
              "enchant",
              "refine",
              "repair",
              "protect",
              "other",
            ].map((name) => (
              <button
                key={name}
                name={name}
                onClick={handleActive}
                style={active === name ? { color: "white" } : {}}
              >
                {name === "strengthen"
                  ? "強化"
                  : name === "enchant"
                  ? "附魔"
                  : name === "refine"
                  ? "精煉"
                  : name === "repair"
                  ? "修復"
                  : name === "protect"
                  ? "保護"
                  : "其他"}
              </button>
            ))}
            <div
              className="btn-active"
              style={{
                transform: `translateX(${calculatePosition()}%)`,
              }}
            ></div>
          </div>
        ) : (
          <MonsterMobile />
        )}
      </div>

      <div className="middle">
        <Slider {...settings}>
          {getActiveArray().map((item, index) => (
            <div
              key={index}
              className={`monster-card black-block ${
                selects[3] === item ? "active" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              <Image
                alt="material"
                src={`/images/material/${item}.png`}
                width={50}
                height={50}
              />
              <span>{item}</span>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bottom bottom2">
        <div className="monster-block black-block">
          <MCard />
        </div>
      </div>
    </div>
  );
}
