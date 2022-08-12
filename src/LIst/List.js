import ListItem from "./ListItem";
import styles from "./List.module.css";
const List = (props) => {
  return (
    <div className={styles.grid}>
      {props.data.map((item) => {
        // return <h1 key={item}>{item}</h1>
        return (
          <ListItem
            key={item.id}
            val={item}
            deleteHandle={props.deleteHandle}
            modifyHandle={props.modifyHandle}
            modifyState={props.modifyState}
          />
        );
      })}
    </div>
  );
};

export default List;
