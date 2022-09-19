import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMe } from 'services/user';

const initialState = {
  user: '',
  locale: 'vi',
  loading: false,
  myShop: '',
};

export const fetchUserInfo = createAsyncThunk(
  'users/fetchUserInfo',
  // eslint-disable-next-line consistent-return
  async () => {
    const token = localStorage.getItem('AuthToken');
    if (!token) {
      return null;
    }
    const res = await getMe();
    if (res.status === 200 && res?.data?.status === 'success') {
      return res?.data?.data;
    }
    return null;
  },
);

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
    changeUserInfo: (state, action) => {
      state.user = action.payload;
    },
    changeShopInfo: (state, action) => {
      state.myShop = action.payload;
    },
  },
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUserInfo.fulfilled]: (state, action) => {
      state.status = 'done';
      state.user = action.payload;
    },
    [fetchUserInfo.rejected]: (state) => {
      state.status = 'error';
    },
  },
});
export const {
  changeLocale, changeLoading, changeUserInfo, changeShopInfo,
} = appSlice.actions;
export default appSlice.reducer;
