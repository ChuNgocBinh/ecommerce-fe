import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeUserInfo } from 'redux/appSLice';
import { loginUser } from 'services/user';
// import { auth } from 'firebase/firebase-config';
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './login.sass';

function Login() {
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
      const res = await loginUser(data);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('AuthToken', JSON.stringify(`Bearer ${res?.data?.token}`));
        dispatch(changeUserInfo(res?.data?.data));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
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
      </div>
    </div>

  );
}
export default Login;
