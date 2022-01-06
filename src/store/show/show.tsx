import { createSlice } from '@reduxjs/toolkit'

const showSlice = createSlice({
  name: 'show',
  initialState: 6771,
  // Added optional reducer in the case that show will change
  reducers: {
    changeShow: (state, action) => action.payload,
  },
})

export const showActions = showSlice.actions;

export default showSlice.reducer;