import { useRouter } from "next/router";
import { useCheck } from "@/hook/check-context";
import { useSelect } from "@/hook/select-context";
import React, { useState, useEffect, useRef } from "react";
import { strengthen, enchant, refine, repair } from "../json/ro";
import Select from "../select";
import Image from "next/image";
export default function MonsterMobile() {
  const { selects = [], setselects } = useSelect(); // 確保 selects 有默認值
  const { prop } = useCheck();
  // 按鈕點擊處理
  const [active, setActive] = useState("強化");
  const handleActive = (e) => {
    const name = e.target.name;
    setActive(name);
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
  const buttons = [
    { name: "strengthen", short: "強", className: "m-btn1" },
    { name: "enchant", short: "附", className: "m-btn2" },
    { name: "refine", short: "精", className: "m-btn3" },
    { name: "repair", short: "修", className: "m-btn4" },
  ];
  console.log(prop);

  return (
    <>
      <div className="mobile-block-m">
        <div className="black-block m-nav">
          <i className="icon-fight"></i>
        </div>
        {buttons.map(({ name, short }, index) => (
          <div
            key={name}
            className={`black-block m-btn${index} ${
              active === name ? "active" : ""
            }`}
          >
            <button name={name} onClick={handleActive}>
              {short}
            </button>
          </div>
        ))}
        <div className="m-select">
          <Select
            names="material"
            list={getActiveArray()}
            question="材料名稱"
          />
        </div>
        <div className="black-block m-content">
          <Image
            src={`/images/${prop.key}.png`}
            alt="monster"
            width="150"
            height="150"
          />
          <div>{prop.key}</div>
          <div className="prop">
            <div>{prop.value[0]}</div>
            <div>{prop.value[1]}</div>
            <div>{prop.value[2]}</div>
          </div>
          <div className="level">Lv.{prop.value[3]}</div>
          <div className="title-name">材料 :</div>
          {prop.value[4] ? prop.value[4].map((v) => <div>{`${v}`}</div>) : ""}
        </div>
      </div>
    </>
  );
}
