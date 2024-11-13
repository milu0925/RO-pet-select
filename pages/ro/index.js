import React, { useState } from "react";
import { data } from "./ro";
import Hff from "./button";

export default function RO() {
  return (
    <div className="flex">
      {Object.entries(data).map(([key, values], index) => (
        <Hff key={index} index={index} name={key} value={values} />
      ))}
    </div>
  );
}
