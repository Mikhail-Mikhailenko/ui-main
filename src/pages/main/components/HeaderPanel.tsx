import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(9),
  },
  card: {
    width: 140,
    height: 200,
  },
  cardBox: {
    width: 140,
    height: 200,
    opacity: 0.8,
    backgroundColor: theme.palette.grey[900],
  },
  gridContainer: {
    flexWrap: 'nowrap',
  },
  icon: {
    fontSize: theme.spacing(8),
    color: theme.palette.common.white,
  },
}));

export default function headerPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <IconButton>
            <NavigateBeforeIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item>
          <ButtonBase>
            <img
              className={classes.card}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg"
              alt="Contemplative Reptile"
            />
            <Box
              position="absolute"
              zIndex="modal"
            >
              <div className={classes.cardBox}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <PlayCircleFilledIcon />
                  </Grid>
                  <Grid item>
                    <Typography>
                      Однажды в голивуде
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </ButtonBase>
        </Grid>
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
        <Grid item>
          <IconButton>
            <NavigateNextIcon className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
