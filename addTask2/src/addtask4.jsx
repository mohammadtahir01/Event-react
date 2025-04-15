
//adding task only in input and applying uuid4

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function Addtask2(){
    let [task, settask] = useState([{task:"simple" ,id:uuidv4()}]);
    let [task2,settask2] = useState("")

    let add =()=>{
       settask([...task, {task:task2, id:uuidv4()}]);
       settask2("");
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
                <li key={item.id}>{item.task}</li>
            ))
          }
        </ul>
        </>
    )
}