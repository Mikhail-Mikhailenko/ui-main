import React, { useEffect } from 'react';

import HorizontalPanelWithIcons from '../components/HeaderPanel';
import SearchAppBar from '../components/SearchAppBar';
import theme from '../../../styles/theme';

export default function main() {
  useEffect(() => {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  });

  return (
    <div>
      <SearchAppBar />
      <HorizontalPanelWithIcons />
    </div>
  );
}
