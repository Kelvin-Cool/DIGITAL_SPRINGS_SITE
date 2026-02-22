import React from 'react'
import './Jobs.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/NavBar'

const Jobslayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h8>Job Opportunities</h8>
      <p id="exp">Explore exciting job opportunities at Digital Springs Computing.</p>
    <Outlet />

    </div>
  )
}

export default Jobslayout
