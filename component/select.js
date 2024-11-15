import React, { useState } from "react";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const dd = [
    { id: 1, text: "ff" },
    { id: 2, text: "ff" },
    { id: 3, text: "ff" },
    { id: 4, text: "ff" },
  ];
  return (
    <div className="select">
      <div className="black-block option" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected ? selected : "請選擇"}</span>
        <i className="icon-select">
          <i className="path1"></i>
          <i className="path2"></i>
        </i>
      </div>
      <div className={`s-content ${isOpen ? "black-block" : ""}`}>
        {isOpen
          ? dd.map((v) => (
              <div
                onClick={() => {
                  handleSelect(v.text);
                }}
              >
                {v.text}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
