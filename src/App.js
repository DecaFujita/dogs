import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './components/home/home.component';
import DogPage from './components/dog/dog.components';

import Nav from './components/nav/nav.components';
// import Dog from './components/dog/dog.components';


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

        <Switch>
        <Route path="/"
               render={routeProps => <Home {...routeProps} />} />
          {/* <Route exact path='/dog/:name' render={() => <DogPage name={}/>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
