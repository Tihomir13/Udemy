//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Tihomir Susmaov";
const currYear = new Date();
const year = currYear.getFullYear();

ReactDOM.render(
<div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
</div>,document.querySelector("#root"));