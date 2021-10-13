import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    User: 'NO AVAILABLE USER',
    ID: 'User ID unavailable',
    ReferralLink: 'No availalble Referral Link',
    Loading: true,
    Name: 'No Current Display Name',
  },
  reducers: {
    changeUser: (state, action) => {
      state.User = action.payload;
    },
    changeID: (state, action) => {
      state.ID = action.payload;
    },
    changeReferralLink: (state, action) => {
      state.ReferralLink = action.payload;
    },
    changeLoading: (state, action) => {
      state.Loading = action.payload;
    },
    changeName: (state, action) => {
      state.Name = action.payload;
    },
  },
});

// Action creaters
export const { changeUser, changeID, changeReferralLink, changeLoading, changeName } =
  authSlice.actions;

// Selectors
export const selectUser = (state) => state.Auth.User;
export const selectID = (state) => state.Auth.ID;
export const selectReferralLink = (state) => state.Auth.ReferralLink;
export const selectLoading = (state) => state.Auth.Loading;

export default authSlice.reducer;
