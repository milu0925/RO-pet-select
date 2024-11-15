import { useSelect } from "@/hook/select-context";
import React, { useState } from "react";

export default function Select({ names, list }) {
  const { selects, setselects } = useSelect();
  const [selectName, setselectName] = useState("");
  const handleSelect = (value) => {
    const updatedSelects = [...selects];
    if (names === "props") {
      updatedSelects[0] = value;
      setselects(updatedSelects);
    } else if (names === "shape") {
      updatedSelects[1] = value;
      setselects(updatedSelects);
    } else if (names === "ethnicity") {
      updatedSelects[2] = value;
      setselects(updatedSelects);
    }
    setselectName(value);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select">
      <div className="black-block option" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectName ? selectName : "請選擇"}</span>
        <i className="icon-select">
          <i className="path1"></i>
          <i className="path2"></i>
        </i>
      </div>
      <div className={`s-content ${isOpen ? "black-block" : ""}`} name={names}>
        {isOpen
          ? list.map((v) => (
              <div
                onClick={() => {
                  handleSelect(v);
                }}
              >
                {v}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
