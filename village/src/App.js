import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import './Styles.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs })
  }

  componentDidMount() {
    // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }
  
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className='nav-links'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/smurf-form'>
            Add a Smurf
          </NavLink>
        </div>
        <div className='h1-wrapper'>
          <Link exact to='/'>
            <h1>SMURF VILLAGE</h1>
          </Link>
        </div>  
        <Route path='/smurf-form'
          render={props => (
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
          )}
        />    
        <Route exact path='/'
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )}
        />  
        <Route 
          path='/smurfs/:id'
          render={props => (
            <Smurf {...props} smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs} />
          )}    
        />  
      </div>
    );
  }
}

export default App;
