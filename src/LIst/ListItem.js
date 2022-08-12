import styles from "./ListItem.module.css";

const ListItem = (props) => {
  let color = styles.orange;

  switch (props.val.col) {
    case 1:
      color = styles.red;
      break;
    case 2:
      color = styles.green;
      break;
    case 3:
      color = styles.blue;
      break;
    default:
      color = styles.orange;
  }

  let title = props.val.title;
  let note = props.val.note;
  if (note.length > 108) {
    note = note.substring(1, 108) + "...";
  }
  if (title.length > 10) {
    title = title.substring(1, 11) + "...";
  }

  return (
    <div className={`${styles.card}  ${color}`}>
      <div className={styles.title_and_del_button}>
        <h2 className={styles.title_heading}>{title}</h2>
        <button
          className={styles.modify_button}
          onClick={() => {
            props.modifyHandle({ state: true , id : props.val.id});
          }}
        >
          <b>✏️</b>
        </button>
        <button
          className={styles.delete_button}
          onClick={() => {
            props.deleteHandle(props.val);
          }}
        >
          <b>X</b>
        </button>
      </div>
      <hr />
      <span className={styles.note_body}>{note}</span>
    </div>
  );
};

export default ListItem;
