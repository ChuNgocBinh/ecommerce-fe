import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './loader.sass';

function Loader() {
  const open = useSelector((state) => state.app.open);
  return (
    <div className="loader_container">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <div className="loader_box">
        <img src="/image/loader.gif" alt="loader" />
      </div> */}
    </div>
  );
}

export default Loader;
