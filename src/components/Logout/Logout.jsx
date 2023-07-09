import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import './Logout.css'

const Logout = () => {

    const {user,logout} = useAuth();
  return (
    <div><button id='logout-button' className='game-buttons' onClick={logout}>Logout</button></div>
  )
}

export default Logout