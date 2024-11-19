import { useCheck } from "@/hook/check-context";
import React from "react";
import Image from "next/image";
export default function MonsterList() {
  const { prop } = useCheck();

  return (
    <>
      <div className="one-monster-data">
        <div className="img">
          <Image
            src={`/images/${prop.key}.png`}
            alt="monster"
            width="150"
            height="150"
          />
        </div>
        <div className="label">
          <div className="attr">
            {prop.value[0]}
            {prop.value[0] && !prop?.value[0]?.includes("屬性") ? "屬性" : ""}
          </div>
          <div className="eth">{prop.value[2]}</div>
          <div className="shape">{prop.value[1]}</div>
        </div>
        <div className="label1">
          <div className="level">Lv.{prop.value[3]}</div>
          <div className="name">{prop.key}</div>
        </div>
      </div>
      <div className="mater">
        材料：{prop.value[4] ? prop.value[4].map((v) => `${v} `) : ""}
      </div>
    </>
  );
}
