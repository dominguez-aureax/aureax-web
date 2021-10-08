import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
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
export const selectUser = (state) => state.auth.User;
export const selectID = (state) => state.auth.ID;
export const selectReferralLink = (state) => state.auth.ReferralLink;
export const selectLoading = (state) => state.auth.Loading;

export default authSlice.reducer;
