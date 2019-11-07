import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Main from './pages/main/containers/Main';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById('root'),
);
