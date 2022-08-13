import { useRef , useEffect } from "react";

import styles from "./InputForm.module.css";
import InputColor from "./InputColor";
import InputSpecial from "./Components/InputSpecial";
import Buttons from "./Buttons";

const InputForm = (props) => {
  let id = props.inputFormData.id;
  console.log("id : " + id);
  let title = props.inputFormData.title;
  let note = props.inputFormData.note;
  let color = props.inputFormData.col;
  const titleRef = useRef();
  const noteRef = useRef();

  useEffect(() => {
    titleRef.current.value = props.inputFormData.title;
    noteRef.current.value = props.inputFormData.note;
  }, [props.inputFormData])
  
  
  console.log("input form 15 :");
  console.log(props.inputFormData);
  console.log("color value : " + color);


  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit done");
    
    if (title.length > 0 && note.length > 0) {
      console.log("inner submit form ");
      props.dataHandler({ id : id , title: title, note: note, col: color });
      titleRef.current.value = "";
      noteRef.current.value = "";
    } else if (title === "") {
      titleRef.current.focus();
    } else if (title !== "" && note === "") {
      noteRef.current.focus();
    }
    props.modifyHandle({ state: false });
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
        color = 4;
        break;
    }

  };
  const titleHandler = (event) => {
    title = titleRef.current.value;
  };
  const noteHandler = (event) => {
    note = noteRef.current.value;
  };
  // if (props.inputFormData.id !== -1) {
  //   titleRef.current.value = props.inputFormData.title;
  //   noteRef.current.value = props.inputFormData.note;
  // } 
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
      <InputColor colHandler={colorHandler} color={color} />
      <br className={styles.unselectable} />
      <br className={styles.unselectable} />
      <Buttons
        formState={props.modifyState}
        modifyHandle={props.modifyHandle}
      ></Buttons>
    </form>
  );
};;

export default InputForm;
