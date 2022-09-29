import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'
import { BackButton } from '../../components'

const Header = () => {
  const activeClass = (({ isActive }) => isActive ? 'current' : undefined)

  return (
    <>
    <ul>
      <NavLink className={activeClass} to="/" end>Home</NavLink>
      <NavLink className={activeClass} to="About">About</NavLink>
      <NavLink className={activeClass} to="Albums">Albums</NavLink>
      <BackButton />
    </ul>
    </>
  )
}

export default Header
