

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Fruitandv() {
    const navigate = useNavigate()
    return (
      <div className="App">
            Fruit and Vegetable App
            <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }
  
  export default Fruitandv;

