import React from "react";
import styles from "./InputColor.module.css";

const InputColor = (prop) => {
  let colHandler = prop.colHandler;
  return (
    <React.Fragment>
      <div
        id={styles.orange}
        onClick={() => {
          colHandler(0);
        }}
      ></div>
      <div
        id={styles.red}
        onClick={() => {
          colHandler(1);
        }}
      ></div>
      <div
        id={styles.green}
        onClick={() => {
          colHandler(2);
        }}
      ></div>
      <div
        id={styles.blue}
        onClick={() => {
          colHandler(3);
        }}
      ></div>
    </React.Fragment>
  );
};

export default InputColor;
