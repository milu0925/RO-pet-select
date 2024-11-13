import React from "react";
import { useCheck } from "@/hook/check-context";
export default function Hff(prop) {
  const { aid, handlepush } = useCheck();

  return (
    <label htmlFor={prop.name} className="center">
      {/* <img src={`/images/${prop.name}.png`} /> */}
      <img src={`/images/w.jpg`} />
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
