import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import PopperCartoons from './PopperCartoons';
import PopperCollections from './PopperCollections';
import PopperFilms from './PopperFilms';
import PopperSeries from './PopperSeries';
import PopperTrailers from './PopperTrailers';
import SearchResultModal from './SearchResultModal';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    color: theme.commonColors.green,
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundImage: theme.appBar.backgroundImage,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    '&:hover': {
      color: theme.commonColors.green,
    },
  },
  gridContainer: {
    flexWrap: 'nowrap',
  },
}));

export default function searchAppBar() {
  const matches = useMediaQuery('(min-width:900px)');
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
            {!matches && (
              <div className={classes.menuButton}>
                <IconButton color="inherit">
                  <MenuIcon />
                </IconButton>
              </div>
            )}
            <Grid item sm={2}>
              <h2 className={classes.logo}>
                SomeLogo
              </h2>
            </Grid>
            {matches && (
              <Grid item sm={6}>
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
            )}
            <Grid item>
              <SearchResultModal />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
