import React from 'react';
import { Link } from 'react-router-dom';

const UserInfoAccess = ({ loginContainer, setLoginContainer, registerContainer, setRegisterContainer, setting }) => {
  return (
    <div class="loginContainer">
      <form class="loginForm" 
      onSubmit={async (e) => {
        e.preventDefault()
        const result = await fetch(setting, { method: 'POST', headers: { 'Content-Type': 'application/json' }, /*body: JSON.stringify({ id: item })*/ });
        console.log('result: ', result)
        console.log('loginContainer: ', loginContainer)
        console.log('registerContainer: ', registerContainer)
        setting === '/authenticate-user'
        ? setLoginContainer(!loginContainer)
        : setRegisterContainer(!registerContainer)
      }
      }
      >
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
            id="confirmPassword"
            type='password'
            name='confirmPassword'
            required='required'
            placeholder='confirm password'
          />
        )}
        {registerContainer
          ?
          <button id="registerButton" type="submit">register</button>
          :
          // <Link to='homepage'>
          <button id="loginButton" type="submit">log in</button>
          // </Link>
        }
        {registerContainer
          ? <button id="backButton" onClick={() => setRegisterContainer(!registerContainer)}>back</button>
          : <button id="backButton" onClick={() => setLoginContainer(!loginContainer)}>back</button>
        }
      </form>
    </div>
  )
};

export default UserInfoAccess;