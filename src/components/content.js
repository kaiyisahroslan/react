import React from 'react';
import APIData from './apidata';
import Cardlist from './cardlist';

function Content() {
    return (
        <div style={{border: '1px solid pink', borderRadius: '5px', padding: '4px'}}>
            <h1>I will contain list of cards: cardlist component!</h1>
            <Cardlist></Cardlist>
            <APIData></APIData>
        </div>
    );
}

export default Content;