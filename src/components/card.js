import React from 'react';
import CardAction from './cardaction';
import CardDescription from './carddescription';
import Cardtitle from './cardtitle';

function Card(props) {
    return (
        <div style={{border: '1px solid orange', margin: '2px', padding: '4px'}}>
            <Cardtitle ct = {props.title}></Cardtitle>
            <CardDescription></CardDescription>
            <CardAction likes = {props.likes} dislikes = {props.dislikes}></CardAction>
        </div>
    );
}

export default Card;