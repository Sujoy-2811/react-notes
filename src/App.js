import React, { useState } from "react";

import "./App.module.css";
import "./util/style.css";
import InputForm from "./InputForm/InputForm.js";
import List from "./InputForm/LIst/List";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([
    { title: "12345678901234", note: "This is my note" },
    { title: "hellos", note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate, molestiae rem quod ducimus veritatisff" },
    { title: "hellosl", note: "daLorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate, molestiae rem quod ducimus veritatisff" },
  ]);

  const deleteHandle = (val) => {
    setData((predata) => {
      return predata.filter((item) => item !== val);
    });
    // console.log(" button pressed");
  };

  const addData = (item) => {
    setData((preData) => {
      if (preData.length === 0) {
        return [item];
      }
      return [item, ...preData];
    });
  };
  return (
    <React.Fragment>
      <header>
        <h1>React Notes</h1>
      </header>
      <section className={styles.form_and_data}>
        <InputForm dataHandler={addData}></InputForm>
        <List data={data} deleteHandle={deleteHandle}></List>
      </section>
    </React.Fragment>
  );
}

export default App;
