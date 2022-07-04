import React from 'react';
import './Card.css';

 const Card = ({ id, name, age, gender, email }) => {
        return (
            <div className='card'>
                <img className='card__img' src={`https://robohash.org/${id}?size=200x200`} 
                    alt='Robo profile'
                />
                <h2 className='card__title'>{name}</h2>
                <p className='card__text'><b>Age:</b> {age}</p>
                <p className='card__text'><b>Gender:</b> {gender.charAt(0)
                    .toUpperCase() + gender.slice(1)}
                </p>
                <p className='card__text'><b>Email:</b> {email}</p>
            </div>
        )
    }

export default Card