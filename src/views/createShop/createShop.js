import React, { useState } from 'react';
import './createShop.sass';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormattedMessage } from 'react-intl';
// import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

function CreateShop() {
  const [avatar, setAvatar] = useState('/image/upload.svg');

  const handle = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('phonenumber'),
    });
  };

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
            <input type="file" id="create_upload" className="create_upload-input" />
          </div>
          <div className="create_shop-regist">
            <Box component="form" onSubmit={handle} noValidate sx={{ mt: 1 }}>
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
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateShop;
