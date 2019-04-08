import React, { Component } from 'react';

import Smurf from './Smurf';
import '../Styles.css'

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: props.smurfs
    }
  }
  
  render() {
    return (
      <div className="Smurfs">
        
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
