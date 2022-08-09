import React, { useState } from "react";

import "./App.module.css";
import "./util/style.css";
import InputForm from "./InputForm/InputForm.js";
import List from "./LIst/List";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([
    { title: "hi", note: "This is my note"  },
    { title: "hello", note: "This is my noteThis is my noteThis is my noteThis is my note", col : 1  },
    { title: "127890fvd1234", note: "This is my note", col : 2  },
    { title: "12789vdcxv01234", note: "This is my note", col : 3  },
    { title: "1278dv901234", note: "This is my note", col : 2  },
    { title: "12789dx01234", note: "This is my note", col : 3  },
    { title: "1278d901234", note: "This is my note", col : 0  },
  ]);

  const deleteHandle = (val) => {
    setData((predata) => {
      return predata.filter((item) => item !== val);
    });
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
