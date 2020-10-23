import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@react-pakistan/util-functions';
import App from './App';

const newTheme = {
  ...theme
};

// modify theme typography
newTheme.typography.fontFamily = 'Roboto';
newTheme.typography.h1 = {
  ...newTheme.typography.h1,
  fontFamily: 'Roboto',
  textAlign: 'center',
};
newTheme.typography.h2 = {
  ...newTheme.typography.h2,
  fontFamily: 'Roboto',
  textAlign: 'center',
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
