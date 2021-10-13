import { createSlice } from '@reduxjs/toolkit';

export const membersSlice = createSlice({
  name: 'MembersPage',
  initialState: {
    members: [],
  },
  reducers: {
    addMember: (state, action) => {
      if (state.members.includes(action.payload)) {
        console.log('found duplicate');
        return;
      } else {
        state.members.push(action.payload);
      }
    },
    deleteMember: (state, action) => {
      const index = state.members.indexOf(action.payload);
      if (index > -1) {
        state.members.slice(index, 1);
      }
    },
  },
});

// Action creators
export const { addMember, deleteMember } = membersSlice.actions;

// Selectors
export const selectMembers = (state) => state.MembersPage.members;

export default membersSlice.reducer;
