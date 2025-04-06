//Non click event (hover event)


function Hover1(){
    console.log("Hover event triggered");
}

export default function Hover(){
    return(
        <div>
            <h1 onMouseOver={Hover1}>Hi</h1>

        </div>
    )
}