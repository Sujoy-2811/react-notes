 import { useRef } from "react";

import "./InputForm.css"

const InputForm = (prop) => {
 let title='';
 let note='';
 const titleRef =useRef();
 const noteRef =useRef();
 
    const submitHandler =(event) =>{
        event.preventDefault();
        console.log("Hello");
        if (title.length === 0 && note.length === 0) {
            return
        }
        prop.dataHandler({title : title , note : note});
        console.log(" Text is");
        console.log(title);
        titleRef.current.value = '';
        noteRef.current.value = '';
    }
    const titleHandler =(event) =>{
        title =titleRef.current.value;
        console.log(title);
    }
    const noteHandler =(event) =>{
        note =noteRef.current.value;
        console.log(note);
    }

    return <form  onSubmit={submitHandler}>
        <label >Title</label>
        <br />
        <input type="text" ref={titleRef}
        onChange ={ titleHandler}
        />
        <br />
        <br />
        <label >Note</label>
        <br />
        <input type="text" ref={noteRef}
        onChange ={ noteHandler}
        />
        <br />
        <br />
        <button type="submit">Enter</button>
    </form>
}

export default InputForm ;