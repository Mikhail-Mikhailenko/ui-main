import React, { useEffect } from 'react';

import theme from '../../../styles/theme';
import SearchAppBar from '../components/SearchAppBar';

export default function main() {
  useEffect(() => {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  });

  return (
    <div>
      <SearchAppBar />
    </div>
  );
}
