import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clearInputs, validateInputs } from './helpers/formInputMethods';

const Form = () => {
  const location = useLocation();
  let { user_id } = location?.state;
  const activeUser = useRef(user_id)
  console.log('act: ', activeUser.current)


  const tradeLogSuccess = () => {
    window.alert('Trade has been logged.');
    clearInputs();
  };

  const tradeLogFailure = () => {
    window.alert('Incomplete form - Please try again.');
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
        <button id="add" type="submit" onClick={() => {
          const checkSubmission = validateInputs();
          checkSubmission ? tradeLogSuccess() : tradeLogFailure();
        }}>Add</button>
      </form>
      <Link to="log" state={{ user_id: activeUser.current }}>
        <button id="logbutton">View Trading Log</button>
      </Link>
      <Link to='/'>
        <button id='logOut'>Log out</button>
      </Link>
    </div>
  );
};

export default Form;