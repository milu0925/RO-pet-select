import Head from "next/head";
import Image from "next/image";
import { getdata } from "@/actions/beastmaster";
import { useEffect, useState } from "react";
import Select from "@/component/select";
import BeastmasterLayout from "@/component/beastmaster-layout";
import { MdOutlineCancel } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
export default function Beastmaster() {
  // 選擇select
  const [select,setSelect] = useState({property:"",body:"",ethnicity:""});
  // 選項
  const [option,setOption] = useState({property:[],body:[],ethnicity:[]});
  // 資料
  const [data,setData] = useState({originaldata:[],filterdata:[]})
  // 顯示我選擇
  const [click,setClick] = useState([])
  console.log(click,'dd');
  
  const handleClick = (monster) => {
    setClick(prev => {
      if (prev.some(item => item.name === monster.name)) {
        return prev.filter(item => item.name !== monster.name);
      } else if (prev.length < 5) {
        return [...prev, monster];
      }
      return prev; 
    });
  };
  // 顯示skill
  const [skill,setSkill] = useState({originalskill:[],filterdata:[]})

  useEffect(()=>{
    getdata().then((res)=>{
    setOption({property:res.property,body:res.body,ethnicity:res.ethnicity})
    setData({originaldata:res.monster,filterdata:res.monster})
    setSkill({originalskill:{two:res.skillTwo,three:res.skillThree,special:res.specialskill},filterdata:[]})
  });
  },[])

  useEffect(() => {
    const filteredMonsters = data.originaldata.filter(monster => {
      const matchesProperty = select.property ? monster.property === select.property : true;
      const matchesBody = select.body ? monster.body === select.body : true;
      const matchesEthnicity = select.ethnicity ? monster.ethnicity === select.ethnicity : true;
      return matchesProperty && matchesBody && matchesEthnicity;
    });

    setData(prev => ({ ...prev, filterdata: filteredMonsters }));
  }, [select]);

  useEffect(() => {
    const originalSkills = skill.originalskill;
    const countOccurrences = (arr, key) => {
      const counts = arr.reduce((acc, item) => {
        const value = item[key];
        if (!value) return acc;
    
        acc[value] = (acc[value] || 0) + 1;
    
        // 如果數量超過 3，則固定為 3
        if (acc[value] > 3) acc[value] = 3;
    
        return acc;
      }, {});
    
      // 分為數量為 2 和 3 的屬性
      const array1 = Object.entries(counts).filter(([_, count]) => count === 2).map(([key]) => key);
      const array2 = Object.entries(counts).filter(([_, count]) => count === 3).map(([key]) => key);
    
      return { array1, array2 };
    };
    // 計算屬性的數量
    const a = countOccurrences(click, "property");
      const twoSkill = a.array1.length ? a.array1.map(v => {
        if (v === "不死") {return originalSkills.two?.["不死系"];}
        return originalSkills.two?.[v];
      })
    : [];
    const threeSkill = a.array2.length ? a.array2.map(v => {
      if (v === "不死") {return originalSkills.three?.["不死系"];}
      return originalSkills.three?.[v];
      })
    : [];

    const b= countOccurrences(click, "body");
    const twoSkill1 = b.array1.length ? b.array1.map(v => originalSkills.two?.[v]) : [];
    const threeSkill1 = b.array2.length ? b.array2.map(v => originalSkills.three?.[v]) : [];

    
    const c = countOccurrences(click, "ethnicity");
    const twoSkill2 = c.array1.length ? c.array1.map(v => originalSkills.two?.[v]) : [];
    const threeSkill2 = c.array2.length ? c.array2.map(v => originalSkills.three?.[v]) : [];

    const specialCount = click.filter(v => v.type === "special").length;
    let specialSkills = ""
    if (specialCount > 0){
      specialSkills = originalSkills.special[`skill${specialCount}`];
    }
    

    setSkill(prev => ({
      ...prev,
      filterdata: [
        ...twoSkill, 
        ...twoSkill1, 
        ...twoSkill2, 
        ...threeSkill, 
        ...threeSkill1, 
        ...threeSkill2, 
        specialSkills
      ]
    }));

  }, [click]);
  
  const handleDeleteMonster = (index) => {
    setClick((prevClick) => prevClick.filter((_, i) => i !== index));
  };
  const [openQuestion, setOpenQuestion] = useState(false);

  return (
    <>
      <Head>
        <title>RO重生 - 獸王搜尋</title>
      </Head>
      <BeastmasterLayout>
        <Select option={option.property} text="property" setSelect={setSelect} />
        <Select option={option.body} text="body" setSelect={setSelect} />
        <Select option={option.ethnicity} text="ethnicity" setSelect={setSelect} />
        <div className='d-flex flex-wrap p-1'>{data.filterdata.map((item,index)=>(
          <div className={`black-block monster-card m-3 ${click.some(v => v.name === item.name) ? 'active' : ''}`} key={index} data-click={item.name} onClick={()=>handleClick(item)}>
                             <div className="card-img">
              <img alt="image" src={`/images/${item.name}.png`} />
            </div>
              <div className="prop">
                <span>{item.property}</span>
                <span>{item.body}</span>
                <span>{item.ethnicity}</span>
              </div>
              <div className="black-block title">{item.name}</div>
        </div>))}</div>
        <button className="question" onClick={() => {setOpenQuestion(true) }}>
          <i className="icon-question"></i>
        </button>
        <table className="table"> 
          <thead className="table-primary">
            <tr>
              <th></th>
              <th>名稱</th>
              <th>屬性</th>
              <th>體型</th>
              <th>種族</th>
            </tr>
          </thead>
          <tbody>
          {Array.from({ length: 5 }).map((_, index) => {
            const v = click[index]; 
            return (
              <tr key={index}>
                <td className="delete-td" onClick={()=>handleDeleteMonster(index)}>{v?.name ? <MdOutlineCancel size={24} color="red" /> : "-"}</td>
                <td>{v?.name || "-"}</td>
                <td>{v?.property || "-"}</td>
                <td>{v?.body || "-"}</td>
                <td>{v?.ethnicity || "-"}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <div className="black-block p-4 bg-light">{skill.filterdata.map((v,index)=>(<div key={index} className="text-start">{v}</div>))}</div>
      </BeastmasterLayout>
      {openQuestion ? (
        <div className="question-block black-block">
          <button onClick={() => {setOpenQuestion(false)}}>
            <FaDeleteLeft />
          </button>
          <div className="overflow-auto" style={{ maxHeight: '100%' }}>
          <div className="d-flex justify-content-evenly flex-column flex-md-row">
            <div>
              <div>上陣兩隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill.originalskill.two).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
            <div>
              <div>上陣三隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill.originalskill.three).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
