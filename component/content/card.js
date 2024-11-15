import React from "react";
import { useCheck } from "@/hook/check-context";
import { useSelect } from "@/hook/select-context";

export default function Card() {
  const { aid, handlepush } = useCheck();
  const { currentM } = useSelect();

  return (
    <div className="flex">
      {currentM &&
        Object.entries(currentM).map(([key, values], index) => (
          <label
            key={key} // 為每個 label 添加 key
            htmlFor={key}
            className={`black-block monster ${
              aid.includes(key) ? "active" : ""
            }`}
          >
            <div className="image-container">
              <img alt="image" src={`/images/${key}.png`} />
            </div>

            <div className="prop">
              <span>{values[0]}</span>
              <span>{values[1]}</span>
              <span>{values[2]}</span>
            </div>
            <div className="black-block title">{key}</div>
            <input
              id={key}
              type="checkbox"
              checked={aid.includes(key)}
              onChange={(event) => {
                handlepush(event, key, values);
              }}
            />
          </label>
        ))}
    </div>
  );
}
