import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeUserInfo } from 'redux/appSLice';
import { loginUser } from 'services/user';
// import { auth } from 'firebase/firebase-config';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './login.sass';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from 'fb/firebase-config';
import ReCAPTCHA from 'react-google-recaptcha';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const SITE_KEY = '6LdCoVohAAAAAJumNjc4CSnpwjqzV6NOYYPVSH9q';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      console.log('res', res?.data);
      if (res.status === 200) {
        localStorage.setItem('AuthToken', JSON.stringify(`Bearer ${res?.data?.token}`));
        dispatch(changeUserInfo(res?.data?.data));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const provider = new GoogleAuthProvider();

  const onConnectGG = () => {
    console.log('vao day');
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        const { user } = result;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const { email } = error.customData;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const recaptchaRef = React.useRef();
  const onChange = async () => {
    const token = await recaptchaRef.current.executeAsync();
    console.log(token);
  };

  const onRecapcha = async () => {
    const token = await recaptchaRef.current.executeAsync();
    console.log(token);
  };
  return (
    <div className="login_container">
      <div className="login_box">
        <div className="login_title">
          <FormattedMessage id="user.button.login" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Email"
                size="large"
                required
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Password"
                size="large"
                required
              />
            )}
          />
          <button
            type="submit"
            className="login_btn btn"
          >
            <FormattedMessage id="user.button.login" />
          </button>

          <div className="login_link-register">
            <p><FormattedMessage id="user.link.register" /></p>
            <Link to="/sign-up"><FormattedMessage id="user.button.register" /></Link>
          </div>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={SITE_KEY}
        />
        <div>
          <div className="login_social-title">Login with Firebase</div>
          <div className="login_social-box">
            <button
              className="login_social login_gg"
              onClick={onConnectGG}
            // aria-hidden="true"
            >
              <GoogleIcon />
            </button>
            <button
              onClick="#"
              className="login_social login_fb"
            // aria-hidden="true"
            >
              <FacebookIcon />
            </button>
          </div>

        </div>
        <div>
          <div className="login_social-title">Login with SSO</div>
          <div className="login_social-box">
            <button
              onClick="#"
              className="login_social login_gg"
            // aria-hidden="true"
            >
              <GoogleIcon />
            </button>
            <button
              onClick="#"
              className="login_social login_fb"
            // aria-hidden="true"
            >
              <FacebookIcon />
            </button>
          </div>

        </div>

        {/* <button onClick={onRecapcha}>recapcha</button> */}

      </div>
    </div>

  );
}
export default Login;
