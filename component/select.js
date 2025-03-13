import React from 'react'

export default function Select(prop) {

    const handleChange = (event) => {
        prop.setSelect(prev => ({
            ...prev, 
            [prop.text]: event.target.value  
          }));
      };

  return (
    <select className='black-block select' onChange={handleChange}>
    <option className='option' key={0} value="">請選擇</option>
      {prop.option.map((name,index)=>(<option className='option' key={index + 1} >{name}</option>))}
    </select>
  )
}
