import Head from "next/head";
import Image from "next/image";
import { getdata } from "@/actions/beastmaster";
import { useEffect, useState } from "react";
import Navbar from "@/component/navbar";
import MaterialLayout from "@/component/material-layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Material() {
    // 選擇select
    const [select,setSelect] = useState({select1:"strengthen",select2:""});
    const handleClick = (event) => {
      const name = event.currentTarget.dataset.name;
      const item = event.currentTarget.dataset.item;
      if(name) setSelect(prev=>({...prev,select1:name}))
      if(item) setSelect(prev=>({...prev,select2:item}))
    };

      // 資料
      const [data,setData] = useState({originaldata:[],monsterdata:[]})

        useEffect(()=>{
          getdata().then((res)=>{
          setData(prev=>({...prev,originaldata:res,monsterdata:res.monster}))
        });
        },[])

        const [click,setClick]=useState();
        
          // scroll
  const settings = {
    dots: false,
    infinite: true,
    speed: 300, // 減少速度
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>RO重生 - 材料搜尋</title>
      </Head>
      <MaterialLayout>
        <div data-name="strengthen" onClick={handleClick} className={`pointer py-2 px-5 ${select.select1 === 'strengthen' && 'frame active'}`}>強化</div>
        <div data-name="enchant" onClick={handleClick} className={`pointer py-2 px-5 ${select.select1 === 'enchant' && 'frame active'}`}>附魔</div>
        <div data-name="refine" onClick={handleClick} className={`pointer py-2 px-5 ${select.select1 === 'refine' && 'frame active'}`}>精煉</div>
        <div data-name="repair" onClick={handleClick} className={`pointer py-2 px-5 ${select.select1 === 'repair' && 'frame active'}`}>修復</div>
        <div data-name="other" onClick={handleClick} className={`pointer py-2 px-5 ${select.select1 === 'other' && 'frame active'}`}>寵物</div>
        <Slider {...settings}>
            {data.originaldata[select.select1]?.map((v,index)=>(
              <div key={index} className={`material-card black-block m-2 text-center ${select.select2 === v && 'active'}`} data-item={v} onClick={handleClick}>
              <div className="material-card-img"><Image
                  alt="material"
                  src={`/images/material/${v}.png`}
                  width={50}
                  height={50}
                /></div>
                <span>{v}</span>
              </div>))}
        </Slider>
          {data.monsterdata.filter((v) => v.item.includes(select.select2)).map((item,index) => (
            <div className={`black-block monster-card ${click?.name === item.name ? 'active':''}`} key={index} data-click={item.name} onClick={()=>setClick(item)}>
              <Image
                  alt="image"
                  src={`/images/${item.name}.png`}
                  width={50}
                  height={50}
                />
              <div className="prop">
                <span>{item.property}</span>
                <span>{item.body}</span>
                <span>{item.ethnicity}</span>
              </div>
              <div className="black-block title">{item.name}</div>
        </div>))}
        {click && <div className="one-monster-data ">
            <div className="img">
              <Image
                src={`/images/${click.name}.png`}
                alt="monster"
                width="150"
                height="150"
              />
            </div>
            <div className="label">
              <div className="attr">{click.property}</div>
              <div className="eth">{click.body}</div>
              <div className="shape">{click.ethnicity}</div>
            </div>
            <div className="label1">
              <div className="level">Lv.{click.level}</div>
              <div className="type">{click.type === "special" ? "稀有" : "一般"}寵物</div>
              <div className="name">{click.name}</div>
            </div>
          </div>}
    </MaterialLayout>
    </>
  );
}
