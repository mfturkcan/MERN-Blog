import axios from 'axios';
import React from 'react';

export default function Secret(){
    function handleClick(){
        axios.get("http://localhost:4000/logout").then(res=>{console.log(res);});
    }
    
    return(
        <div>
            Welcome to secret page!
            <button onClick={handleClick}>Log out</button>
        </div>
    );
}