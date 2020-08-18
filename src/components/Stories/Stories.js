import React, { useState } from 'react';
import axios from 'axios';


const Stories = ()=>{

    const URL = "http://hn.algolia.com/api/v1/search";
    
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);

    const handleFetch = async(e)=>{
        try{
            const result = await axios.get(`${URL}?query=React`)
            // console.log(result.data.hits)
            setStories(result.data.hits)
        } catch(err){
            setError(err)
        }
    }

    return(
        <div>
            <button type="button" onClick={handleFetch}>Fetch Stories</button>
            { error && <span>Something went wrong...</span> }
            <ul>
                {
                    stories.map(story =>
                        <li key={story.objectID}>
                            <a href={story.url}>{ story.title }</a>
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Stories;