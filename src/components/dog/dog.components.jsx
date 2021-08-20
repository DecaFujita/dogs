import React from 'react';
import { Link } from 'react-router-dom';
import './dog.styles.css';

const Dog = props => {
    return (
        <div  className='dog'>
            <p>Hi! My name is {props.name}! </p>
            <Link to={`/${props.name}`}>
            <img className='dog-img' src={props.src} alt={props.name} height='300' width='300'/>
            </Link>
            
        </div>
    )
} 
export default Dog;
