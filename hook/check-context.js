import { useRouter } from "next/router";
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
  const [prop, setProp] = useState({ key: "", value: [] }); //選擇到的

  const [empty, setempty] = useState({ block1: [], block2: [], block3: [] });

  const [monster, setMonster] = useState();

  const update = (array1, array2, array3, type) => {
    if (type === "remove") {
      setempty((prev) => {
        const newBlock1 = [...empty.block1];
        const newBlock2 = [...empty.block2];
        const newBlock3 = [...empty.block3];

        newBlock1.splice(index, 1);
        newBlock2.splice(index, 1);
        newBlock3.splice(index, 1);

        return {
          ...prev,
          block1: newBlock1,
          block2: newBlock2,
          block3: newBlock3,
        };
      });
    } else if (type === "add") {
      setempty(() => ({
        ...empty,
        block1: [...empty.block1, array1],
        block2: [...empty.block2, array2],
        block3: [...empty.block3, array3],
      }));
    }
  };

  const handlepush = (event, key, value) => {
    const { checked, name } = event.target;

    if (name === "fight") {
      setCheck(checked);
      // 名子為唯一值判定
      if (checked) {
        setaid((prev) => {
          if (prev.length < 5 && !prev.includes(key)) {
            return [...prev, key];
          }
          return prev;
        });
        setProp({ key, value });
      } else {
        setaid((prev) =>
          prev.filter((item, index) => {
            if (item == key) {
              setIndex(index);
            }
            return item !== key;
          })
        );
        setProp({ key, value });
      }
    } else if (name === "monster") {
      setMonster(key);
    }
  };

  // 刪除單一項目
  const handleDeleteMonster = (key) => {
    setaid((prev) =>
      prev.filter((item, index) => {
        if (item == key) {
          setIndex(index);
        }
        return item !== key;
      })
    );
    setProp({
      key,
      value: [empty.block1[index], empty.block2[index], empty.block3[index]],
    });
    setCheck(false);
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
        empty,
        handlepush,
        handleDeleteMonster,
        monster,
      }}
    >
      {children}
    </CreateCheck.Provider>
  );
};

export const useCheck = () => useContext(CreateCheck);
