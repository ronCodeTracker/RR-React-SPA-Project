


import { useParams, useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Fruit from '../fruit.jpg'

function Fruitandv() {
    const navigate = useNavigate()
    const [name, setName] = useState(" ");
    const [fruit, setFruit] = useState(0);
    const [message, setMessage] = useState("Need more fruit.");

    const handleInput = event => {
        setName(event.target.value);
    };

    const handleInput2 = event => {
        setFruit(event.target.value);
    };

    const logValue = () => {
        console.log(name);
        ConditionalOne()
    };

    const ConditionalOne = () => {
        (fruit>2) ? returnTwo() :returnOne()
    };

    const returnOne = () => {
        let nameOne = name
        setMessage(`You need more fruit, ${nameOne}.`)
    }

    const returnTwo = () => {
        setMessage(`Good for you, ${name}!`)
    }

    


    return (
        <div className="main">
            <div className="title">
                Fruit and Vegetable App
                <img className="picture" style={{ 'width': '30vw' }} src={Fruit}/>
            </div>
            <div>
                <div className="fruitInput">Enter your name: </div>
                <input className="nameInput" onChange={handleInput} placeholder="Enter name" />

            </div>
            
            
            <div className="fruitInput">Enter the number of fruit you ate so far today: </div>
            <input className="inputTwo" onChange={handleInput2} placeholder="Fruit" />
            <div className="buttonResult"><Button onClick={logValue} variant="outline-info">Result</Button>{' '}</div>
            
            <div className="message">{message}</div>
            <div>
                <button className="navbutton" onClick={() => navigate(-1)}>Back</button>
            </div>
            
            
      </div>
    );
  }
  
  export default Fruitandv;

