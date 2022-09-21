import React from "react";

const Card = ({ name, email }) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${name}?size=250x250`} alt="icons of robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;