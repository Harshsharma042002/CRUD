import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <h1> CRUD </h1>
        </div>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/display'>DataBase</Link>
        </div>
    </div>
  )
}

export default Navbar