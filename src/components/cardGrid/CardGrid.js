import React from 'react';
import './CardGrid.css';
import Card from '../card/Card';

const CardGrid = ({ robots }) => {
    return (
        <div className='cardGrid'>
            {
                robots.map((robot) => {
                    const {
                        id,
                        name,
                        age,
                        gender,
                        email
                    } = robot;
                    return (
                        <Card 
                            key={id} 
                            id={id} 
                            name={name} 
                            age={age}
                            gender={gender}
                            email={email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardGrid