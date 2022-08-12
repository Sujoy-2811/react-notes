import React from "react";
import { useState } from "react";
import styles from "./InputColor.module.css";

const InputColor = (prop) => {
  const [selectedColorSTate , stateSelectedColorSTate] = useState(prop.color)
  let colHandler = prop.colHandler;
  console.log(selectedColorSTate);
  console.log(selectedColorSTate === 0);
  return (
    <React.Fragment>
      <div
      id={selectedColorSTate === 0 ? styles.selectedcolor : '' }
      className={styles.orange}
      onClick={() => {
        colHandler(0);
        stateSelectedColorSTate(0);
      }}
      ></div>
      <div
      id={selectedColorSTate === 1  ? styles.selectedcolor : '' }
      className={styles.red}
      onClick={() => {
        colHandler(1);
        stateSelectedColorSTate(1);
      }}
      ></div>
      <div
        id={selectedColorSTate === 2  ? styles.selectedcolor : ''  }
        className={styles.green}
        onClick={() => {
          colHandler(2);
          stateSelectedColorSTate(2);
        }}
        ></div>
      <div
        id={selectedColorSTate === 3  ? styles.selectedcolor : ''  }
        className={styles.blue}
        onClick={() => {
          colHandler(3);
          stateSelectedColorSTate(3);
        }}
        ></div>
    </React.Fragment>
  );
};

export default InputColor;
