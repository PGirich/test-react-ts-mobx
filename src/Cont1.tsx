import { ReactNode, useEffect } from "react";

interface propsCont1 {
    children:ReactNode
}


export default function Cont1(props:propsCont1){
    useEffect(()=>{console.log('render Cont1');})
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Cont1</h1>
            {props.children}
        </div>)  
  }
