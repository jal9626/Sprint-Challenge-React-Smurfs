import React from 'react';

import axios from 'axios';
import '../Styles.css';

const Smurf = props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );

  // if (!props.smurfs.length || !smurf) {
  //   return <h2>Loading item data</h2>
  // }

  const deleteSmurf = event => {
    console.log('Item is being deleted')
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => {
        props.updateSmurfs(response.data);
        props.history.push('/smurfs')
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className='smurf-wrapper'>
      <div className="Smurf">
         <div className='delete'>
          <span onClick={deleteSmurf}>X</span>
        </div>  
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

