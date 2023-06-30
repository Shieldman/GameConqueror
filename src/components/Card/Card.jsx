import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({imageSource,name,link}) => {
  return (
    <div className='card'>
        <NavLink to={link}>
        <img className='card-image' src={imageSource} alt={name} />
        <div className='card-game-name'><p>{name}</p></div>
        </NavLink>
    </div>
  )
}

export default Card