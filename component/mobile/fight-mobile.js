import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { skill2, skill3 } from "../json/ro";
import { useCheck } from "@/hook/check-context";
import { FaList } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Select from "../select";
import { ethnicity, props, shape } from "../json/ro";
import { FaDeleteLeft } from "react-icons/fa6";
export default function FightMobile() {
  const router = useRouter();
  // 技能顯示
  const { empty } = useCheck();
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

  const [openQuestion, setOpenQuestion] = useState(false);
  const handleChangeRouter = () => {
    router.pathname === "/fight"
      ? router.push("/monster")
      : router.push("/fight");
  };
  return (
    <>
      <div className="mobile-block">
        <div className="black-block m-nav" onClick={handleChangeRouter}>
          {router.pathname === "/fight" ? (
            <i className="icon-fight"></i>
          ) : (
            <FiSearch />
          )}
        </div>
        <div className="black-block m-list-btn">
          <FaList
            onClick={() => {
              setOpenQuestion(true);
            }}
          />
        </div>
        <div className="m-select1">
          <Select
            names="props"
            list={props}
            question={router.pathname === "/fight" ? "屬性" : "材料"}
          />
        </div>
        <div className="m-select2">
          <Select
            names="shape"
            list={shape}
            question={router.pathname === "/fight" ? "體型" : "職業"}
          />
        </div>
        <div className="m-select3">
          <Select
            names="ethnicity"
            list={ethnicity}
            question={router.pathname === "/fight" ? "種族" : "等級"}
          />
        </div>
        <div className="black-block m-content">
          {two.map((item, i) => (
            <div key={i}>{skill2[item]}</div>
          ))}
          {three.map((item, i) => (
            <div key={i}>{skill3[item]}</div>
          ))}
        </div>
      </div>
      {openQuestion ? (
        <div className="question-block black-block">
          <button
            onClick={() => {
              setOpenQuestion(false);
            }}
          >
            <FaDeleteLeft />
          </button>
          <div className="skill-list">
            <div>
              <div>上陣兩隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill2).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
            <div>
              <div>上陣三隻同樣屬性寵物</div>
              <hr />
              {Object.entries(skill3).map(([key, values], i) => (
                <div key={i}>
                  {key} : {values}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
