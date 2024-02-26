'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { themeToggleActions } from '@/GlobalRedux/Features/themeToggle/themeToggleSlice';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const getCurrentDarkMod = () => {
    if (typeof window !== undefined) {
      const currentDarkMod = JSON.parse(localStorage.getItem('isDarkMod'));
      return currentDarkMod !== null ? currentDarkMod : false;
    }
    return false;
  };

  const [isDarkMod, setIsDarkMod] = useState(getCurrentDarkMod())

  const darkMod = useSelector((state) => state.theme.darkMod);

  const toggleDarkMod = () => {
    dispatch(themeToggleActions.setDarkTheme());
  };
  
  useEffect(() => {
    setIsDarkMod(darkMod)
  }, [darkMod])

  useEffect(() => {
    const currentDarkMod = getCurrentDarkMod()
    console.log(currentDarkMod);

    if (currentDarkMod !== null) {
      dispatch(themeToggleActions.setThemeWhenReload(currentDarkMod))
      setIsDarkMod(currentDarkMod)
    }
  }, [])

  return (
    <div className={isDarkMod ? styles.containerDark : styles.container} onClick={toggleDarkMod}>
      {isDarkMod && (
        <Image src={'/moon.png'} alt="moon" width={14} height={14} />
      )}
      <div className={isDarkMod ? styles.ballDark : styles.ballLight}></div>
      {!isDarkMod && (
        <Image
          src={'/sun.png'}
          alt="sun"
          width={14}
          height={14}
          className={styles.sun}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
