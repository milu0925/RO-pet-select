import { useEffect, useState } from "react";
import { skill2, skill3 } from "../json/ro";
import { useCheck } from "@/hook/check-context";

export default function SkillList() {
  const { aid, empty1, empty2, empty3, empty4 } = useCheck();

  const [two, setTwo] = useState([]); // 兩ㄍ
  const [three, setThree] = useState([]); //三ㄍ

  useEffect(() => {
    const countMap1 = empty1.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
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
    const countMap2 = empty2.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
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
    const countMap3 = empty3.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
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
  useEffect(() => {
    const countMap4 = empty4.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    Object.entries(countMap4).forEach(([key, count]) => {
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
  }, [empty4]);
  return (
    <>
      <div className="pet-select-list black-block">
        <div className="grid">
          {aid.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="grid">
          {empty1.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="grid">
          {empty2.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="grid">
          {empty3.map((v, i) => (
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
