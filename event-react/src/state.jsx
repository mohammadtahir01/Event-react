
export default function State(){
 
    let count=0;
    function handl(){
        count += 1;
        console.log(count);
    }
    return(
        <div>
            <p>count=0</p>
            <button onClick={handl}>click me</button>
        </div>
    )
    
}