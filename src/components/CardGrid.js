import React from 'react';
import './CardGrid.css';
import Card from './Card';

const CardGrid = ({ robots }) => {
    return (
        <div className='cardGrid'>
            {
                robots.map((robot) => {
                    return (
                        <Card 
                            key={robot.id} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}                       
                        />
                    )
                })
            }
        </div>
    )
}

export default CardGrid