import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const NotFound = () => {

  const location = useLocation()
  return (
    <>
      <h1>Error: {location.pathname} not found</h1>
      <Link to='/'>Go Home</Link>
    </>
  )
}

export default NotFound
