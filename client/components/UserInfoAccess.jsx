import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const UserInfoAccess = ({ loginContainer, setLoginContainer, registerContainer, setRegisterContainer, setting }) => {
  const navigate = useNavigate();
  return (
    <div class="loginContainer">
      <form class="loginForm"
        onSubmit={async (e) => {
          e.preventDefault()
          if (setting === '/authenticate-user') {
            const result = await fetch(setting, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: e.target[0].value, password: e.target[1].value }) });
            if (result.status === 200) {
              const parsedResult = await result.json();
              Cookies.set('user', parsedResult[0].user_id)
              navigate('homepage')
            }
            else {
              window.alert('Invalid username or password. Please try again.')
            }
          }
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
          <button id="loginButton" type="submit">log in</button>
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