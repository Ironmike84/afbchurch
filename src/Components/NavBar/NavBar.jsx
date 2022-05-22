import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <Link to={'/Home'}><Button>Home</Button></Link>
      <Link to={'/Services'}><Button>Services</Button></Link>
      <Link to={'/Children'}><Button>Children</Button></Link>
    </div>
  )
}

export default NavBar
