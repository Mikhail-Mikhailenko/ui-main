import * as React from 'react';

import theme from '../../../styles/theme';
import AppBar from '../components/AppBar';

export default function main() {
  React.useEffect(() => {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  });

  return (
    <div>
      <AppBar />
    </div>
  );
}
