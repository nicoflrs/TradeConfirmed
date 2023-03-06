import React from 'react';
import { Link } from 'react-router-dom';
import { clearInputs, validateInputs } from './helpers/formInputMethods';
import Cookies from 'js-cookie';

const Form = () => {
  const tradeLogSuccess = () => {
    window.alert('Trade has been logged.');
    console.log('HIT')
    clearInputs();
  };

  const tradeLogFailure = () => {
    window.alert('Incomplete form - Please try again.');
  };

  return (
    <div id="inputs">
      <h1>Options Tracker</h1>
      <h2>Please Enter Inputs Below...</h2>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const checkSubmission = validateInputs();
        if (checkSubmission) {
          tradeLogSuccess()
          const user = Cookies.get('user');
          await fetch('/submit-form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ Position: e.target[0].value, NumContracts: e.target[1].value, Strategy: e.target[2].value, DateBTOSTO: e.target[3].value, DateBTCSTC: e.target[4].value, user_id: user, }) })
        }
        else {
          tradeLogFailure();
        }
      }}>
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
        <button id="add" type="submit">Add</button>
      </form>
      <Link to="log">
        <button id="logbutton">View Trading Log</button>
      </Link>
      <Link to='/'>
        <button id='logOut' onClick={() => {
          Cookies.remove('user')
        }}>Log out</button>
      </Link>
    </div>
  );
};

export default Form;