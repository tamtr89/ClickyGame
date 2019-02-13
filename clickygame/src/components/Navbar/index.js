import React from "react";
import "./style.css";

function Navbar(props) {
    return(
    <nav>
        <ul>
            <li className="brand animated">
            <a href="/clickygame">{props.title}</a>
            </li>

            <li id="current-score">{props.score}</li>

            <li id="top-score">{props.topScore}</li>
        </ul>
    </nav>
)
}
export default Navbar;