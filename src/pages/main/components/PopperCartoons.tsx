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

const useStyles = makeStyles((theme: Theme) => createStyles({
  titleButton: {
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
        className={open ? classes.titleButton : undefined}
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
                <Typography className={classes.button}>Аниме</Typography>
                <Typography className={classes.button}>Биографический</Typography>
                <Typography className={classes.button}>Боевик</Typography>
                <Typography className={classes.button}>Вестерн</Typography>
                <Typography className={classes.button}>Военный</Typography>
                <Typography className={classes.button}>Детектив</Typography>
                <Typography className={classes.button}>Детский</Typography>
                <Typography className={classes.button}>Документальный</Typography>
                <Typography className={classes.button}>Драма</Typography>
                <Typography className={classes.button}>Исторический</Typography>
                <Typography className={classes.button}>Кинокомикс</Typography>
                <Typography className={classes.button}>Комедия</Typography>
                <Typography className={classes.button}>Концерт</Typography>
                <Typography className={classes.button}>Короткометражный</Typography>
                <Typography className={classes.button}>Криминал</Typography>
                <Typography className={classes.button}>Мелодрама</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centerPanel}>
                <Typography className={classes.button}>Мистика</Typography>
                <Typography className={classes.button}>Музыка</Typography>
                <Typography className={classes.button}>Мультфильм</Typography>
                <Typography className={classes.button}>Мюзикл</Typography>
                <Typography className={classes.button}>Научный</Typography>
                <Typography className={classes.button}>Приключения</Typography>
                <Typography className={classes.button}>Реалити-шоу</Typography>
                <Typography className={classes.button}>Семейный</Typography>
                <Typography className={classes.button}>Спорт</Typography>
                <Typography className={classes.button}>Ток-шоу</Typography>
                <Typography className={classes.button}>Триллер</Typography>
                <Typography className={classes.button}>Ужасы</Typography>
                <Typography className={classes.button}>Фантастика</Typography>
                <Typography className={classes.button}>Фильм-нуар</Typography>
                <Typography className={classes.button}>Фэнтези</Typography>
                <Typography className={classes.button}>Эротика</Typography>
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
