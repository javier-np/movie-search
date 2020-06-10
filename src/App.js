import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={MovieDetails}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
