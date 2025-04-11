import { useState } from "react"


export default function Lodo(){
    let [Move,setMove] = useState({Blue:0,Yellow:0 , Red:0,Green:0});

    let click1 =()=>{
        // setMove.Blue += 1;
        // console.log(Move.Blue);
        setMove((move)=>{
            return {...move, Blue: move.Blue + 1}  //we can use this also to update the state 
        });
        
    }
    let click2 =()=>{
        console.log(Move.Yellow);
        setMove({ ...Move,Yellow: Move.Yellow + 1 });
        
    }
    let click3 =()=>{
        console.log(Move.Red);
        setMove({ ...Move,Red: Move.Red + 1 });
        
    }

    let click4 =()=>{
        console.log(Move.Green);
        setMove({ ...Move,Green: Move.Green + 1 });
        
    }
    return(
        <>
        <h1>Lodo Board</h1>
        <p>Blue={Move.Blue}</p>
        <button onClick={click1} style={{backgroundColor:"blue", color:"white"}}>+1</button>

        <p>Yellow={Move.Yellow}</p>
        <button onClick={click2} style={{backgroundColor:"yellow", color:"black"}}>+1</button>

        <p>Red={Move.Red}</p>
        <button onClick={click3} style={{backgroundColor:"red", color:"white"}}>+1</button>

        <p>Green={Move.Green}</p>
        <button onClick={click4} style={{backgroundColor:"green", color:"white"}}>+1</button>
        </>
    )
}