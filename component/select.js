import { useSelect } from "@/hook/select-context";
import React, { useState } from "react";

export default function Select({ names, list, question }) {
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
    } else if (names === "material") {
      updatedSelects[5] = value;
      setselects(updatedSelects);
    } else if (names === "profession") {
      updatedSelects[3] = value;
      setselects(updatedSelects);
    } else if (names === "rank") {
      updatedSelects[4] = value;
      setselects(updatedSelects);
    }
    setselectName(value);
    setIsOpen(false);
  };
  const handleDelete = () => {
    const updatedSelects = [...selects];
    if (names === "props") {
      updatedSelects[0] = "";
      setselects(updatedSelects);
    } else if (names === "shape") {
      updatedSelects[1] = "";
      setselects(updatedSelects);
    } else if (names === "ethnicity") {
      updatedSelects[2] = "";
      setselects(updatedSelects);
    }
    setselectName("請選擇");
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select">
      <div className="black-block option" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectName ? selectName : question}</span>
        <i className="icon-select">
          <i className="path1"></i>
          <i className="path2"></i>
        </i>
      </div>
      <div className={`s-content ${isOpen ? "black-block" : ""}`} name={names}>
        {isOpen ? (
          <>
            <div onClick={handleDelete}>不選擇</div>
            {list.map((v, index) => (
              <div
                key={index}
                onClick={() => {
                  handleSelect(v);
                }}
              >
                {v}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
