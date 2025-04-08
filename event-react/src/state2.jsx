

import { useState } from "react"; //when we use useState then we will have to put here for working process 

export default function State2(){
    let [set,setCount] = useState(0);
    // let count1 =0;
    let cont1=()=>{
        setCount (set-1);
    //    count1 -= 1;
    //    console.log(count1);


    }
    return(
        <>
        <p>Count = {set}</p>
        <button onClick={cont1}>Decrease</button>
        </>
    )
} 