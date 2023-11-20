import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./InputColor.module.css";

const InputColor = (props) => {

  let color = props.color

  console.log("input color 7 : " + color);
  
  const [selectedColorState, setSelectedColorState] = useState(color);

  useEffect(() => {
    setSelectedColorState(color);
    console.log("useeffect");
  }, [color]);

  console.log("input color 10 color state : " + selectedColorState);
  let colHandler = props.colHandler;
  console.log(selectedColorState);
  console.log(selectedColorState === 0);
  return (
    <React.Fragment>
      <div
        id={selectedColorState === 4 ? styles.selectedcolor : ""}
        className={styles.orange}
        onClick={() => {
          colHandler(4);
          setSelectedColorState(4);
          color = 4;
        }}
      ></div>
      <div
        id={selectedColorState === 1 ? styles.selectedcolor : ""}
        className={styles.red}
        onClick={() => {
          colHandler(1);
          setSelectedColorState(1);
          color = 1;
        }}
      ></div>
      <div
        id={selectedColorState === 2 ? styles.selectedcolor : ""}
        className={styles.green}
        onClick={() => {
          colHandler(2);
          setSelectedColorState(2);
          color = 2;
        }}
      ></div>
      <div
        id={selectedColorState === 3 ? styles.selectedcolor : ""}
        className={styles.blue}
        onClick={() => {
          colHandler(3);
          setSelectedColorState(3);
          color = 3;
        }}
      ></div>
    </React.Fragment>
  );
};

export default InputColor;
