import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
export const CreateCheck = createContext(null);

export const CheckContext = ({ children }) => {
  const [aid, setaid] = useState([]); //唯一值名稱
  const [index, setIndex] = useState(0); //要移除的位置

  const [check, setCheck] = useState(false); //是否選擇
  const [prop, setProp] = useState({ value: [] }); //選擇到的

  const [empty1, setempty1] = useState([]);
  const [empty2, setempty2] = useState([]);
  const [empty3, setempty3] = useState([]);

  const update = (array1, array2, array3, type) => {
    if (type === "add") {
      setempty1(() => [...empty1, array1]);
      setempty2(() => [...empty2, array2]);
      setempty3(() => [...empty3, array3]);
    } else {
      setempty1(() => {
        const newd = [...empty1];
        newd.splice(index, 1);
        return newd;
      });
      setempty2(() => {
        const newd = [...empty2];
        newd.splice(index, 1);
        return newd;
      });
      setempty3(() => {
        const newd = [...empty3];
        newd.splice(index, 1);
        return newd;
      });
    }
  };

  const handlepush = (event, prop) => {
    const { checked } = event.target;
    setCheck(checked);
    // 名子為唯一值判定
    if (checked) {
      setaid((prev) => {
        if (prev.length < 5 && !prev.includes(prop.name)) {
          // update(prop.value[0], prop.value[1], prop.value[2], "add");

          return [...prev, prop.name];
        }
        return prev;
      });
      setProp(prop);
    } else {
      // update(prop.value[0], prop.value[1], prop.value[2], "remove");
      setaid((prev) =>
        prev.filter((item, index) => {
          if (item == prop.name) {
            setIndex(index);
          }
          return item !== prop.name;
        })
      );
      setProp(prop);
    }
  };

  useEffect(() => {
    if (check) {
      update(prop.value[0], prop.value[1], prop.value[2], "add");
    } else {
      update(prop.value[0], prop.value[1], prop.value[2], "remove");
    }
  }, [aid]);

  return (
    <CreateCheck.Provider
      value={{
        aid,
        empty1,
        empty2,
        empty3,
        handlepush,
      }}
    >
      {children}
    </CreateCheck.Provider>
  );
};

export const useCheck = () => useContext(CreateCheck);
