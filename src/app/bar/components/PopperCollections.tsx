import React, { useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

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
}));

export default function popperCollections() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'collections-popper' : undefined;

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
          Подборки
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
          <Paper>
            <Typography>In progress...</Typography>
          </Paper>
        </Fade>
      </Popper>
    </div>
  );
}
