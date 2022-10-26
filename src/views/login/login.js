import { Button, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeUserInfo } from 'redux/appSLice';
import { loginGoogleSSO, loginUser } from 'services/user';
// import { auth } from 'firebase/firebase-config';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './login.sass';
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import auth from 'fb/firebase-config';
import ReCAPTCHA from 'react-google-recaptcha';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const recaptchaRef = useRef();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.status === 200) {
        localStorage.setItem('AuthToken', `Bearer ${res?.data?.token}`);
        dispatch(changeUserInfo(res?.data?.data));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateRecapchaToken = async () => {
    const recapchaToken = await recaptchaRef.current.executeAsync();
    return recapchaToken;
  };

  const provider = new GoogleAuthProvider();

  const onConnectGG = async () => {
    try {
      const recapchaToken = await generateRecapchaToken();
      await signInWithPopup(auth, provider);
      const tokenAuth = await auth.currentUser.getIdToken();
      const resLogin = await loginGoogleSSO({
        idToken: tokenAuth,
        recapchaToken,
        rule: 'firebase',
      });

      if (resLogin.status === 200) {
        localStorage.setItem('AuthToken', `Bearer ${resLogin?.data?.token}`);
        dispatch(changeUserInfo(resLogin?.data?.data));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSuccess = (res) => {
    console.log(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    isSignedIn: true,
    onFailure,
    accessType: 'offline',
  });

  console.log(process.env.REACT_APP_SITE_KEY);
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

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
          sitekey={process.env.REACT_APP_SITE_KEY}
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
              // onClick="#"
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
              onClick={signIn}
              className="login_social login_gg"
            // aria-hidden="true"
            >
              <GoogleIcon />
            </button>
            <button
              // onClick="#"
              className="login_social login_fb"
            // aria-hidden="true"
            >
              <FacebookIcon />
            </button>
          </div>

        </div>
        {/* <GoogleLogin
          clientId="981857632593-kmccm4bm4m4vkt98v1huegm85rnab327.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        /> */}
        {/* <button onClick={onRecapcha}>recapcha</button> */}

      </div>
    </div>

  );
}
export default Login;
