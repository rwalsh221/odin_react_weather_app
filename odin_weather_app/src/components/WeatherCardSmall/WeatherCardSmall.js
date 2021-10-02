import React from 'react';
import PropTypes from 'prop-types';
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
  const elementClassName = clickedProps
    ? `${classes.cardSmallContainer} ${classes.cardSmallContainerClick}`
    : `${classes.cardSmallContainer}`;

  const deleteBtnHandler = (e) => {
    removeWeatherLocationProps(e.target.id);
  };

  const tempUnit = tempUnitProps === 'metric' ? '\u2103' : '\u2109';

  return (
    <div
      // TEST FOR TAB INDEX AND KEY PRESS
      style={animationStyleProps}
      className={elementClassName}
      onClick={(e) => {
        onClickAnimationProps(e);
      }}
      onKeyDown={(e) => {
        onClickAnimationProps(e);
      }}
      role="button"
      tabIndex={0}
    >
      <div className={classes.cardSmallFront}>
        <h2 className={classes.cardSmallHeading}>
          {currentWeatherDataProps.name}
        </h2>
        <div className={classes.cardSmallImg}>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
            alt="weather type"
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
          <button type="button" onClick={deleteBtnHandler} id={locationIDProps}>
            X
          </button>
        </div>
        <p className={classes.cardSmallMore}>Click for more info</p>
      </div>
    </div>
  );
};

WeatherCardSmall.propTypes = {
  clickedProps: PropTypes.bool.isRequired,
  onClickAnimationProps: PropTypes.func.isRequired,
  animationStyleProps: PropTypes.objectOf(PropTypes.obj()).isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  locationIDProps: PropTypes.string.isRequired,
  tempUnitProps: PropTypes.string.isRequired,
  currentWeatherDataProps: PropTypes.objectOf(PropTypes.obj()).isRequired,
};

export default WeatherCardSmall;
