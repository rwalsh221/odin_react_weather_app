import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCardContainer.module.css';

import CSSGridPosition from '../../utilities/gridposition';
import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import Spinner from '../Spinner/Spinner';

const WeatherCardContainer = ({
  onClickAnimationProps,
  onMinimizeAnimationProps,
  fetchWeatherDataProps,
  weatherLocationProps,
  removeWeatherLocationProps,
}) => {
  const [weatherData, setWeatherData] = useState({});
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });

  const apikey = 'b0ea585de7608342c1947e606b266dd4';

  useEffect(() => {
    if (weatherLocationProps) {
      fetchWeatherDataProps(
        weatherLocationProps,
        setWeatherData,
        CSSGridPosition,
        apikey
      );
    }
  }, [fetchWeatherDataProps, weatherLocationProps]);

  const onClickAnimation = onClickAnimationProps;

  const onMinimizeAnimation = onMinimizeAnimationProps;

  const content = weatherData.currentWeatherData ? (
    // <> = react.Fragment shorthand
    <>
      <WeatherCardSmall
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
        setAnimationStateProps={setAnimationObj}
        removeWeatherLocationProps={removeWeatherLocationProps}
        locationIDProps={weatherLocationProps.id}
        // PROPS FOR WEATHER
        tempUnitProps={weatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
      />
      <WeatherCardBig
        clickedProps={animationObj.clicked}
        onMinimizeAnimationProps={onMinimizeAnimation}
        setAnimationStateProps={setAnimationObj}
        animationStyleProps={animationObj.style}
        // PROPS FOR WEATHER
        tempUnitProps={weatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
        futureWeatherDataProps={weatherData.futureWeatherData}
      />
    </>
  ) : (
    <Spinner />
  );

  return (
    <div
      className={classes.cardContainer}
      style={{ gridArea: `${weatherLocationProps.weatherCardGridPositon}` }}
    >
      {content}
    </div>
  );
};

WeatherCardContainer.propTypes = {
  onClickAnimationProps: PropTypes.func.isRequired,
  onMinimizeAnimationProps: PropTypes.func.isRequired,
  fetchWeatherDataProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  weatherLocationProps: PropTypes.instanceOf(Object).isRequired,
};

export default WeatherCardContainer;
