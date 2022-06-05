import React from 'react';
import './Card.css';

 const Card = ({ id, name, age, gender, email }) => {
        return (
            <div className='card'>
                <img src={`https://robohash.org/${id}?size=200x200`} 
                    alt='Robo profile'
                />
                <h2>{name}</h2>
                <p><b>Age:</b> {age}</p>
                <p><b>Gender:</b> {gender.charAt(0)
                    .toUpperCase() + gender.slice(1)}
                </p>
                <p><b>Email:</b> {email}</p>
            </div>
        )
    }

export default Card