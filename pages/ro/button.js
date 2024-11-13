import React from "react";
import { useCheck } from "@/hook/check-context";
export default function Hff(prop) {
  const { aid, handlepush } = useCheck();

  return (
    <div className="center">
      <input
        id={prop.name}
        type="checkbox"
        checked={aid.includes(prop.name)}
        onChange={(event) => {
          handlepush(event, prop);
        }}
      />
      <label htmlFor={prop.name}>{prop.index}</label>
    </div>
  );
}
