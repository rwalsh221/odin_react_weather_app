import React, { useState } from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = (props) => {
  // const [elementPosition, setElementPosition] = useState();

  let elementClassName = props.clicked
    ? `${classes.circleTop} ${classes.circleHover} ${classes.red}`
    : `${classes.circleTop}`;

  // const getElementPosition = (element) => {
  //   const elementPosition = element.target.getBoundingClientRect();

  //   setElementPosition({
  //     position: 'fixed',
  //     top: elementPosition.top,
  //     left: elementPosition.left,
  //   });
  // };

  // const animationClickHandler = (element) => {
  //   getElementPosition(element);
  //   props.setHoverClass();
  // };

  return (
    <div
      style={props.animationStyle}
      className={elementClassName}
      onClick={(e) => {
        props.onClickAnimation(e);
      }}
    ></div>
  );
};

export default WeatherCardSmall;
