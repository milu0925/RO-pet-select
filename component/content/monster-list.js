import React, { useState, useRef } from "react";
import { useSelect } from "@/hook/select-context";
import MCard from "./m-card";
import { strengthen, enchant, refine, repair } from "../json/ro";
export default function ContentMonsterList() {
  const [active, setActive] = useState("strengthen");
  const handleactive = (e) => {
    const name = e.target.name;
    setActive(name);
  };
  // 選擇移動的距離
  const calculatePosition = () => {
    const buttonNames = ["strengthen", "enchant", "refine", "repair"];
    const index = buttonNames.indexOf(active);
    return index * 100;
  };
  // 打印的項目
  const getActiveArray = () => {
    const arrays = { strengthen, enchant, refine, repair };

    return arrays[active] || [];
  };
  // 選擇完素材
  const { selects, setselects } = useSelect();
  const handleSelect = (value) => {
    const updatedSelects = [...selects];
    updatedSelects[3] = value;
    setselects(updatedSelects);
  };

  return (
    <div className="content">
      <div className="top">
        <div className="black-block scroll-search">
          <button
            name="strengthen"
            onClick={handleactive}
            style={active === "strengthen" ? { color: "white" } : {}}
          >
            強化
          </button>
          <button
            name="enchant"
            onClick={handleactive}
            style={active === "enchant" ? { color: "white" } : {}}
          >
            附魔
          </button>
          <button
            name="refine"
            onClick={handleactive}
            style={active === "refine" ? { color: "white" } : {}}
          >
            精煉
          </button>
          <button
            name="repair"
            onClick={handleactive}
            style={active === "repair" ? { color: "white" } : {}}
          >
            修復
          </button>
          <div
            className="btn-active"
            style={{
              transform: `translateX(${calculatePosition()}%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="middle">
        {getActiveArray().map((item, index) => (
          <div
            key={index}
            className={`black-block ${selects[3] === item ? "active" : ""}`}
            onClick={() => handleSelect(item)}
          >
            <img alt="material" src={`/images/${item}.png`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="bottom">
        <div className="monster-block black-block">
          <MCard />
        </div>
      </div>
    </div>
  );
}
