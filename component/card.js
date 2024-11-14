import React from "react";
import { useCheck } from "@/hook/check-context";

export default function Card(prop) {
  const { aid, handlepush } = useCheck();

  return (
    <label htmlFor={prop.name} className="center">
      <img alt="image" src={`/images/${prop.name}.png`} />
      <div>{prop.name}</div>
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
