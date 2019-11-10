import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SearchResultModal from './SearchResultModal';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundImage: theme.appBar.backgroundImage,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function searchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.title}>
            <h2>
              GOOD BAD CAT
            </h2>
          </div>
          <SearchResultModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}
