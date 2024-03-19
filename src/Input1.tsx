import { observer } from "mobx-react";
import { useEffect } from "react"
import { store1 } from "./store";

export const Input1 = observer(() => {

    useEffect(()=>{console.log('render Input1');})
    
    return (
        <div style = {{borderStyle : "solid" }}>
            <h1>Input1: {store1.text1}</h1>
            <input value={store1.text1} onChange={(e)=> store1.setText1(e.target.value)} />
        </div>)  

  })

