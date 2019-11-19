import React, { useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  titleButton: {
    color: theme.commonColors.green,
  },
}));

export default function buttonTrailers() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div
      onMouseLeave={handleClose}
      onBlur={handleClose}
    >
      <ButtonBase
        className={open ? classes.titleButton : undefined}
        onMouseOver={handleOpen}
        onFocus={handleOpen}
      >
        <Typography variant={open ? 'subtitle1' : 'subtitle2'}>
          Трейлеры
        </Typography>
      </ButtonBase>
    </div>
  );
}
