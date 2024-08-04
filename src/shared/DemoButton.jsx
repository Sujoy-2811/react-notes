import React from "react";
import styles from "./DemoButton.module.css";
import { LOCAL_KEY, noteList } from "../contants";

function DemoButton({ length }) {
  function addDemoNotes() {
    console.log(length);
    if (length !== 0) return;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(noteList));
    window.location.reload();
  }
  return (
    <button className={styles.demo_button} onClick={addDemoNotes}>
      Add Demo Notes <br />
      (if empty){" "}
    </button>
  );
}

export default DemoButton;
