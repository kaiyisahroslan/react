import React from 'react';
import Card from './card';

function Cardlist() {
    return (
        <div>
            <h1>I will contain deck of cards!</h1>
            <Card title = 'Samsung' likes = '8' dislikes = '0'></Card>
            <Card title = 'Huawei' likes = '98' dislikes = '0'></Card>
            <Card title = 'Nokia' likes = '88' dislikes = '0'></Card>
            <Card title = 'Apple' likes = '28' dislikes = '0'></Card>
            <Card title = 'realme' likes = '83' dislikes = '0'></Card>
            <Card title = 'HUAWEI' likes = '18' dislikes = '0'></Card>
            <Card title = 'ZTE' likes = '80' dislikes = '0'></Card>
            <Card title = 'Motorola' likes = '81' dislikes = '0'></Card>
        </div>
    );
}

export default Cardlist;