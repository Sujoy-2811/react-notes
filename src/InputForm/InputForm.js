 import { useRef } from "react";

const InputForm = (prop) => {
 let text='';
 const ref =useRef();
 
    const submitHandler =(event) =>{
        event.preventDefault();
        console.log("Hello");
        if (text.length === 0) {
            return
        }
        prop.dataHandler(text);
        console.log(" Text is");
        console.log(text);
        ref.current.value = '';
    }
    const dataHandler =(event) =>{
        text =ref.current.value;
        console.log(text);
    }

    return <form  onSubmit={submitHandler}>
        <label >Enter Task</label>
        <br />
        <br />
        <input type="text" ref={ref}
        onChange ={ dataHandler}
        />
        <br />
        <br />
        <button type="submit">Enter</button>
    </form>
}

export default InputForm ;