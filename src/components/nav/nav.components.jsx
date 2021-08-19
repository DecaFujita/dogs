import React from 'react';

import './nav.styles.css';

const Nav = props => {
    return(
        <div className='nav'>
            <a className='nav-link'>Home</a>
            <a className='nav-link'>Whiskey</a>
            <a className='nav-link'>Hazel</a>
            <a className='nav-link'>Tubby</a>
        </div>
    )
}

export default Nav;