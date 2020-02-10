import React, { useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import THEMES from './themes.json';

export const themes = THEMES;
export const theme = THEMES[1];

const ThemeContext = React.createContext(theme);
const STORAGE_KEY = 'THEME_ID';
export const ThemeContextProvider = ({ children }: { children: any }) => {
  const [themeID, setThemeID] = useState();

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID) setThemeID(storedThemeID);
      else setThemeID(THEMES[1].key);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component: any) {
  return (props: any) => {
    const { themeID, setThemeID } = useContext(ThemeContext);

    const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
    const setTheme = themeID => {
      AsyncStorage.setItem(STORAGE_KEY, themeID);
      setThemeID(themeID);
    };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
