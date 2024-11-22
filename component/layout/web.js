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
      <div className="user">
        世界之樹/米路露
        <img src="/images/user/user.svg" />
      </div>
    </div>
  );
}
