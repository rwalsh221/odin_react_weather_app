import React from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = (props) => {
  let style = props.hover
    ? `${classes.circleTop} ${classes.circleHover} ${classes.red}`
    : `${classes.circleTop}`;
  return <div className={style} onClick={props.setHoverClass}></div>;
};

export default WeatherCardSmall;
