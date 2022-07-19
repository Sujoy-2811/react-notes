
const InputForm = (prop) => {
 let text='';
    const submitHandler =(event) =>{
        event.preventDefault();
        console.log("Hello");
        if (text.length === 0) {
            return
        }
        prop.dataHandler(text);
        console.log(" Text is");
        console.log(text);
    }
    const dataHandler =(event) =>{
        text =event.target.value;
        console.log(event.target.value);
    }

    return <form  onSubmit={submitHandler}>
        <label >Enter Task</label>
        <br />
        <input type="text" 
        onChange={dataHandler}
        />
        <br />
        <button type="submit">Enter</button>
    </form>
}

export default InputForm ;