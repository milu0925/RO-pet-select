import React from "react";
import { useCheck } from "@/hook/check-context";
import Image from "next/image";
export default function Hff(prop) {
  const { aid, handlepush } = useCheck();

  return (
    <label htmlFor={prop.name} className="center">
      {/* <img alt="image" src={`/images/${prop.name}.png`} /> */}
      <Image src={`/images/w.jpg`} alt="image" width={100} height={100} />
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
