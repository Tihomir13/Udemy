//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let style = {};
let string;
function WhatsTheTime(){
    const date = new Date();
    const currentTime = date.getHours();

    if(currentTime >= 0 && currentTime < 12){
        string = "Good morning";
        style.color = "red";
    }
    
    if(currentTime >= 12 && currentTime < 18) {
        string = "Good Afternoon";
        style.color = "green";
    }
    
    if(currentTime >= 18 && currentTime < 0){
        string = "Good evening";
        style.color = "blue";
    }
}

WhatsTheTime();
ReactDOM.render(
<h1 className = "heading" style = {style} >{string}</h1>,
document.querySelector("#root"));