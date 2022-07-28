import React, { useEffect, useState } from 'react';
import './createShop.sass';
import { FormattedMessage } from 'react-intl';
import { useForm, Controller } from 'react-hook-form';
import {
  Button, Step, StepLabel, Stepper, TextField, Box, Stack,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createShop, getShopByUserId, updateShop } from 'services/shop';
import { useDispatch } from 'react-redux';
import { changeLoading } from 'redux/appSLice';
import { useNavigate } from 'react-router-dom';

const steps = [
  'Create shop',
  'Wait Confirm',
  'Create success',
];

function CreateShop() {
  const [avatar, setAvatar] = useState('/image/upload.svg');
  const [fileUpload, setFileUpload] = useState();
  const [stepSetting, setStepSetting] = useState(0);
  const [shopAccount, setShopAccount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getShopUser = async () => {
    const res = await getShopByUserId();
    if (res?.status === 200) {
      if (res?.data?.data) {
        setShopAccount(res?.data?.data);
        setStepSetting(res?.data?.data?.shop_account_status);
      }
    }
  };

  useEffect(() => {
    getShopUser();
  }, []);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setAvatar(url);
    setFileUpload(file);
  };

  // const schema = yup.object({
  //   shop_name: yup.string().required(),
  //   phone_number: yup.number().required(),
  // }).required();

  const { control, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(changeLoading(true));
      const formData = new FormData();
      formData.append('file', fileUpload);

      formData.append('data', JSON.stringify(data));

      await createShop(formData);
      dispatch(changeLoading(false));
      setStepSetting(1);
    } catch (error) {
      console.log(error);
      dispatch(changeLoading(false));
    }
  };

  const handleClickSellNow = async () => {
    const res = await updateShop(shopAccount.id, {
      shop_account_status: 3,
    });

    if (res?.status === 200 && res?.data?.status === 'success') {
      navigate('/my-shop');
    }
  };

  return (
    <div className="create_shop-container">
      <div className="create_shop-box">
        <div className="create_shop-title">
          <FormattedMessage id="shop.create.title" />
        </div>
        <div className="create_shop-step">
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={stepSetting} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        {
          stepSetting === 0 && (
            <div className="create_shop-form">
              <div className="create_shop-avatar">
                <label htmlFor="create_upload" className="create_upload-title">
                  <img src={avatar} alt="avata" className="create_upload-img" />
                </label>
                <input type="file" id="create_upload" className="create_upload-input" onChange={(e) => handleChangeAvatar(e)} />
              </div>
              <div className="create_shop-regist">

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="shop_name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Name Shop"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="phone_number"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Phone Number"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Email"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Country"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="State/Province"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="city"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="zip_code"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Zip/Postal code"
                        size="small"
                        required
                      />
                    )}
                  />
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        margin="normal"
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <FormattedMessage id="shop.create.button.create" />
                  </Button>
                </form>
              </div>
            </div>
          )
        }
        {
          stepSetting === 1 && (
            <div className="create_shop-step2">
              <div className="create_shop-step2-box">
                <img src="/image/wait.gif" alt="wait" className="create_shop-step2-img" />
              </div>
              <div className="create_shop-step2-content">
                <FormattedMessage id="shop.create.step2.title" />
              </div>
            </div>
          )
        }
        {
          stepSetting === 2 && (
            <div className="create_shop-step3">
              <div className="create_shop-step2-box">
                <img src="/image/success.gif" alt="wait" className="create_shop-step2-img" />
              </div>
              <div className="create_shop-step3-success">
                <FormattedMessage id="shop.create.step3.success" />
              </div>
              <div className="create_shop-step3-title">
                <FormattedMessage id="shop.create.step3.title" />
              </div>
              <button className="btn btn-hover" onClick={handleClickSellNow}>
                <FormattedMessage id="shop.create.step3.btn" />
              </button>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default CreateShop;
