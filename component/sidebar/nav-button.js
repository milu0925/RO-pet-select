import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { useSelect } from "@/hook/select-context";
export default function NavButton() {
  const { activePage, setactivePage } = useSelect();

  const handleRouter = (e) => {
    const text = e.currentTarget.name;
    setactivePage(text);
  };

  return (
    <div className="nav">
      <button
        className={`black-block nav-btn ${
          activePage === "monster" ? "active" : ""
        }`}
        name="monster"
        onClick={handleRouter}
      >
        <IoSearch />
        {/* <i className="icon-monster"></i> */}
      </button>
      <button
        className={`black-block nav-btn ${
          activePage === "fight" ? "active" : ""
        }`}
        name="fight"
        onClick={handleRouter}
      >
        <IoIosListBox />
        {/* <i className="icon-fight"></i> */}
      </button>
    </div>
  );
}
