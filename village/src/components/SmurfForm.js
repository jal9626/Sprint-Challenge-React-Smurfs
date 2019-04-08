import React, { Component } from 'react';
import axios from 'axios';

import '../Styles.css'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }  
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state.smurf)
      .then(response => {
        this.props.updateSmurfs(response.data);
      })
      .catch(err => console.log(err));

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
      smurf: {...prevState.smurf, [e.target.name]: value }
    }))
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <div className="baseline" />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className="baseline" />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
