

//adding task only in input 
// and applying uuid4 and 
// element deletion and 
// applying upperCase

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function Addtask6(){
    let [task, settask] = useState([{task:"simple" ,id:uuidv4()}]);
    let [task2,settask2] = useState("")

    let add =()=>{
       settask([...task, {task:task2, id:uuidv4()}]);
       settask2("");
    }
    let Update=(event)=>{
      settask2(event.target.value);
    }
    let del = (id)=>{
        settask(task.filter((item)=> item.id != id));
    }

    let uppar=()=>{
      settask((prevTask)=>
      prevTask.map((item)=>({
        ...item,
        task: item.task.toUpperCase(),
    })))
    }

    return(
        <>
        <h4>AddTask</h4>
        <input type="text" placeholder="AddTask Please?" value={task2} onChange={Update}/><br/><br/>
        <button onClick={add}>Please Click Here?</button>

        <ul>
          {
            task.map((item)=>(
                <li key={item.id}>
                <span>{item.task}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=> del (item.id)}>delete</button>
                </li>
            ))
          }
          <br/>
          <hr />
          <button onClick={uppar}>UpparCase All</button>
        </ul>
        </>
    )
}