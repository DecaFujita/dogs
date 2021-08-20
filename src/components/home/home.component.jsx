import React from 'react';
import Dog from '../dog/dog.components';
import './home.styles.css';

const Home = props => {
    return(
        <div className='gallery'>
            HOMEPAGE
            {routeProps.dogs}
            {/* <h1>Click a dog!</h1>
            <div className='gallery-links'>
                {props.dogs.map(({name, ...otherDogProps}) => <Dog key={name} name={name} {...otherDogProps} />)}
            </div> */}
        </div>
    )
}

export default Home;