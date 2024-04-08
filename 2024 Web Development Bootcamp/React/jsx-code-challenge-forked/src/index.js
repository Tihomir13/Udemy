//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

const rootDiv = document.querySelector("#root");
ReactDom.render(
<div> 
    <h1> My Favourite foods </h1>
    <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
    </ul> 
</div>,rootDiv)