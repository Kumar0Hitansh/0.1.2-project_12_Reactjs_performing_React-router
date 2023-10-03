import React from 'react'

import './Components.css'

import { Link,NavLink,useNavigate } from 'react-router-dom'

function Navlinks() {

let navigate =useNavigate()
  return (
    <>
    <div className='navdiv'>
    <span className='navbar'>NavLinks :-
    <NavLink className='navlink' to='/'>Home Page</NavLink>
    <NavLink className='navlink' to='/about'>About Page</NavLink>
    <NavLink className='navlink' to='/contact'>Contact Page</NavLink>
    <button onClick={()=>navigate('about')}>Navigate to About page using useNavigate hook</button>
    <NavLink className='navlink' to='/...'>404page</NavLink>
    </span>
    </div>



    </>
  )
}

export default Navlinks