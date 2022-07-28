import React, { useState } from 'react';
import { TextField } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { registerUser } from 'services/user';
// import { auth } from 'firebase/firebase-config';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './register.sass';
import { Link, useNavigate } from 'react-router-dom';
import { changeUserInfo } from 'redux/appSLice';
import { NotificationManager } from 'react-notifications';

function Register() {
  const [avatar, setAvatar] = useState('/image/upload.svg');
  const [fileUpload, setFileUpload] = useState();
  const [stepSetting, setStepSetting] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const schema = yup.object({
  //   shop_name: yup.string().required(),
  //   phone_number: yup.number().required(),
  // }).required();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser({
        username: data.user_name,
        phoneNumber: data.phone_number,
        email: data.email,
        password: data.password,
      });
      if (res?.status === 200) {
        NotificationManager.success(
          'Create success',
          <FormattedMessage id="notification.success" />,
        );
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      NotificationManager.error(
        'Create error',
        <FormattedMessage id="notification.error" />,
      );
    }
  };

  return (
    <div className="register_container">
      <div className="register_box">
        <div className="register_title">
          <FormattedMessage id="user.button.register" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="user_name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="User Name"
                size="large"
                required
              />
            )}
          />
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
            name="phone_number"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Phone Number"
                size="large"
                required
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
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
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Confirm password"
                size="large"
                required
              />
            )}
          />
          <button
            type="submit"
            className="register_btn btn"
          >
            <FormattedMessage id="user.button.register" />
          </button>

          <div className="register_link-register">
            <p><FormattedMessage id="user.link.register" /></p>
            <Link to="/login"><FormattedMessage id="user.button.login" /></Link>
          </div>
        </form>
      </div>
    </div>

  );
}
export default Register;
