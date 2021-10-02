import React from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = ({
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  removeWeatherLocationProps,
  locationIDProps,
  tempUnitProps,
  currentWeatherDataProps,
}) => {
  let elementClassName = clickedProps
    ? `${classes.cardSmallContainer} ${classes.cardSmallContainerClick}`
    : `${classes.cardSmallContainer}`;

  const deleteBtnHandler = (e) => {
    removeWeatherLocationProps(e.target.id);
  };

  const tempUnit = tempUnitProps === 'metric' ? '\u2103' : '\u2109';

  return (
    <div
      style={animationStyleProps}
      className={elementClassName}
      onClick={(e) => {
        onClickAnimationProps(e);
      }}
    >
      <div className={classes.cardSmallFront}>
        <h2 className={classes.cardSmallHeading}>
          {currentWeatherDataProps.name}
        </h2>
        <div className={classes.cardSmallImg}>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
            alt={'weather type'}
          />
        </div>
        <p className={classes.cardSmallTemp}>
          {`${Math.round(currentWeatherDataProps.main.temp)}${tempUnit}`};
        </p>
      </div>
      {/* CARD BACK */}
      <div className={classes.cardSmallBack}>
        <h2 className={classes.cardSmallHeading}>
          {currentWeatherDataProps.name}
        </h2>
        <div className={classes.cardSmallBtnContainer}>
          <button onClick={deleteBtnHandler} id={locationIDProps}>
            X
          </button>
        </div>
        <p className={classes.cardSmallMore}>Click for more info</p>
      </div>
    </div>
  );
};

export default WeatherCardSmall;
