import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Example from './Example';
import { ThemeContextProvider } from './core/themeProvider';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeContextProvider>
          <Example />
        </ThemeContextProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
