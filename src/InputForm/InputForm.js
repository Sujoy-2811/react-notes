import { useRef } from "react";

import styles from "./InputForm.module.css";
import InputColor from "./InputColor";
import InputSpecial from "./Components/InputSpecial";
import Buttons from "./Buttons";

const InputForm = (props) => {
  let title = "";
  let note = "";
  let color = 0;
  const titleRef = useRef();
  const noteRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Hello");

    if (title.length > 0 && note.length > 0) {
      props.dataHandler({ title: title, note: note, col: color });
      console.log(" Text is");
      console.log(title);
      titleRef.current.value = "";
      noteRef.current.value = "";
    } else if (title === "") {
      console.log("ref title");
      // console.log(titleRef.current.focus);
      titleRef.current.focus();
    } else if (title !== "" && note === "") {
      console.log("ref note");
      // console.log(noteRef.current.focus);
      noteRef.current.focus();
    }
  };

  const colorHandler = (val) => {
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
  };
  const titleHandler = (event) => {
    title = titleRef.current.value;
    console.log(title);
  };
  const noteHandler = (event) => {
    note = noteRef.current.value;
    console.log(note);
  };
  return (
    <form
      className={`${styles.form} ${
        props.modifyState ? styles.form_active : ""
      }`}
      onSubmit={submitHandler}
    >
      <label>Title</label>
      <br className={styles.unselectable} />
      <InputSpecial
        inputType="INPUT"
        className={styles.inputs}
        type="text"
        ref={titleRef}
        onChanged123={titleHandler}
      />
      <br className={styles.unselectable} />
      <br className={styles.unselectable} />
      <label>Note</label>
      <br className={styles.unselectable} />
      <InputSpecial
        inputType="TEXTAREA"
        className={`${styles.inputs} ${styles.input_larger}`}
        type="text"
        ref={noteRef}
        onChanged123={noteHandler}
      />
      <br className={styles.unselectable} />
      <br className={styles.unselectable} />
      <label>Select Color</label>
      <br className={styles.unselectable} />
      <InputColor colHandler={colorHandler} />
      <br className={styles.unselectable} />
      <br className={styles.unselectable} />
      <Buttons
        formState={props.modifyState}
        modifyHandle={props.modifyHandle}
      ></Buttons>
    </form>
  );
};

export default InputForm;
