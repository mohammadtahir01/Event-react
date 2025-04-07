
//we can assess the event object in the function that is passed to the event handler
//we can use the event object to get information about the event

// function handler(event){
//     event.preventDefault(); //this will prevent the default behavior of the event
//     //for example, if we are using a form, it will prevent the form from being submitted
//     console.log("Something happened");

// }
// export default function AccessEvent(){
//     return(
//         <form>
//             <input type="text" placeholder="Write something"/>
//             <button onClick={handler}>event</button>
//         </form>
//     )
// }

// this value is printing on browser 

import { useState } from "react";

function handler(event, setMessage) {
    event.preventDefault(); // Prevent the default form submission behavior
    setMessage("Something happened"); // Update the message state
}

export default function AccessEvent() {
    const [message, setMessage] = useState(""); // State to hold the message

    return (
        <form>
            <input type="text" placeholder="Write something" />
            <button onClick={(event) => handler(event, setMessage)}>event</button>
            <p>{message}</p> {/* Display the message */}
        </form>
    );
}