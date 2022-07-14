import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  locale: 'vi',
  loading: false,
};

export const appSlice = createSlice({
  name: 'appredux',
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      state.locale = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { changeLocale, changeLoading } = appSlice.actions;
export default appSlice.reducer;
