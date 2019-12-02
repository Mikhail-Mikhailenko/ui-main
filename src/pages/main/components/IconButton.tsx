import React, { MouseEventHandler, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useSpring, animated, config } from 'react-spring';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme: Theme) => createStyles({
  icon: {
    fontSize: theme.spacing(9),
    color: theme.palette.common.white,
    transition: '0.8s',
    '&:hover': {
      color: theme.commonColors.green,
      transition: '0.5s',
    },
    cursor: 'pointer',
  },
}));

interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: MouseEventHandler<HTMLElement>,
  icon: React.ComponentType<SvgIconProps>,
}

export default function iconButton(props: IconButtonProps) {
  const classes = useStyles();

  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: config.gentle,
  });

  const {
    icon,
    onClick,
  } = props;

  const MyIconComponent: React.ComponentType<SvgIconProps> = icon;

  return (
    <div
      onClick={() => toggle(!state)}
      onKeyPress={() => toggle(!state)}
      role="button"
    >
      <animated.div
        onClick={onClick}
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.95, 0.85, 0.75, 0.65, 0.55, 0.65, 1],
            })
            .interpolate((result) => `scale(${result})`),
        }}
      >
        <MyIconComponent className={classes.icon} />
      </animated.div>
    </div>
  );
}
