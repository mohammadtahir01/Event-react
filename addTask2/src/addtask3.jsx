
//adding task only in input

import { useState } from "react"


export default function Addtask1(){
    let [task, settask] = useState(["simple task"]);
    let [task2,settask2] = useState("")

    let add =()=>{
       settask([...task, task2]);
    }
    let Update=(event)=>{
      settask2(event.target.value);
    }

    return(
        <>
        <h4>AddTask</h4>
        <input type="text" placeholder="AddTask Please?" value={task2} onChange={Update}/><br/><br/>
        <button onClick={add}>Please Click Here?</button>

        <ul>
          {
            task.map((item)=>(
                <li>{item}</li>
            ))
          }
        </ul>
        </>
    )
}