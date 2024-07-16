import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  allPost: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.status = true;
    },
    postSuccess: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    postFailure: (state) => {
      state.status = false;
    },
  },
});

export const { postRequest } = postSlice.actions;

export default postSlice.reducer;
