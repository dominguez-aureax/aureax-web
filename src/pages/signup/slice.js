import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
  name: 'SignUpPage',
  initialState: {
    name: '',
    email: '',
    error: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    loading: false,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeError: (state, action) => {
      state.error = action.payload;
    },
    changePhone: (state, action) => {
      state.phone = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changePasswordConfirm: (state, action) => {
      state.passwordConfirm = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators
export const {
  changeName,
  changeEmail,
  changeError,
  changeLoading,
  changePhone,
  changePassword,
  changePasswordConfirm,
} = signUpSlice.actions;

// Selectors
export const selectName = (state) => state.SignUpPage.name;
export const selectEmail = (state) => state.SignUpPage.email;
export const selectError = (state) => state.SignUpPage.error;
export const selectLoading = (state) => state.SignUpPage.loading;
export const selectPhone = (state) => state.SignUpPage.phone;
export const selectPassword = (state) => state.SignUpPage.password;
export const selectPasswordConfirm = (state) => state.SignUpPage.passwordConfirm;

export default signUpSlice.reducer;
