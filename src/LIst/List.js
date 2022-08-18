import ListItem from "./ListItem";
import styles from "./List.module.css";
const List = (props) => {
  console.log(props.data);
  return (
    <div className={styles.grid}>
      {props.data.map((item) => {
        return (
          <ListItem
            key={item.id}
            val={item}
            deleteHandle={props.deleteHandle}
            modifyHandle={props.modifyHandle}
            modifyState={props.modifyState}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default List;
