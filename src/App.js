
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import theme from './components/utils/theme';

const App=() =>{
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
