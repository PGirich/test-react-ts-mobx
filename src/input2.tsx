import { useEffect, useState } from "react"

export default function Input2(){
    const [ input1Text, setInput1Text ] = useState('')
    useEffect(()=>{console.log('render Input2');})
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Input2: {input1Text}</h1>
            <input value={input1Text} onChange={(e)=>setInput1Text(e.target.value)} />
        </div>)  
  }
