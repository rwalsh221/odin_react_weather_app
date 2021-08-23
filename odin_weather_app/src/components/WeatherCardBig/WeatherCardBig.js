import React from 'react';
import classes from './WeatherCardBig.module.css';

const WeatherCardBig = (props) => {
  let elementClassName = props.clicked
    ? `${classes.circleBottom} ${classes.circleHover} `
    : `${classes.circleTop}`;

  return (
    <div
      className={elementClassName}
      style={props.animationStyle}
      onClick={(e) => {
        props.onClickAnimation(e);
      }}
    ></div>
  );
};

export default WeatherCardBig;
