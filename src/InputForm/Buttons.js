import React from "react";
import styles from "./InputForm.module.css";

function Buttons(props) {
  switch (props.formState) {
    case true:
      return (
        <>
          <button
            className={styles.add_button}
            onClick={() => {
              props.modifyHandle({ state: false });
            }}
            type="submit"
          >
            Edit
          </button>
          <button
            className={styles.cancel_button}
            onClick={() => {
              props.modifyHandle({ state: false });
            }}
          >
            Cancel
          </button>
        </>
      );
    default:
      return (
        <button className={styles.add_button} type="submit">
          Add
        </button>
      );
  }
}

export default Buttons;
