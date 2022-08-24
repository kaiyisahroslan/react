import React from 'react';

function Header() {

    let headerStyle = {
        border : '1px solid red',
        borderRadius : '10px',
        padding : '4px',
        margin: '4px'
    } // css

    return (
        <div style={headerStyle}>
            <h1 style={{color: 'red', textShadow: '2px 2px blue'}}>I am a header!</h1> 
        </div> // component & inline level css
    );
}

export default Header;