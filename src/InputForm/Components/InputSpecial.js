import { forwardRef } from "react";
import styles from "../InputForm.module.css";

const InputSpecial = (props, ref) => {
  switch (props.inputType) {
    case "INPUT":
      return (
        <input
          className={styles.inputs}
          type="text"
          ref={ref}
          onChange={props.onChanged123}
        />
      );
    case "TEXTAREA":
      return (
        <textarea
          className={`${styles.inputs} ${styles.input_larger}`}
          type="text"
          ref={ref}
          onChange={props.onChanged123}
        />
      );

    default:
      return (
        <div style={{ backgroundColor: "red" }}>
          Noob Developer, didn't specify inputType
        </div>
      );
  }
};

export default forwardRef(InputSpecial);
