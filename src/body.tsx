import { ReactNode, useEffect } from "react";

interface propsBody {
    children:ReactNode
}


export default function Body(props:propsBody){
    useEffect(()=>{console.log('render Body');})
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Body</h1>
            {props.children}
        </div>)  
  }
