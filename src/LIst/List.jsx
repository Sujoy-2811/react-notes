import ListItem from "./ListItem";
import styles from "./List.module.css";
const List = ({ data, deleteHandle, modifyHandle, modifyState, ...props }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            val={item}
            deleteHandle={deleteHandle}
            modifyHandle={modifyHandle}
            modifyState={modifyState}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default List;
