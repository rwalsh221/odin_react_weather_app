import React, { useState } from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = (props) => {
  const [elementPosition, setElementPosition] = useState();

  let style = props.hover
    ? `${classes.circleTop} ${classes.circleHover} ${classes.red}`
    : `${classes.circleTop}`;

  const getElementPosition = (element) => {
    const elementPosition = element.target.getBoundingClientRect();

    setElementPosition({
      position: 'fixed',
      top: elementPosition.top,
      left: elementPosition.left,
    });
  };

  return (
    <div
      style={elementPosition}
      className={style}
      onClick={(e) => {
        getElementPosition(e);
        props.setHoverClass();
      }}
    ></div>
  );
};

export default WeatherCardSmall;
