import React from 'react';
import classes from './WeatherCardSmall.module.css';

const WeatherCardSmall = ({
  id,
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  removeWeatherLocationProps,
  locationIDProps,
  currentWeatherDataProps,
}) => {
  let elementClassName = clickedProps
    ? `${classes.cardSmallContainer} ${classes.cardSmallContainerClick}`
    : `${classes.cardSmallContainer}`;

  const deleteBtnHandler = (e) => {
    console.log(e);
    removeWeatherLocationProps(e.target.id);
  };

  const test = (e) => {
    console.log(e);
  };

  return (
    <div
      id={'card' + id}
      style={animationStyleProps}
      className={elementClassName}
      onClick={(e) => {
        onClickAnimationProps(e);
      }}
    >
      <div className={classes.cardSmall}>
        <h3 className={classes.cardSmallHeading}>
          {currentWeatherDataProps.name}
        </h3>
        <div className={classes.cardSmallImg}>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
            alt={'weather type'}
          />
        </div>
        <p className={classes.cardSmallTemp}>
          {Math.round(currentWeatherDataProps.main.temp)}&#8451;
        </p>
      </div>
      {/* CARD BACK */}
      <div className={classes.cardSmallBack}>
        <h3 className={classes.cardSmallHeading}>
          {currentWeatherDataProps.name}
        </h3>
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
