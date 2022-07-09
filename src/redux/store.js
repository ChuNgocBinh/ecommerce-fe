import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSLice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
