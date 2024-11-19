import React, { useState } from "react";
import Image from "next/image";
import { useSelect } from "@/hook/select-context";
import MCard from "./m-card";
import { strengthen, enchant, refine, repair } from "../json/ro";

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
    const buttonNames = ["strengthen", "enchant", "refine", "repair"];
    const index = buttonNames.indexOf(active);
    return index * 100;
  };

  // 獲取當前的數組數據
  const getActiveArray = () => {
    const arrays = { strengthen, enchant, refine, repair };
    return arrays[active] || [];
  };

  // 處理選擇
  const handleSelect = (value) => {
    const updatedSelects = [...selects];
    updatedSelects[3] = value;
    setselects(updatedSelects);
  };

  return (
    <div className="content">
      {/* 上部按鈕區域 */}
      <div className="top">
        <div className="black-block scroll-search">
          {["strengthen", "enchant", "refine", "repair"].map((name) => (
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
                : "修復"}
            </button>
          ))}
          <div
            className="btn-active"
            style={{
              transform: `translateX(${calculatePosition()}%)`,
            }}
          ></div>
        </div>
      </div>

      {/* 中部列表區域 */}
      <div className="middle">
        {getActiveArray().map((item, index) => (
          <div
            key={index}
            className={`black-block ${selects[3] === item ? "active" : ""}`}
            onClick={() => handleSelect(item)}
          >
            <Image
              alt="material"
              src={`/images/${item}.png`}
              width={50}
              height={50}
              priority
            />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* 底部怪物卡片區域 */}
      <div className="bottom">
        <div className="monster-block black-block">
          <MCard />
        </div>
      </div>
    </div>
  );
}
