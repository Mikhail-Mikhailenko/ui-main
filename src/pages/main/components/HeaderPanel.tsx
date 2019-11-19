import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(10),
  },
  card: {
    width: 130,
    height: 190,
  },
  cardBox: {
    width: 130,
    height: 200,
    opacity: 0.8,
    backgroundColor: theme.palette.grey[900],
  },
  icon: {
    fontSize: theme.spacing(8),
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.commonColors.green,
    },
  },
  iconMatches: {
    fontSize: theme.spacing(5),
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.commonColors.green,
    },
  },
}));

export default function headerPanel() {
  const matchesMax = useMediaQuery('(min-width:1250px)');
  const matchesMedium = useMediaQuery('(min-width:960px)');
  const matchesMin = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <IconButton>
            <NavigateBeforeIcon className={matchesMedium ? classes.icon : classes.iconMatches} />
          </IconButton>
        </Grid>
        <Grid item>
          <ButtonBase>
            <img
              className={classes.card}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
              alt="Contemplative Reptile"
            />
          </ButtonBase>
        </Grid>
        <Grid item>
          <img
            className={classes.card}
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
            alt="Contemplative Reptile"
          />
        </Grid>
        {matchesMin && (
          <Grid item>
            <img
              className={classes.card}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
              alt="Contemplative Reptile"
            />
          </Grid>
        )}
        {matchesMedium && (
          <>
            <Grid item>
              <img
                className={classes.card}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
                alt="Contemplative Reptile"
              />
            </Grid>
            <Grid item>
              <img
                className={classes.card}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
                alt="Contemplative Reptile"
              />
            </Grid>
          </>
        )}
        {matchesMax && (
          <>
            <Grid item>
              <img
                className={classes.card}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
                alt="Contemplative Reptile"
              />
            </Grid>
            <Grid item>
              <img
                className={classes.card}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
                alt="Contemplative Reptile"
              />
            </Grid>
          </>
        )}
        <Grid item>
          <IconButton>
            <NavigateNextIcon className={matchesMedium ? classes.icon : classes.iconMatches} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
