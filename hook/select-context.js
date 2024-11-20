import { useRouter } from "next/router";
import React, { createContext, useState, useContext, useEffect } from "react";
import { data } from "@/component/json/ro";
export const CreateSelect = createContext(null);

export const SelectContext = ({ children }) => {
  // 所有怪物 / 顯示怪物分類
  const [currentM, setCurrentM] = useState();

  // 先從資料取出
  useEffect(() => {
    setCurrentM(data);
  }, []);
  // 選擇器
  const [selects, setselects] = useState(["", "", "", ""]); // select選擇的資料媒合處
  useEffect(() => {
    const filtered = Object.entries(data).reduce((acc, [key, values]) => {
      const isValid = selects.every((select, index) => {
        if (select !== "") {
          if (Array.isArray(values[4]) && values[4].includes(selects[3])) {
            return true;
          }
          return values[index] === select;
        }
        return true;
      });

      if (isValid) {
        acc[key] = values;
      }
      return acc;
    }, {});
    setCurrentM(filtered);
  }, [selects]);
  const handleClearSelects = () => {
    setselects(["", "", "", ""]);
  };

  // 切頁
  const [activePage, setactivePage] = useState("");
  const router = useRouter();
  useEffect(() => {
    setselects(["", "", "", ""]);
    router.push(`/${activePage}`);
  }, [activePage]);

  return (
    <CreateSelect.Provider
      value={{
        currentM,
        setCurrentM,
        activePage,
        setactivePage,
        selects,
        setselects,
        handleClearSelects,
      }}
    >
      {children}
    </CreateSelect.Provider>
  );
};

export const useSelect = () => useContext(CreateSelect);
