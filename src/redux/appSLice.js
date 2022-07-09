import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  locale: 'vi',
};

export const appSlice = createSlice({
  name: 'appredux',
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});
export const { changeLocale } = appSlice.actions;
export default appSlice.reducer;
