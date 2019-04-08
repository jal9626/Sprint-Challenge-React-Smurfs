import React from 'react';

import '../Styles.css'

const Smurf = props => {
  return (
    <div className='smurf-wrapper'>
      <div className="Smurf">
        <h3>{props.name} :</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>  
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

