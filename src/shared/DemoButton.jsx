import React from "react";
import styles from "./DemoButton.module.css";
import { IoMdAdd } from "react-icons/io";
import { LOCAL_KEY, noteList } from "../contants";

function DemoButton({ length, addNoteHandler }) {
  function addDemoNotes() {
    console.log(length);
    if (length !== 0) return;
    addNoteHandler(noteList);
    // localStorage.setItem(LOCAL_KEY, JSON.stringify(noteList));
    console.log(length + 1);
    // window.location.reload();
    // addDemoNotes({
    //   id: 20,
    //   title: "Performance Review",
    //   note: "Conducted a performance review for the team members. The review included an assessment of individual contributions, achievements, and areas for improvement. Each team member received personalized feedback and set goals for the next review period. The performance review aims to support professional growth and development.",
    //   col: 3,
    //   time: "2024-08-20T10:00:00Z",
    // });
  }
  return (
    <button className={styles.demo_button} onClick={addDemoNotes}>
      <IoMdAdd />
      <div className={styles.container}>
        <span>Demo Notes</span>
        <span>(if list empty)</span>
      </div>
    </button>
  );
}

export default DemoButton;
