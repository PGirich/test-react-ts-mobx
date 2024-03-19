import { useEffect, useState } from "react"

export default function Input1(){
    const [ input1Text, setInput1Text ] = useState('')
    useEffect(()=>{console.log('render Input1');})
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Input1: {input1Text}</h1>
            <input value={input1Text} onChange={(e)=>setInput1Text(e.target.value)} />
        </div>)  
  }
