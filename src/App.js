import React, { useState } from "react";

import "./App.module.css";
import "./util/style.css";
import InputForm from "./InputForm/InputForm";
import List from "./LIst/List";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([
    { id: 0, title: "hi", note: "This is my note" },
    {
      id: 1,
      title: "hello",
      note: "This is my noteThis is my noteThis is my noteThis is my note",
      col: 1,
    },
    { id: 2, title: "127890fvd1234", note: "This is my note", col: 2 },
    { id: 3, title: "12789vdcxv01234", note: "This is my note", col: 3 },
    { id: 4, title: "1278dv901234", note: "This is my note", col: 2 },
    { id: 5, title: "12789dx01234", note: "This is my note", col: 3 },
    { id: 6, title: "1278d901234", note: "This is my note", col: 4 },
  ]);
  const [inputFormData, setInputFormData] = useState({
    id: -1,
    title: "",
    note: "",
    col: 4,
  });
  const [modifyState, setModifyState] = useState(false);

  const deleteHandle = (val) => {
    setData((predata) => {
      return predata.filter((item) => item !== val);
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

      let tempData = data
      tempData.forEach(element => {
        if (element.id === item.id) {
          element.title = item.title;
          element.note = item.note;
          element.col = item.col;
        }
      });
      return tempData;


      
    });
  };
  return (
    <React.Fragment>
      <header>
        <h1>React Notes</h1>
      </header>
      <section className={styles.form_and_data}>
        <InputForm
          dataHandler={addData}
          modifyHandle={modifyHandle}
          modifyState={modifyState}
          inputFormData={inputFormData}
        ></InputForm>
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
