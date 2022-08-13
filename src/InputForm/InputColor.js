import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./InputColor.module.css";

const InputColor = (props) => {

  let color = props.color

  console.log("input color 7 : " + color);
  
  const [selectedColorSTate , setSelectedColorSTate] = useState(color);
  
  useEffect(() => {
    
    setSelectedColorSTate(color);
    console.log("useeffect");
    
  }, [color, selectedColorSTate])
  

  
  
  console.log("input color 10 color state : " + selectedColorSTate);
  let colHandler = props.colHandler;
  console.log(selectedColorSTate);
  console.log(selectedColorSTate === 0);
  return (
    <React.Fragment>
      <div
      id={selectedColorSTate === 4 ? styles.selectedcolor : '' }
      className={styles.orange}
      onClick={() => {
        colHandler(4);
        setSelectedColorSTate(4);
        color = 4;
      }}
      ></div>
      <div
      id={selectedColorSTate === 1  ? styles.selectedcolor : '' }
      className={styles.red}
      onClick={() => {
        colHandler(1);
        // setSelectedColorSTate(1);
        color = 1;
      }}
      ></div>
      <div
        id={selectedColorSTate === 2  ? styles.selectedcolor : ''  }
        className={styles.green}
        onClick={() => {
          colHandler(2);
          setSelectedColorSTate(2);
          color = 2;
        }}
        ></div>
      <div
        id={selectedColorSTate === 3  ? styles.selectedcolor : ''  }
        className={styles.blue}
        onClick={() => {
          colHandler(3);
          setSelectedColorSTate(3);
          color = 3;
        }}
        ></div>
    </React.Fragment>
  );
};

export default InputColor;
