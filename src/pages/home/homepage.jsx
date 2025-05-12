import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homePage.css'
//import { usePublications } from '../../shared/hooks/usePublications.jsx'
import { Navbar } from '../../components/navbar/navbar.jsx'

export const HomePage = () => {
  const navigate = useNavigate()


  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="main-title">ACTIVITY BLOG</h1>
        <Navbar />
      </header>

    </div>
  )
}
