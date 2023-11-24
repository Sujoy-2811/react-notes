import React, { useState, useEffect } from "react";

import "./util/style.css";
import InputForm from "./InputForm/InputForm";
import List from "./LIst/List";
import styles from "./App.module.css";
import { noteList, LOCAL_KEY } from "./contants";

function App() {
  // states
  const [data, setData] = useState([]);
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
      const storeData = [...predata.filter((item) => item.id !== val)];
      localStorage.setItem(LOCAL_KEY, JSON.stringify(storeData));
      return storeData;
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
        console.log("add fun in");
        console.log("data ", preData);
        if (preData.length === 0) {
          console.log("1st item");
          localStorage.setItem(LOCAL_KEY, JSON.stringify([item, ...preData]));
          return [item, ...preData];
        }
        const storeData = [item, ...preData];
        localStorage.setItem(LOCAL_KEY, JSON.stringify(storeData));
        return storeData;
      }

      let tempData = data;
      tempData.forEach((element) => {
        if (element.id === item.id) {
          element.title = item.title;
          element.note = item.note;
          element.col = item.col;
        }
      });
      localStorage.setItem(LOCAL_KEY, JSON.stringify(tempData));
      console.log("🚀 ~ file: App.jsx:61 ~old setData ~ tempData:", tempData);
      return tempData;
    });
  };

  // use effect
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    console.log("🚀 ~ file: App.jsx:67 ~ useEffect ~ storedData:", storedData);
    if (storedData) {
      setData(storedData);
    }
  }, []);

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
