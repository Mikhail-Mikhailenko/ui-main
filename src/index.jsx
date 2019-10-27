import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Main from './pages/main/containers/Main';
import theme from './theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById('root'),
);
