 import { useRef } from "react";

import styles from "./InputForm.module.css";
import InputColor from "./InputColor.js"

const InputForm = (prop) => {
  let title = "";
  let note = "";
  let color = 0;
  const titleRef = useRef();
  const noteRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Hello");
    if (title.length > 0 && note.length > 0) {
      prop.dataHandler({ title: title, note: note , col : color });
      console.log(" Text is");
      console.log(title);
      titleRef.current.value = "";
      noteRef.current.value = "";
    }
  };

  const colorHandler = (val)=>{
    switch (val) {
      case 1:
        color = 1;
        break;
      case 2:
        color = 2;
        break;
      case 3:
        color = 3;
        break;
  
      default:
        color = 0;
        break;
    }

    console.log(color);
  }
  const titleHandler = (event) => {
    title = titleRef.current.value;
    console.log(title);
  };
  const noteHandler = (event) => {
    note = noteRef.current.value;
    console.log(note);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Title</label>
      <br />
      <input type="text" ref={titleRef} onChange={titleHandler} />
      <br />
      <br />
      <label>Note</label>
      <br />
      <input type="text" ref={noteRef} onChange={noteHandler} />
      <br />
      <br />
      <label>Select Color</label>
      <br />
      <InputColor colHandler = {colorHandler} />
      <br />
      <br />
      <button type="submit">Enter</button>
    </form>
  );
};

export default InputForm ;