import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SearchResultModal from './SearchResultModal';
import PopperFilms from './PopperFilms';
import PopperSeries from './PopperSeries';
import PopperCartoons from './PopperCartoons';
import PopperCollections from './PopperCollections';
import PopperTrailers from './PopperTrailers';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    color: theme.commonColors.green,
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
  titleButton: {
    '&:hover': {
      color: theme.commonColors.green,
    },
  },
  gridContainer: {
    flexWrap: 'nowrap',
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
          <Grid
            className={classes.gridContainer}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <div className={classes.title}>
                <h2 className={classes.logo}>
                  Some Logo
                </h2>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.title}>
                <Grid
                  className={classes.gridContainer}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <PopperFilms />
                  </Grid>
                  <Grid item>
                    <PopperSeries />
                  </Grid>
                  <Grid item>
                    <PopperCartoons />
                  </Grid>
                  <Grid item>
                    <PopperCollections />
                  </Grid>
                  <Grid item>
                    <PopperTrailers />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              <SearchResultModal />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
