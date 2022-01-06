import { createSlice } from '@reduxjs/toolkit'

const showSlice = createSlice({
  name: 'show',
  initialState: 6771,
  reducers: {
    changeShow: (state, action) => action.payload,
  },
})

export const showActions = showSlice.actions;

export default showSlice.reducer;