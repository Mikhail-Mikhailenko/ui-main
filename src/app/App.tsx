import React, { useEffect } from 'react';
import AppBar from './bar/containers/AppBar';
import Main from '../pages/main/containers/Main';
import theme from '../styles/theme';

export default function app() {
  useEffect(() => {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  });

  return (
    <div>
      <AppBar />
      <Main />
    </div>
  );
}
