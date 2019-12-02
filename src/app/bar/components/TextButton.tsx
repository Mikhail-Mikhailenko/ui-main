import React, { MouseEventHandler, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

interface TextButtonProps {
  onClick?: MouseEventHandler<HTMLElement>,
  text: string,
}

export default function textButton(props: TextButtonProps) {
  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: config.gentle,
  });

  const {
    text,
    onClick,
  } = props;

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
              output: [1, 0.95, 0.85, 0.75, 0.85, 0.90, 0.95, 1],
            })
            .interpolate((result) => `scale(${result})`),
        }}
      >
        {text}
      </animated.div>
    </div>
  );
}
