import React, { useState } from 'react';

const Clickers = ()=>{

    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(prevCount => prevCount + 1);
    }

    const decrement = ()=>{
        setTimeout(()=>{
            setCount(prevCount => prevCount - 1);
        }, 250)
    }
    return(
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <span data-testid="count" >{ count }</span>
        </div>
    )
}

export default Clickers;