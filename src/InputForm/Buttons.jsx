import React from "react";
import styles from "./InputForm.module.css";

function Buttons({ formState: isEdit, modifyHandle }) {
  return (
    <>
      <button
        className={styles.add_button}
        // onClick={() => {
        //   props.modifyHandle({ state: false });
        // }}
        type="submit"
      >
        {isEdit ? "Edit" : "Add"}
      </button>
      {isEdit && (
        <button
          className={styles.cancel_button}
          onClick={() => {
            modifyHandle({ state: false });
          }}
        >
          Cancel
        </button>
      )}
    </>
  );
  // default:
  //   return (
  //     <button className={styles.add_button} type="submit">
  //       Add
  //     </button>
  //   );
  // }
}

export default Buttons;
