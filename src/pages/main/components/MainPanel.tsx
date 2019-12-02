import React, { useCallback, useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useTransition, animated, config } from 'react-spring';
import IconButton from './IconButton';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(9),
  },
  card: {
    padding: '8px',
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
  gridContainer: {
    flexWrap: 'nowrap',
  },
}));

const images = [
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Once_Upon_a_Time_in_Hollywood.jpg/269px-Once_Upon_a_Time_in_Hollywood.jpg',
];

const images1 = [
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
  'https://upload.wikimedia.org/wikipedia/ru/5/5a/Spider-Man_Homecoming_logo.jpg',
];

const images2 = [
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
  'https://thumbs.filmix.co/posters/thumbs/w220/rik-i-morti-serial-2013_81412_0.jpg',
];

const blocks = [
  images,
  images1,
  images2,
];

export default function headerPanel() {
  const [value, setValue] = useState({ index: 0, side: '' });

  const onClickLeft = useCallback(
    () => setValue({ index: (value.index + 1) % 3, side: 'left' }), [value],
  );

  const onClickRight = useCallback(
    () => setValue({ index: (value.index + 1) % 3, side: 'right' }), [value],
  );

  const transitions = useTransition(value.index, (p) => p, {
    leave: {
      opacity: 0,
      transform: value.side === 'left' ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)',
      position: 'absolute',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
    },
    from: {
      opacity: 0,
      transform: value.side === 'right' ? 'translate3d(-100%,0,0)' : 'translate3d(100%,0,0)',
    },
    config: config.slow,
    initial: {},
  });

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
          <IconButton icon={NavigateBeforeIcon} onClick={onClickLeft} />
        </Grid>
        <Grid>
          {transitions.map(({ item, props, key }) => (
            <animated.div style={props} key={key}>
              {blocks[item].map((image) => (
                <ButtonBase>
                  <img
                    className={classes.card}
                    src={image}
                    alt="Contemplative Reptile"
                  />
                </ButtonBase>
              ))}
            </animated.div>
          ))}
        </Grid>
        <Grid item>
          <IconButton icon={NavigateNextIcon} onClick={onClickRight} />
        </Grid>
      </Grid>
    </div>
  );
}
