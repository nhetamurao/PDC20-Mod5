import React, {useState} from "react";

function EventonClick (){
    // -------------------- For Target ------------------
    const[inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    };
    //----------------------------------------------------


    // ------------------ For Type ------------------------
    const handleEvent = (event) => {
        event.stopPropagation(); //This will stop the event propagating further.
        console.log(`Event type: ${event.type}`);
        handleClick();
    };
    //-----------------------------------------------------

    // ----------------- For preventdefault ---------------
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submission Prevented");
    };
    //-----------------------------------------------------
    const handleClick = () => {
        alert("Button Clicked!");
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <input type="text" onChange={handleChange}/> 

        <button onClick={handleEvent}>Click Me!</button>

        <button type="submit">Submit</button>
        </div>
    </form>
    );
}

export default EventonClick