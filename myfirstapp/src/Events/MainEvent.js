import React from "react";
import EventonClick from "./Eventonclick";
import KeyboardEvent from "./KeyboardEvent";
import MouseEvent from "./MouseEvent";

function MainEvent() {
    return (
        <>
            <EventonClick/>
            <KeyboardEvent/>
            <MouseEvent/>
        </>
    );
}

export default MainEvent;