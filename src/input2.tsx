import { ChangeEventHandler, useEffect, useState } from "react"
import { store1 } from "./store";

export default function Input2(){
    const [ input1Text, setInput1Text ] = useState('')
    useEffect(()=>{console.log('render Input2');})
    const handleInput2 : ChangeEventHandler<HTMLInputElement> = (e)=>{
        setInput1Text(e.target.value)
        store1.setText1(e.target.value)
    }

    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Input2: {input1Text}</h1>
            <input value={input1Text} onChange={handleInput2} />
        </div>)  
  }
