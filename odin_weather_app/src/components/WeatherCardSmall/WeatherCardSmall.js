import React from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = ({
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
}) => {
  let elementClassName = clickedProps
    ? `${classes.cardSmallContainer} ${classes.cardSmallContainerHover} ${classes.red}`
    : `${classes.cardSmallContainer}`;

  return (
    <div
      style={animationStyleProps}
      className={elementClassName}
      onClick={(e) => {
        onClickAnimationProps(e);
      }}
    >
      <div className={classes.cardSmall}>
        <h3 className={classes.cardSmallHeading}>LONDON</h3>
        <div className={classes.cardSmallImg}></div>
        <p className={classes.cardSmallTemp}>20&#8451;</p>
      </div>
      {/* CARD BACK */}
      <div className={classes.cardSmallBack}>
        <h3 className={classes.cardSmallHeading}>LONDON</h3>
        <div className={classes.cardSmallBtnContainer}>
          <button>X</button>
        </div>
        <p className={classes.cardSmallMore}>Click for more info</p>
      </div>
    </div>
  );
};

export default WeatherCardSmall;
