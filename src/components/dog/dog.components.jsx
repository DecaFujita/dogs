import React from 'react';
import whiskey from '../src/imgs/whiskey.jpg';
import hazel from '../src/imgs/hazel.jpg';
import tubby from '../src/imgs/tubby.jpg';
import './dog.styles.css';

class Dog extends React.Component {

    render() {
        
        return (
            <div>
                <p>Hi! My name is {this.props.name} </p>
                <img src={this.props.url} alt={this.props.name} height='300' width='300'/>
            </div>
        )
    }
}

export default Dog;
