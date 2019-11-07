import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
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

export default function searchResultModal() {
  const classes = useStyles();
  const opt = [{}, {}];
  return (
    <Autocomplete
      getOptionLabel={() => 'jkhkljh'}
      filterOptions={(x) => x}
      options={opt}
      autoComplete
      includeInputInList
      freeSolo
      disableOpenOnFocus
      renderInput={(params) => (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="large" />
          </div>
          <InputBase
            {...params}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value="fsdsd"
          />
        </div>
      )}
      renderOption={(option) => (
        <Grid container alignItems="center">
          <Grid item>
            <img alt="" width={60} height={80} src="https://img.moyo.ua/img/gallery/4270/84/753881_middle.jpg?1542289350" />
          </Grid>
          <Grid item>
            <div style={{ paddingLeft: '8px', width: 400 }}>
              <Typography variant="h6">
                Человек-паук: Возвращение домой
              </Typography>
              <Typography variant="h6" color="textSecondary">
                2017 г. ‧ Фэнтези
              </Typography>
              <Typography variant="body1" color="textSecondary">
                2017 г. ‧ Фэнтези
              </Typography>
            </div>
          </Grid>
        </Grid>
      )}
    />
  );
}
