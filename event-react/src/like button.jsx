import { useState } from "react"


export default function LikeBtn(){
    let [like,setLike] = useState(false)
    let [cont,setCount] = useState(0);
    let toggleLike =()=>{
    setLike(!like)
    setCount(cont + 1);
    // console.log("click");
    };
    return(
        <>
        <p>Count = {cont}</p>
        <p onClick={toggleLike}>
            {like ? (
                <i className="fa-solid fa-heart"></i>
            ) : (
                <i className="fa-regular fa-heart"></i>
            )}
        {/* <i className="fa-regular fa-heart"></i> */}
        </p>
        {/* <i class="fa-solid fa-heart"></i> */}
        
        </>
    )
}