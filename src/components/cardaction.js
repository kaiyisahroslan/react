import React, { useState } from 'react';

function CardAction(props) {

    // Declare the state called likeValues and initialise it with the value of props.likes
    // Use the function changeLikeValues whenever the value of likeValues need to be updated
    const [likeValues, changeLikeValues] = useState(parseInt(props.likes)); // parseInt to convert string to int

    // dislikeValues state declaration & initialisation props.dislikes value
    // changeDislikeValues to update the value
    const [dislikeValues, changeDislikeValues] = useState(parseInt(props.dislikes));

    const changeLikes = () => {
        // Change the value of state likeValues using changeLikeValues
        changeLikeValues(likeValues+1);
    };

    const changeDislikes = () => {
        // Change value of state dislikeValues
        changeDislikeValues(dislikeValues+1);
    };

    return (
        <div>
            <button onClick={changeLikes}>Likes</button>
            &nbsp;&nbsp;
            {likeValues}
            &nbsp;
            &nbsp;
            <button onClick={changeDislikes}>Dislikes</button>
            &nbsp;&nbsp;
            {dislikeValues}
        </div>
    ); // &nbsp : non-breaking space (will not be in new line = duduk sebelah)
}

export default CardAction;