import React from 'react';

import theme from '../../../theme/theme';
import AppBar from '../components/AppBar';

class Main extends React.Component {
  componentDidMount() {
    document.body.style.backgroundImage = theme.main.backgroundImage;
  }

  render() {
    return (
      <div>
        <AppBar />
      </div>
    );
  }
}

export default Main;
