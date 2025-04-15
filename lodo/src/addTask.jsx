import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask(){
let [task, setTask] = useState([{task:"Simple" ,id: uuidv4()}]);
let [taskInput, setTaskInput] = useState("");
 let show =()=>{
  setTask([...task, {task:taskInput, id: uuidv4()}]);
  setTaskInput("");
  // setTaskInput.value="";
 }

 let update=(event)=>{
    setTaskInput(event.target.value);
    // setTask="";
    // setTaskInput.value="";  
 }

 let del =(id)=>{
   // console.log("delete");
   setTask(task.filter((task1)=> task1.id !== id));

   // let copy =task.filter((task1)=> task1.id !== id);
   // setTask(copy);
 }
    return(
        <>
        <input type="text" placeholder="Add Anything else" value={taskInput} onChange={update}/><br/><br/>
        <button onClick={show}>Add Task</button>
        <hr />
        <h4>Task Todo</h4>
        <ul>
           {
            task.map((task1)=>{
              return <li key={task1.id}><span>{task1.task}</span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button onClick={()=> del (task1.id)}>delete</button>
              </li>
              
            })
           }
        </ul>
        </>
    )
}