import React, { useEffect } from 'react';

import theme from '../../../theme/theme';
import AppBar from '../components/AppBar';

export default function main() {
  useEffect(() => {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  });

  return (
    <div>
      <AppBar />
    </div>
  );
}
