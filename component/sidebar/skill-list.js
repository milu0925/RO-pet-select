import { useEffect, useState, useRef } from "react";
import { skill2, skill3 } from "../json/ro";
import { useCheck } from "@/hook/check-context";
import { MdOutlineCancel } from "react-icons/md";
export default function SkillList() {
  const { aid, empty, handleDeleteMonster } = useCheck();

  const [two, setTwo] = useState([]); // 兩ㄍ
  const [three, setThree] = useState([]); //三ㄍ

  useEffect(() => {
    const countMap1 = empty?.block1?.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    const countMap2 = empty?.block2?.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    const countMap3 = empty?.block3?.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    if (empty.block1) {
      Object.entries(countMap1).forEach(([key, count]) => {
        if (count >= 3) {
          setThree((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setThree((prev) => prev.filter((item) => item !== key));
        }

        if (count === 2) {
          setTwo((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setTwo((prev) => prev.filter((item) => item !== key));
        }
      });
    }
    if (empty.block2) {
      Object.entries(countMap2).forEach(([key, count]) => {
        if (count >= 3) {
          setThree((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setThree((prev) => prev.filter((item) => item !== key));
        }

        if (count === 2) {
          setTwo((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setTwo((prev) => prev.filter((item) => item !== key));
        }
      });
    }
    if (empty.block3) {
      Object.entries(countMap3).forEach(([key, count]) => {
        if (count >= 3) {
          setThree((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setThree((prev) => prev.filter((item) => item !== key));
        }

        if (count === 2) {
          setTwo((prev) => {
            if (!prev.includes(key)) {
              return [...prev, key];
            }
            return prev;
          });
        } else {
          setTwo((prev) => prev.filter((item) => item !== key));
        }
      });
    }
  }, [empty]);

  const gridRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gridRefs.current.forEach((grid) => {
      const targetSpan = grid?.querySelectorAll("span")[index];
      if (targetSpan) {
        targetSpan.style.color = "#4459A8";
      }
    });
  };
  const handleMouseOut = (index) => {
    gridRefs.current.forEach((grid) => {
      const targetSpan = grid?.querySelectorAll("span")[index];
      if (targetSpan) {
        targetSpan.style.color = "";
      }
    });
  };

  return (
    <>
      <div className="pet-select-list black-block">
        <div className="grid" ref={(el) => (gridRefs.current[0] = el)}>
          {aid.map((v, i) => (
            <>
              <span key={i}>
                <button
                  className="cancle"
                  onClick={() => handleDeleteMonster(v)}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseOut(i)}
                >
                  <MdOutlineCancel />
                </button>
                {v}
              </span>
            </>
          ))}
        </div>
        <div className="grid" ref={(el) => (gridRefs.current[1] = el)}>
          {empty?.block1?.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="grid" ref={(el) => (gridRefs.current[2] = el)}>
          {empty?.block2?.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="grid" ref={(el) => (gridRefs.current[3] = el)}>
          {empty?.block3?.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>
      <div className="skill black-block">
        {two.map((item, i) => (
          <div key={i}>{skill2[item]}</div>
        ))}
        {three.map((item, i) => (
          <div key={i}>{skill3[item]}</div>
        ))}
      </div>
    </>
  );
}
