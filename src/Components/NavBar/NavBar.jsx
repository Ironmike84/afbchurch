import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  return (
    <div className='NavBar'>
      <Link to={'/Home'}><Button className="btn-dark">Home</Button></Link>
      <Link to={'/Services'}><Button className="btn-dark">Services</Button></Link>
      <Link to={'/Children'}><Button className="btn-dark">Children</Button></Link>
    </div>
  )
}

export default NavBar
