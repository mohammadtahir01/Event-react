//Non click event (hover event)


function Hover1(){
    console.log("Hover event triggered");
}
function Down(){
    console.log("Mouse down event triggered");
}

export default function Hover(){
    return(
        <div>
            <h1 onMouseOver={Hover1}>Hi</h1>
            <h1 onMouseDown={Down}>Click me!</h1>

        </div>
    )
}