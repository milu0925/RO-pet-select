import React from "react";
import { useCheck } from "@/hook/check-context";

export default function Card(prop) {
  const { aid, handlepush } = useCheck();

  return (
    <label htmlFor={prop.name} className="black-block monster">
      <img alt="image" src={`/images/${prop.name}.png`} />

      <div className="prop">
        <span>暗</span>
        <span>五</span>
        <span>時區</span>
      </div>
      <div className="black-block title">{prop.name}</div>
      <input
        id={prop.name}
        type="checkbox"
        checked={aid.includes(prop.name)}
        onChange={(event) => {
          handlepush(event, prop);
        }}
      />
    </label>
  );
}
