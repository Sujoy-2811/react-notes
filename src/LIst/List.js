import ListItem from "./ListItem";
import styles from "./List.module.css";
const List = (prop) => {
  return (
    <div className={styles.grid}>
      {prop.data.map((item) => {
        // return <h1 key={item}>{item}</h1>
        return (
          <ListItem
            key={item.title}
            val={item}
            deleteHandle={prop.deleteHandle}
          />
        );
      })}
    </div>
  );
};

export default List;
