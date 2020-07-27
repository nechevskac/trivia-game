import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from '@material-ui/core';

import GlobalTheme from './global-theme';

import RootWrapper from './root-wrapper';
import Welcome from './components/welcome';

const App = () => {
  return (
    <RootWrapper>
      <Welcome />
    </RootWrapper>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={GlobalTheme}>
      <App />
    </MuiThemeProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
