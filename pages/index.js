import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="home">
        <Link href="/material">
          材料搜尋
        </Link>
        <Link href="/beastmaster">
          獸王搭配
        </Link>
      </div>
    </>
  );
}
