import React, { useState } from "react";

import "./App.css";
import "./util/style.css"
import InputForm from "./InputForm/InputForm.js";
import List from "./InputForm/LIst/List";

function App() {
  const [data, setData] = useState([
    { title: "hello", note: "This is my note" },
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
      <InputForm dataHandler={addData}></InputForm>
      <List data={data} deleteHandle={deleteHandle}></List>
    </React.Fragment>
  );
}

export default App;
