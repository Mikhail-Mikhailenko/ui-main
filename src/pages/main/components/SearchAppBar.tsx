import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
                <h2>
                  GOOD BAD CAT
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
                    <ButtonBase className={classes.titleButton}>
                      <Typography variant="subtitle2">
                        Фильмы
                      </Typography>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.titleButton}>
                      <Typography variant="subtitle2">
                        Сериалы
                      </Typography>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.titleButton}>
                      <Typography variant="subtitle2">
                        Мультфильмы
                      </Typography>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.titleButton}>
                      <Typography variant="subtitle2">
                        Подборки
                      </Typography>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase className={classes.titleButton}>
                      <Typography variant="subtitle2">
                        Трейлеры
                      </Typography>
                    </ButtonBase>
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
