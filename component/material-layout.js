import React from 'react'
import Navbar from './navbar'
export default function MaterialLayout({ children }) {
  return (
    <div className="container">
         <div className="row m-2"> <Navbar /></div>
      <div className="row">
        <div className="col-12 col-xl-8">
        <div className="row p-3 black-block mx-1">
          <div className="col-6 col-xl-2 text-nowrap">{children[0]}</div>
          <div className="col-6 col-xl-2 text-nowrap">{children[1]}</div>
          <div className="col-6 col-xl-2 text-nowrap">{children[2]}</div>
          <div className="col-6 col-xl-2 text-nowrap">{children[3]}</div>
          <div className="col-6 col-xl-2 text-nowrap">{children[4]}</div>
          <div className="col-6 col-xl-2 text-nowrap">{children[5]}</div>
        </div>
            <div className='p-3 px-4 rounded'>{children[6]}</div>
            <div className='p-3 black-block monster-scroll'><div className='d-flex flex-wrap gap-3'>{children[7]}</div></div>
        </div>
        <div className="col-12 col-xl-4 d-flex flex-column justify-content-between">
          <div className='block'></div>
          <div className='monster-data'>{children[8]}</div>
          <div className='font-s px-3'>本網站由玩家自發設立，旨在提供便捷的遊戲內材料搜尋及寵物搭配參考，並非用於營利目的。所有內容皆由玩家自行翻寫和整理，網站不對資料的準確性、完整性或任何使用上的風險負責。本網站不承擔任何與遊戲內容或服務相關的法律責任。
        </div>
        </div>
      </div>
    </div>
  )
}
