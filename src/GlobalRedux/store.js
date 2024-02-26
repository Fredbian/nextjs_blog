'use client'

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import themeToggleSlice from "./Features/themeToggle/themeToggleSlice"

const rootReducer = combineReducers({
  // forgotPasswordPagenation: forgotPasswordPagenationReducer
  // Add more reducers here
  theme: themeToggleSlice.reducer,

})

export const store = configureStore({
  reducer: rootReducer
})