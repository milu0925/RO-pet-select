import React from "react";
import Select from "../select";
import Card from "./card";
import { rank, material, profession } from "../json/ro";
export default function ContentMonsterList() {
  return (
    <div className="content">
      <div className="top">
        <Select names="material" list={material} question="依素材" />
        <Select names="profession" list={profession} question="依職業" />
        <Select names="rank" list={rank} question="依等級" />
      </div>
      <div className="bottom">
        <div className="monster-block black-block">
          <MCard />
        </div>
      </div>
    </div>
  );
}
