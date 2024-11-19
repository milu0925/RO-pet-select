import { useCheck } from "@/hook/check-context";
import React from "react";
import Image from "next/image";
export default function SidebarMonsterList() {
  const { prop, monster } = useCheck();

  return (
    <>
      {monster ? (
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
                {prop.value?.[0] || ""}
                {!prop.value?.[0]?.includes("屬性") ? "屬性" : ""}
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
      ) : (
        ""
      )}
      <div className="disclaimer">
        本網站由玩家自發設立，旨在提供便捷的遊戲內材料搜尋及寵物搭配參考，並非用於營利目的。所有內容皆由玩家自行翻寫和整理，網站不對資料的準確性、完整性或任何使用上的風險負責。本網站不承擔任何與遊戲內容或服務相關的法律責任。
      </div>
    </>
  );
}
