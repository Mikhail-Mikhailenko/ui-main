import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
      width: 200,
      '&:focus': {
        width: 400,
      },
    },
  },
  searchPaper: {
    width: 470,
    background: theme.palette.grey[400],
  },
}));

export default function searchResultModal() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState<String>('');
  return (
    <div>
      <ClickAwayListener onClickAway={() => setSearchText('')}>
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
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
      </ClickAwayListener>
      {searchText.length > 0 && (
        <Box
          position="absolute"
          zIndex="modal"
        >
          <Paper elevation={8} className={classes.searchPaper}>
            <ListItem button>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    alt=""
                    width={60}
                    height={80}
                    src="https://img.moyo.ua/img/gallery/4270/84/753881_middle.jpg?1542289350"
                  />
                </Grid>
                <Grid item>
                  <div style={{ paddingLeft: '8px' }}>
                    <Typography variant="h6">
                      Человек-паук: Возвращение домой
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Spider-Man: Far From Home
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      2017 г. ‧ Фэнтези
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem button>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    alt=""
                    width={60}
                    height={80}
                    src="https://st.kp.yandex.net/images/film_iphone/iphone360_195524.jpg"
                  />
                </Grid>
                <Grid item>
                  <div style={{ paddingLeft: '8px' }}>
                    <Typography variant="h6">
                      Я — легенда
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      I Am Legend
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      2007 г. Триллер/Драма
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem button>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    alt=""
                    width={60}
                    height={80}
                    src="https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg"
                  />
                </Grid>
                <Grid item>
                  <div style={{ paddingLeft: '8px' }}>
                    <Typography variant="h6">
                      Начало
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2010 г. ‧ фантастика/Триллер
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      2010 г. ‧ фантастика/Триллер
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem button>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    alt=""
                    width={60}
                    height={80}
                    src="https://st.kp.yandex.net/images/film_iphone/iphone360_3491.jpg"
                  />
                </Grid>
                <Grid item>
                  <div style={{ paddingLeft: '8px' }}>
                    <Typography variant="h6">
                      Ван Хельсинг
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2004 г. ‧ Драма/Фэнтези
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      2004 г. ‧ Драма/Фэнтези
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem button>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    alt=""
                    width={60}
                    height={80}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF1jzaJrdR-tJSgu451pAGh9KMfco3pFKaqENABj-Oy27ubo6o"
                  />
                </Grid>
                <Grid item>
                  <div style={{ paddingLeft: '8px' }}>
                    <Typography variant="h6">
                      Бойцовский клуб
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      1999 г. ‧ Драма/Триллер
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      1999 г. ‧ Драма/Триллер
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <ListItem button>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6">
                    Все результаты
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </Paper>
        </Box>
      )}
    </div>
  );
}
