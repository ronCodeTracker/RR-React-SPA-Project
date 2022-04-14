


import { useParams, useNavigate } from 'react-router-dom'
import React, { useState } from "react";


function Fruitandv() {
    const navigate = useNavigate()
    const [name, setName] = useState(" ");

    const handleInput = event => {
        setName(event.target.value);
    };

    const logValue = () => {
        console.log(name);
    };

    return (
        <div className="App">
            <div>
                Fruit and Vegetable App
            </div>
            
            <div><input onChange={handleInput} placeholder="Enter name" /></div>
            <div><button onClick={logValue}>Log value</button></div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            
            
      </div>
    );
  }
  
  export default Fruitandv;

