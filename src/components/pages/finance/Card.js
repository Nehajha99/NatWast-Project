import React from "react";

function Card(props){
    return(
        <div className="card-container">
            <img className="card_img" src={props.img} alt="" />
            <div className="content">
                <h1>{props.name}</h1>
                <p>{props.description}</p>

            </div>
            <button class="button button5" style={{marginLeft: "20%"}}>{props.button}</button>
        </div>
    )
}

export default Card;