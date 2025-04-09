
// export default function State(){
 
//     let count=0;
//     function handl(){
//         count += 1;
//         console.log(count);
//     }
//     return(
//         <div>
//             <p>count=0</p>
//             <button onClick={handl}>click me</button>
//         </div>
//     )
    
// }
import { useState } from "react";
export default function State(){
//   let arr = useState(3);
 
   
// let [stateVariable, setStateVariable] = useState(0);
let [count, setCount] = useState(0); 
console.log(`just cliking `);

let cont =() =>{
    setCount(count + 1);
    console.log(`After clicking : ${count}`);
};
    return(
        <div>
            <p>count={count}</p>
            <button onClick={cont}>Increase</button>
        </div>
    )
    
}