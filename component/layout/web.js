import React from "react";
import NavButton from "../sidebar/nav-button";
export default function LayoutMain({ children }) {
  return (
    <div className="layout-block">
      <div className="layout-bg-left">{children[0]}</div>
      <div className="layout-bg-right">
        <NavButton />
        {children[1]}
      </div>
    </div>
  );
}
