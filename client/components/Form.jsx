import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

  const toggleText = () => {
    window.alert('Trade has been logged.');
  };

  return (
    <div id="inputs">
      <h1>Options Tracker</h1>
      <h2>Please Enter Inputs Below...</h2>
      <form method="POST" action="/submit-form">
        <input
          id="position"
          type='text'
          name='Position'
          required='required'
          placeholder='enter position...'
        />

        <input
          id="numcontracts"
          type='number'
          name='NumContracts'
          required='required'
          placeholder='enter # of contracts...'
        />

        <input
          id="strategy"
          type='text'
          name='Strategy'
          required='required'
          placeholder='enter a strategy...'
        />

        <input
          id="datebtosto"
          type='test'
          name='DateBTOSTO'
          required='required'
          placeholder='enter BTO/STO date...'
          class="form-control"
          onfocus="(this.type='date')" onblur="(this.type='text')"
        />

        <input
          id="datebtcstc"
          type='text'
          name='DateBTCSTC'
          required='required'
          placeholder='enter STO/STC date...'
          class="form-control"
          onfocus="(this.type='date')" onblur="(this.type='text')"
        />
        <button id="add" type="submit" onClick={toggleText}>Add</button>
      </form>
      <Link to='log'>
        <button id="logbutton">View Trading Log</button>
      </Link>
    </div>
  );
};

export default Form;