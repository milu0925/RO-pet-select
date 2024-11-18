import React from "react";
import { useCheck } from "@/hook/check-context";
import { useSelect } from "@/hook/select-context";

export default function MCard() {
  const { monster, handlepush } = useCheck();
  const { currentM } = useSelect();

  return (
    <div className="flex">
      <div className="monster-active-box">
        <div className="black-block">
          {monster ? <img src={`/images/${monster}.png`} /> : ""}
        </div>
      </div>
      {currentM &&
        Object.entries(currentM).map(([key, values], index) => (
          <label
            key={key}
            htmlFor={key}
            className={`black-block monster ${key == monster ? "active" : ""}`}
          >
            <div className="image-container">
              <img alt="image" src={`/images/${key}.png`} />
            </div>
            <div className="black-block title">{key}</div>
            <input
              name="monster"
              id={key}
              type="radio"
              checked={key == monster}
              onChange={(event) => {
                handlepush(event, key, values);
              }}
            />
          </label>
        ))}
    </div>
  );
}
