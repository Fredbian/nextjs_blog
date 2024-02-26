'use client';

import { useSelector } from 'react-redux';
import React from 'react';

const ThemeProvider = ({ children }) => {
  const isDarkMod = useSelector((state) => state.theme.darkMod);

  // console.log(isDarkMod);

  return <div className={isDarkMod ? 'dark' : ''}>{children}</div>;
};

export default ThemeProvider;
