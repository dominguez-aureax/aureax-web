import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    User: 'No User Logged In',
    ID: 'User ID unavailable',
    ReferralLink: 'No availalble Referral Link',
  },
  reducers: {
    changeUser: (state) => {
      state.value = action.payload;
    },
    changeID: (state) => {
      state.value = action.payload;
    },
    changeReferralLink: (state) => {
      state.value = action.payload;
    },
  },
});

// Action creaters
export const { updateUser, updateId, updateReferralLink } = authSlice.actions;

// Selectors
export const selectUser = (state) => state.auth.User;
export const selectID = (state) => state.auth.ID;
export const selectReferralLink = (state) => state.auth.ReferralLink;

export default authSlice.reducer;
