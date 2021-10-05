import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    User: {},
    ID: 'User ID unavailable',
    ReferralLink: 'No availalble Referral Link',
    Loading: true,
    Name: 'No Current Display Name',
  },
  reducers: {
    changeUser: (state, action) => {
      state.value = action.payload;
    },
    changeID: (state, action) => {
      state.value = action.payload;
    },
    changeReferralLink: (state, action) => {
      state.value = action.payload;
    },
    changeLoading: (state, action) => {
      state.value = action.payload;
    },
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creaters
export const { changeUser, changeID, changeReferralLink, changeLoading, changeName } =
  authSlice.actions;

// Selectors
export const selectUser = (state) => state.auth.User;
export const selectID = (state) => state.auth.ID;
export const selectReferralLink = (state) => state.auth.ReferralLink;
export const selectLoading = (state) => state.auth.Loading;

export default authSlice.reducer;
