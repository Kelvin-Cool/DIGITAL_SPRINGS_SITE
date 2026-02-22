import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'
import Login from '../Pages/Login'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div id="pg">
      <h7>404 💻 Page Not Found !</h7>
      <br/>
      <button id="btn" onClick={()=>navigate('/Home')}>Go back to Home Page</button>
      <br/>
      <p id="nf">***********************OR*******************<br/> <NavLink to="/Login"><p id="nl">Login</p></NavLink></p>
    </div>
  )
}

export default NotFound
