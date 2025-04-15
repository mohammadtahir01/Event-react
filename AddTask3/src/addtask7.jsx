import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask3(){
    let [Add, setAdd] = useState([{task:"simple",id:uuidv4()}]);
    let [Add2, setAdd2] = useState("");
    
    let update=(event)=>{
      setAdd2(event.target.value);

    }
    let btn=()=>{
        setAdd([...Add,{ task:Add2, id:uuidv4() }]);
        setAdd2("");
    } 
    let del =(id)=>{
       setAdd(Add.filter((item)=> item.id != id));
    }  
    
    let upper=()=>{
        setAdd((prevTask)=>(
            prevTask.map((item)=>({
                ...item,
                task:item.task.toUpperCase(),
            }))
        ))
    }
    let Case=(id)=>{
        setAdd((prevTask)=>(
            prevTask.map((item)=>{
                if(item.id == id){
                    return  {
                        ...item,
                        task:item.task.toUpperCase(),
                    }
                    
                }else{
                    return item;
                }
              
            }))
        )
    }
    return(
        <>
         <h3>Add To Task</h3>
         <input type="text" placeholder="Add Something" value={Add2} onChange={update}/><br /><br />
         <button onClick={btn}>Click here ?</button>

         <ul>
          {
            Add.map((item)=>(
                <li key={item.id}><span>{item.task}</span>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <button onClick={()=> del (item.id)}>Delete</button>
                <button onClick={()=>Case (item.id)}>UpperCase</button></li>
            ))
          }
          
        </ul>
       <button onClick={upper}>UpperCase</button>
        </>
    )
}