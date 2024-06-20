import React from 'react'
import { useNavigate } from 'react-router-dom';
const HeaderPage = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1 onClick={() => navigate('/HomePage')}>Home</h1>
        <h1 onClick={() => navigate('/AboutPage')}>About</h1>
        <h1 onClick={() => navigate('/DashboardPage')}>Dashboard</h1>
    </div>
  )
}

export default HeaderPage