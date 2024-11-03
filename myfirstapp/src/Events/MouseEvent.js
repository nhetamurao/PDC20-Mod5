import React from "react";

function MouseEvent (){
    const handleMouseEnter = () =>{
        console.log("Mouse entered the button")
    }

    const handleDoubleClick = () =>
        alert("Button double clicked!")

    return(
        <div>
            <button onMouseEnter={handleMouseEnter} onDoubleClick={handleDoubleClick}>Hover or Click</button>
        </div>
    );

}

export default MouseEvent;