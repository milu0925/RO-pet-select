import React from 'react'
import Navbar from './navbar'
export default function BeastmasterLayout({ children }) {
  return (
    <div className="container">
       <div className="row m-2"><Navbar /></div>
      <div className="row">
        <div className="col-12 col-md-8">
            <div className='d-flex gap-3 flex-column flex-md-row'>
                {children[0]}
                {children[1]}
                {children[2]}
            </div>
            <div>{children[3]}</div>
        </div>
        <div className="col-12 col-md-4 pet-show">
        <div className='block'>{children[4]}</div>
        <div>{children[5]}</div>
        <div>{children[6]}</div>
        </div>
      </div>
    </div>
  )
}
