import { ReactNode, useEffect } from "react";

interface propsCont2 {
    children:ReactNode
}


export default function Cont2(props:propsCont2){
    useEffect(()=>{console.log('render Cont2');})
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Cont2</h1>
            {props.children}
        </div>)  
  }
