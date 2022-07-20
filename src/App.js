import React, { useState } from "react";

import "./App.css";
import InputForm from "./InputForm/InputForm.js";
import List from "./InputForm/LIst/List";

function App() {
  const [data, setData] = useState([]);

  const deleteHandle = (val) =>{
    setData((predata) =>{
      return predata.filter((item)=> item !== val)
    })
    console.log(" button pressed");
  }

  const addData = (item) => {
    setData((preData) => {
      return [item, ...preData];
    });
  };
  return (
    <center>
      <InputForm dataHandler={addData}></InputForm>
      <List data={data}  deleteHandle={deleteHandle}></List>
    </center>
  );
}

export default App;
