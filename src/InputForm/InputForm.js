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
  
  const colorChanger = (colorNumber) => {
    props.setInputFormData((prev) => {
      return { ...prev, col: colorNumber, note: note, title: title };
    });
  };

  useEffect(() => {
    titleRef.current.value = props.inputFormData.title;
    noteRef.current.value = props.inputFormData.note;
  }, [props.inputFormData]);

  console.log("input form 15 :");
  console.log(props.inputFormData);
  console.log("color value : " + color);

  const submitHandler = (event) => {
    const dateOptions = {
      weekday: "short",
      year: "2-digit",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    // console.log(additionDate.toLocaleDateString("en-GB", dateOptions))
    // console.log(additionDate.toLocaleString());
    event.preventDefault();
    console.log("submit done");

    if (title.length > 0 && note.length > 0) {
      console.log("inner submit form ");
      const additionDateAndTime = new Date().toLocaleDateString(
        "en-GB",
        dateOptions
      );
      console.log(additionDateAndTime);
      props.dataHandler({
        id: id,
        title: title,
        note: note,
        col: color,
        time: additionDateAndTime.toString(),
      });
      titleRef.current.value = "";
      noteRef.current.value = "";
      props.modifyHandle({ state: false });
    } else if (title === "") {
      props.setInputFormData((prev) => {
        return { ...prev, col: color, note: note };
      });

      titleRef.current.focus();
    } else if (title !== "" && note === "") {
      noteRef.current.focus();
    }
  };

  const colorHandler = (val) => {
    switch (val) {
      case 1:
        // color = 1;
        colorChanger(1);
        break;
      case 2:
        colorChanger(2);
        // color = 2;
        break;
      case 3:
        colorChanger(3);
        // color = 3;
        break;

      default:
        colorChanger(4);
        // color = 4;
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
};;;

export default InputForm;
