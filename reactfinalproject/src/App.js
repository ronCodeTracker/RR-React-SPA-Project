import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './App.css';
import Fruitandv from './components/Fruitandv';
import Navv from './components/Nav'
import './style.css'
import Nav from 'react-bootstrap/Nav'


function App() {
    
  return (
    <div className="pageOne">
          <Router>
              <Nav className="justify-content-center navvi" defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                      <Nav.Link href="/home"><Link className="linkOne" to='/'>Home</Link></Nav.Link>
                      
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Nav.Link eventKey="link-1"><Link className="linkOne" to='/app'>Fruit and Vegetable App</Link></Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Nav.Link eventKey="link-2">Link</Nav.Link>
                  </Nav.Item>
              </Nav>
              

              
        <Routes>
          <Route path='/' element={<Navv/>} >

          </Route>
          <Route path='/app' element={<Fruitandv/>}>

          </Route>
        </Routes>
      </Router>
      <h3>
              
              
          


      </h3>
      
    </div>
  );
}

export default App;
