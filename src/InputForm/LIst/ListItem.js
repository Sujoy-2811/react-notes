import styles from "./ListItem.module.css";

const ListItem = (prop) => {
  return (
    <div className={styles.card}>
      <div className={styles.title_and_del_button}>
        <h2 className={styles.title_heading}>{prop.val.title}</h2>
        <button
          className={`${styles.delete_button} 
          ${styles.unselectable}`}
          onClick={() => {
            prop.deleteHandle(prop.val);
          }}
        >
          <b>X</b>
        </button>
      </div>
      <hr />
      <span className={styles.note_body}>{prop.val.note}</span>
    </div>
  );
};

export default ListItem;
