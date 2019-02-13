import React from "react";
import "./style.css";

function Navbar(props) {
    return(
    <nav>
        <ul>
            <li className="brand">
            <a href="/clickygame">{props.title}</a>
            </li>

            <li id="message">{props.message}</li>

            <li id="current-score">Current Score: {props.score}</li>

            <li id="top-score">Top Score: {props.topScore}</li>
        </ul>
    </nav>
)
}
export default Navbar;