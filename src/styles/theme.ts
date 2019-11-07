import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    main: {
      backgroundImage: string;
    },
    appBar: {
      backgroundImage: string;
    },
  }
  interface ThemeOptions {
    main: {
      backgroundImage?: string;
    }
    appBar?: {
      backgroundImage?: string;
    }
  }
}

function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
  });
}

export default createTheme({
  main: {
    backgroundImage: 'linear-gradient(to top, #000000, #0d0c0c, #161515, #1c1b1d, #232224, #29292b, #2f3031, #363738, #3f3f40, #474848, #505051, #595959)',
  },
  appBar: {
    backgroundImage: 'linear-gradient(to right, #131314, #181819, #1c1c1d, #202122, #252627, #2b2c2d, #303132, #363738, #3f3f40, #474848, #505051, #595959)',
  },
});
