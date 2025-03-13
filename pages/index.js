import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
      <div className="d-flex vw-100 vh-100 justify-content-center align-items-center home">
      <div className="button-container">
        <Link className="brutalist-button openai" href="/material">
          <div className="openai-logo">
            <Image className="openai-icon" alt='nm' src="/openi-1.png"  width={100}
  height={100} />
          </div>
          <div className="button-text">
            <span>材料搜尋</span>
          </div>
        </Link>
        <Link className="brutalist-button openai" href="/beastmaster">
          <div className="openai-logo">
          <Image className="openai-icon" alt='nmw' src="/openi-2.png"  width={100}
  height={100} />
          </div>
          <div className="button-text">
            <span>獸王搭配</span>
          </div>
        </Link>
      </div>

      </div>
  );
}
