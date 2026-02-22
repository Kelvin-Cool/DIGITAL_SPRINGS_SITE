import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
    const navigate= useNavigate()
  return (
    <div className='job-details'>
      <h11>An error occurred</h11>
      <p>{error.message}</p>
      <button onClick={()=>navigate('/Register')}>Go back to Homepage</button>
    </div>
  )
}

export default Error
