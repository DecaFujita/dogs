import React from 'react';
import { Route, Switch } from "react-router-dom";

import Nav from './components/nav/nav.components';
import Dog from './components/dog/dog.components';


import './App.css';
import DOG_DATA from './dogs.data';

class App extends React.Component {
  static defaultProps = DOG_DATA;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className='gallery'>
          <h1>Click a dog!</h1>
          {this.props.dogs.map(dog => <Dog {...dog}/>)}
        </div>
        
        {/* <Switch>
          <Route exact path='/dog' render={() => <App />} />
          <Route exact path='/dog/:name' render={() => <Dog name={}/>} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
