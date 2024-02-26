import { createSlice } from '@reduxjs/toolkit';

const themeToggleSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMod: false,
  },
  reducers: {
    setThemeWhenReload: (state, action) => {
      state.darkMod = action.payload
    },
    setDarkTheme: (state) => {
      state.darkMod = !state.darkMod;
      localStorage.setItem('isDarkMod', JSON.stringify(state.darkMod));
    },
  },
});

export const themeToggleActions = themeToggleSlice.actions;

export default themeToggleSlice;
