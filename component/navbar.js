import React from 'react'
import Link from 'next/link'
import style from './navbar.module.scss'
import { useRouter } from 'next/router';
export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname,'d');
  
  return (
    <div className='navbar-layout ms-auto'>
      <div className={`${style.button} ${pathname == "/beastmaster" ? style.active : ''}`}>
        <Link href="/beastmaster">獸王爭霸</Link>
      </div>
      <div className={`${style.button} ${pathname == "/material" ? style.active : ''}`}>
        <Link href="/material">搜尋材料</Link>
      </div>
</div>
  )
}
