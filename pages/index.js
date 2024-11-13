import { useEffect, useState } from "react";
import RO from "./ro";
import { skill2, skill3 } from "./ro/ro";
import { useCheck } from "@/hook/check-context";
export default function Home() {
  const { empty1, empty2, empty3 } = useCheck();

  const [two, setTwo] = useState([]); // 兩ㄍ
  const [three, setThree] = useState([]); //三ㄍ

  //計算數量
  const countMap1 = empty1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const countMap2 = empty2.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const countMap3 = empty3.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
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
  }, [empty1]);
  useEffect(() => {
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
  }, [empty2]);
  useEffect(() => {
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
  }, [empty3]);

  return (
    <>
      <RO />
      <div className="box">
        [
        {empty1.map((v) => (
          <span>{`${v}`}</span>
        ))}
        ]
      </div>
      <div className="box">
        [
        {empty2.map((v) => (
          <span>{`${v}`}</span>
        ))}
        ]
      </div>
      <div className="box">
        [
        {empty3.map((v) => (
          <span>{`${v}`}</span>
        ))}
        ]
      </div>
      <div className="sblock">
        {two.map((item) => (
          <div className="skill">{skill2[item]}</div>
        ))}
        {three.map((item) => (
          <div className="skill">{skill3[item]}</div>
        ))}
      </div>
    </>
  );
}
