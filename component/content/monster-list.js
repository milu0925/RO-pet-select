import React from "react";
import Select from "../select";
import Card from "./card";
export default function ContentMonsterList() {
  return (
    <div className="content">
      <div className="top">
        <Select />
        <Select />
        <Select />
      </div>
      <div className="bottom">列表</div>
    </div>
  );
}
