
import React from "react"
import "./InputColor.css"
const InputColor = (prop) =>{
    let colHandler = prop.colHandler;
    return <React.Fragment>
    <div id="orange" onClick={()=>{colHandler(0)}}></div>
    <div id="red" onClick={()=>{colHandler(1)}}></div>
    <div id="green" onClick={()=>{colHandler(2)}}></div>
    <div id="blue" onClick={()=>{colHandler(3)}}></div>
    </React.Fragment>
}
export default InputColor