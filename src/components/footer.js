import React from 'react';

function Footer() {

    let score = 88;
    let message = 'I am in JSX!';

    const printFromFunction = () => {
        return (
            <div>
                <h2>I am from Mars!</h2>
            </div>
        )
    }

    const sayHello = () => {
        alert('I am from Jupiter!');
    }

    return (
        <div style={{border: '1px solid blue', borderRadius: '5px', margin: '4px', padding: '4px'}}>
            <h1>I am footer component!</h1>
            <h2>Score: {score + 1}</h2>
            <p>Message: {message}</p>
            {printFromFunction()};
            <br />
            <button onClick={sayHello}>Click</button>
        </div>
    );
}

export default Footer;
