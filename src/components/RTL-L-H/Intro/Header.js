import React from 'react';

const Header = ({ text })=>{
    return(
        <div>
            <h1 
            data-testid="h1tag"
            className="fancy-h1">{ text }</h1>
        </div>
    )
}

export default Header;