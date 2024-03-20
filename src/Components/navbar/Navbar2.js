import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

// FOR LOCAL API

function Navbar2() {
  return (
    <div className="navbar">
        <h3>NAVBAR</h3>
        <ul>
            <li>
            <Link to=" " style={{textDecoration:'none'}}>
                HOME    
            </Link> 
            </li>
            <li>
            <Link to="login" style={{textDecoration:'none'}}>
                LOGIN   
            </Link> 
            </li>   
            <li>
            <Link to="register" style={{textDecoration:'none'}}>
                REGISTER
            </Link> 
            </li>    
        </ul>

    </div>
  )
}

export default Navbar2