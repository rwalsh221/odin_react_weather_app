import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserLocationWeatherCardSmall.module.css';

const UserLocationWeatherCardSmall = ({
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  setAnimationStateProps,
  tempUnitProps,
  currentWeatherDataProps,
}) => {
  const elementClassName = clickedProps
    ? `${classes.cardSmallContainer} ${classes.cardSmallContainerClick}`
    : `${classes.cardSmallContainer}`;

  const tempUnit = tempUnitProps === 'metric' ? '\u2103' : '\u2109';

  return (
    <div
      // TEST FOR TAB INDEX AND KEY PRESS
      style={animationStyleProps}
      className={elementClassName}
      onClick={(e) => {
        onClickAnimationProps(e, setAnimationStateProps);
      }}
      onKeyDown={(e) => {
        onClickAnimationProps(e, setAnimationStateProps);
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
        <div className={classes.cardSmallImg}>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
            alt="weather type"
          />
        </div>
        <p className={classes.cardSmallMore}>Click for more info</p>
      </div>
    </div>
  );
};

UserLocationWeatherCardSmall.propTypes = {
  clickedProps: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  onClickAnimationProps: PropTypes.func.isRequired,
  animationStyleProps: PropTypes.instanceOf(Object),
  setAnimationStateProps: PropTypes.func.isRequired,
  tempUnitProps: PropTypes.string.isRequired,
  currentWeatherDataProps: PropTypes.instanceOf(Object).isRequired,
};

UserLocationWeatherCardSmall.defaultProps = {
  animationStyleProps: undefined,
};

export default UserLocationWeatherCardSmall;
