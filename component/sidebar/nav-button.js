import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
export default function NavButton() {
  const [active, setActive] = useState("monster");

  return (
    <div className="nav">
      <button
        className={`black-block nav-btn ${
          active === "monster" ? "active" : ""
        }`}
        name="monster"
        onClick={(e) => {
          setActive(e.currentTarget.name);
        }}
      >
        <IoSearch />
        {/* <i className="icon-monster"></i> */}
      </button>
      <button
        className={`black-block nav-btn ${active === "fight" ? "active" : ""}`}
        name="fight"
        onClick={(e) => {
          setActive(e.currentTarget.name);
        }}
      >
        <IoIosListBox />
        {/* <i className="icon-fight"></i> */}
      </button>
    </div>
  );
}
