import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { mode: null },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  }
});

export const { setMode } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});