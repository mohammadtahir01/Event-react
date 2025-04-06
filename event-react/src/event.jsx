
let count=0;
function dosomething(size){
    if (size >= 10) { // Check if the input number is exactly 10
        console.log("button was clicked");
    } else if (count < 5) { // Check if count is less than 5
        console.log("button was clicked");
        count++;
    } else {
        console.log("button was clicked more than 5 times");
    }
    
}

export default function Button() {
    return (
        <div>
            <button onClick={() => dosomething(9)}>Clicked me</button>
        </div>
    );
}
