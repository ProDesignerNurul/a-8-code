import React from 'react';

const Card = ({card}) => {
    return (
        <div>
            <h2>right side</h2>
            <p>Card Length : {card.length}</p>
        </div>
    );
};

export default Card;