import React from 'react'
import './Card.css'

 const Card = ({ id, name, email }) => {
        return (
            <div className='card'>
                <img src={`https://robohash.org/${id}?size=200x200`} alt='Robo profile'/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }

export default Card