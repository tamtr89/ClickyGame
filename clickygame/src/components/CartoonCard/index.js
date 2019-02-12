import React from "react";
import "./style.css";

function CartoonCard(props){
    return (
        <div className="card"
        value={props.id}
        onLick={() => props.handleClick(props.id)}
        >

        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>

        </div>
    );
}

export default CartoonCard;