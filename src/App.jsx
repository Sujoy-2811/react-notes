import React, { useState } from "react";

import "./util/style.css";
import InputForm from "./InputForm/InputForm";
import List from "./LIst/List";
import styles from "./App.module.css";
import { noteList } from "./contants";

function App() {
  // states
  const [data, setData] = useState(noteList);
  const [modifyState, setModifyState] = useState(false);
  const [inputFormData, setInputFormData] = useState({
    id: -1,
    title: "",
    note: "",
    col: 1,
  });

  // handles
  const deleteHandle = (val) => {
    setData((predata) => {
      return [...predata.filter((item) => item.id !== val)];
    });
  };

  const modifyHandle = (val) => {
    if (val.state) {
      setInputFormData(data.filter((item) => item.id === val.id)[0]);
    } else {
      setInputFormData({ id: -1, title: "", note: "", col: 4 });
    }
    setModifyState(val.state);
  };

  const addData = (item) => {
    setData((preData) => {
      if (item.id === -1) {
        item.id = item.title + Math.random().toString(16);
        console.log(item);
        if (preData.length === 0) {
          return [item];
        }
        return [item, ...preData];
      }

      let tempData = data;
      tempData.forEach((element) => {
        if (element.id === item.id) {
          element.title = item.title;
          element.note = item.note;
          element.col = item.col;
        }
      });
      return tempData;
    });
  };

  // UI
  return (
    <React.Fragment>
      {/* header */}
      <div className={`${styles.z_above} ${styles.head}`}>
        <h1>React Notes</h1>
      </div>
      <section className={`${styles.z_above} ${styles.form_and_data}`}>
        {/* form */}
        <InputForm
          dataHandler={addData}
          modifyHandle={modifyHandle}
          modifyState={modifyState}
          inputFormData={inputFormData}
          setInputFormData={setInputFormData}
        ></InputForm>
        {/* list */}
        <List
          data={data}
          deleteHandle={deleteHandle}
          modifyHandle={modifyHandle}
        ></List>
      </section>
    </React.Fragment>
  );
}

export default App;
