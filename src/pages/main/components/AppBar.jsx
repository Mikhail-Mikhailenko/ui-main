import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(8),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    margin: 5,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250,
      '&:focus': {
        width: 450,
      },
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
            <h2 style={{
              width: '100%',
              backgroundImage: 'linear-gradient(45deg, #051937 0%, #2EA4A2 15%, #A8EB12 100%)',
              webkitBackgroundClip: 'text',
              webkitTextFillColor: 'transparent',
            }}
            >
              GOOD BAD CAT
            </h2>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="large" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
