import React from 'react';
import { Link } from 'react-router-dom';

const UserInfoAccess = ({ loginContainer, setLoginContainer, registerContainer, setRegisterContainer }) => {
  return (
    <div class="loginContainer">
      <form class="loginForm">
        <input
          id="username"
          type='text'
          name='username'
          required='required'
          placeholder='username'
        />
        <input
          id="password"
          type='password'
          name='password'
          required='required'
          placeholder='password'
        />
        {registerContainer && (
          <input
            id="password"
            type='password'
            name='password'
            required='required'
            placeholder='confirm password'
          />
        )}
      </form>
      <div class="actionButton">
        {registerContainer
          ?
          <div class="register">
            <button id="registerButton" onClick={() => setRegisterContainer(!registerContainer)}>register</button>
          </div>
          :
          <Link to='homepage'>
            <button id="loginButton" onClick={() => setLoginContainer(!loginContainer)}>log in</button>
          </Link>
        }
      </div>
      <div class="backButton">
        {registerContainer
          ? <button id="backButton" onClick={() => setRegisterContainer(!registerContainer)}>back</button>
          : <button id="backButton" onClick={() => setLoginContainer(!loginContainer)}>back</button>
        }
      </div>
    </div>
  )
};

export default UserInfoAccess;