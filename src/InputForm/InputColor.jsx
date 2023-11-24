import { Fragment, useState, useEffect } from "react";
import styles from "./InputColor.module.css";

import { colorList } from "../contants";
import { selectColorStyle } from "./selectColorStyle";

const InputColor = ({ color, colHandler }) => {
  const [selectedColorState, setSelectedColorState] = useState(color);

  useEffect(() => {
    setSelectedColorState(color);
  }, [color]);
  return (
    <Fragment>
      {colorList.map((item) => (
        <div
          // id={selectedColorState === item.id ? styles.selectedcolor : ""}
          key={item.id}
          className={`${selectColorStyle(item.id, styles)} ${
            item.id === selectedColorState && styles.selectedcolor
          }`}
          onClick={() => {
            colHandler(item.id);
            setSelectedColorState(item.id);
            color = item.id;
          }}
        ></div>
      ))}
    </Fragment>
  );
};

export default InputColor;
