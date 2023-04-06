import React, { useState, useEffect } from 'react';
import backgroundVideo from '../media/video.mp4';
import UserInfoAccess from './UserInfoAccess.jsx';
import Cookies from 'js-cookie';

const Homepage = () => {
  const [loginContainer, setLoginContainer] = useState(false)
  const [registerContainer, setRegisterContainer] = useState(false)

  useEffect(() => {
    const user = Cookies.get('user')
    user && Cookies.remove('user')
  }, []);

  return (
    <div class="video-container">
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {loginContainer
        ?
        <UserInfoAccess
          loginContainer={loginContainer}
          setLoginContainer={setLoginContainer}
          setting={'/authenticate-user'}
        />
        : registerContainer
          ?
          <UserInfoAccess
            registerContainer={registerContainer}
            setRegisterContainer={setRegisterContainer}
            setting={'/register-user'}
          />
          :
          <div class="caption1">
            welcome to options tracker.
            <div class="caption2">
              <button id="homebuttonmain" onClick={() => setLoginContainer(!loginContainer)}>log in</button>
              <button id="registerbuttonmain" onClick={() => setRegisterContainer(!registerContainer)}>register</button>
            </div>
          </div>
      }
    </div>
  );
};

export default Homepage;