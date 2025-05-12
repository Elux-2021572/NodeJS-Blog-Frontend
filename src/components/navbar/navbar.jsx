import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.css'

const NavButton = ({ text, onClickHandler }) => (
  <span className="nav-button" onClick={onClickHandler}>
    {text}
  </span>
)

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="nav-container">
      <div className="nav-buttons-container">
        <NavButton text="Home" onClickHandler={() => navigate('/')} />
        <NavButton text="Publications" onClickHandler={() => navigate('/publications')} />
      </div>
    </div>
  )
}
