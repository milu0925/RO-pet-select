import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="home">
      <Link href="/monster" className="black-block">
        材料搜尋
      </Link>
      <Link href="/fight" className="black-block">
        獸王搭配
      </Link>
    </div>
  );
}
