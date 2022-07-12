import React, { useState } from 'react';
import './createShop.sass';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { FormattedMessage } from 'react-intl';
// import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

function CreateShop() {
  const [avatar, setAvatar] = useState('/image/upload.svg');

  // const handle = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('phonenumber'),
  //   });
  // };

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    setAvatar(url);
  };

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="create_shop-container">
      <div className="create_shop-box">
        <div className="create_shop-title">
          <FormattedMessage id="shop.create.title" />
        </div>
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    color="warning"
                    label="Name Shop"
                    size="small"
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
                    color="warning"
                    label="Phone Number"
                    size="small"
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
                    color="warning"
                    label="Email"
                    size="small"
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
                    color="warning"
                    label="Country"
                    size="small"
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
                    color="warning"
                    label="State/Province"
                    size="small"
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
                    color="warning"
                    label="city"
                    size="small"
                  />
                )}
              />
              <Controller
                name="zip"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    color="warning"
                    label="Zip/Postal code"
                    size="small"
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    color="warning"
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

            {/* <Box component="form" onSubmit={handle} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name Shop"
                name="text"
                size="small"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phonenumber"
                label="Phone Number"
                type="text"
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="text"
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="country"
                label="Country"
                type="text"
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="province"
                label="State/Province"
                type="text"
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="city"
                label="City"
                type="text"
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="zip"
                label="Zip/Postal code"
                type="text"
                size="small"
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                fullWidth
              // defaultValue="Default Value"
              />
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <FormattedMessage id="shop.create.button.create" />
              </Button>
            </Box> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShop;
