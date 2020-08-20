import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetch = ({ url })=>{

    const [data, setData] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(()=>{

        const loadData = async ()=>{
            const response = await axios.get(url)
            if(mounted){
                setData(response.data);
            }
        }
        loadData();

        return ()=>{
            setMounted(!mounted);
        }
    }, [url, mounted])

    return(
        <div>
            { data ? <span data-testid="resolved"> { data.greeting} </span> : <span data-testid="loading">Loading data...</span>}
        </div>
    )
}

export default Fetch;