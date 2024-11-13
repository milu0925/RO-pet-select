import React, { useState } from "react";
import { data } from "../../component/ro";
import Hff from "../../component/button";

export default function RO() {
  return (
    <div className="flex">
      {Object.entries(data).map(([key, values], index) => (
        <Hff key={index} index={index} name={key} value={values} />
      ))}
    </div>
  );
}
