import React, { useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) => createStyles({
  titleButton: {
    transition: '0.8s',
    '&:hover': {
      color: theme.commonColors.green,
      transition: '0.5s',
    },
  },
  openTitleButton: {
    transition: '0.8s',
    color: theme.commonColors.green,
  },
  popper: {
    position: 'absolute',
    zIndex: 1101,
  },
  paper: {
    width: 550,
  },
  button: {
    '&:hover': {
      color: theme.commonColors.green,
    },
    cursor: 'pointer',
  },
  rightPanel: {
    background: theme.commonColors.grey,
    height: '100%',
  },
  leftPanel: {
    padding: theme.spacing(1),
  },
  centerPanel: {
    paddingTop: theme.spacing(1),
  },
}));

const films = [
  'Аниме',
  'Биографический',
  'Боевик',
  'Вестерн',
  'Военный',
  'Детектив',
  'Детский',
  'Документальный',
  'Драма',
  'Исторический',
  'Кинокомикс',
  'Комедия',
  'Концерт',
  'Короткометражный',
  'Криминал',
  'Мелодрама',
  'Мистика',
  'Музыка',
  'Мультфильм',
  'Мюзикл',
  'Научный',
  'Приключения',
  'Реалити-шоу',
  'Семейный',
  'Спорт',
  'Ток-шоу',
  'Триллер',
  'Ужасы',
  'Фантастика',
  'Фильм-нуар',
  'Фэнтези',
  'Эротика',
];

export default function popperCartoons() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'cartoons-popper' : undefined;

  return (
    <div
      onMouseLeave={handleClose}
      onBlur={handleClose}
    >
      <ButtonBase
        aria-describedby={id}
        className={open ? classes.openTitleButton : classes.titleButton}
        onMouseOver={handleOpen}
        onFocus={handleOpen}
      >
        <Typography variant={open ? 'subtitle1' : 'subtitle2'}>
          Мультфильмы
        </Typography>
      </ButtonBase>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        disablePortal={false}
        className={classes.popper}
        transition
      >
        <Fade in={open} timeout={350}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={5} className={classes.leftPanel}>
                {films.slice(0, films.length / 2).map((film) => (
                  <Typography className={classes.button}>
                    <Box fontStyle="italic">
                      {film}
                    </Box>
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={3} className={classes.centerPanel}>
                {films.slice(films.length / 2, films.length).map((film) => (
                  <Typography className={classes.button}>
                    <Box fontStyle="italic">
                      {film}
                    </Box>
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={4}>
                <div className={classes.rightPanel}>
                  <ListItem button className={classes.button}>
                    <Typography>Новинки</Typography>
                  </ListItem>
                  <ListItem button className={classes.button}>
                    <Typography>Мультфильмы 2019</Typography>
                  </ListItem>
                  <ListItem button className={classes.button}>
                    <Typography>Мультфильмы 2018</Typography>
                  </ListItem>
                  <Divider />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Popper>
    </div>
  );
}
