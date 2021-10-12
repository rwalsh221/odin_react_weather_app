import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './userLocationWeatherCardContainer.module.css';

import CSSGridPosition from '../../utilities/gridposition';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import UserLocationWeatherCardSmall from '../UserLocationWeatherCardSmall/UserLocationWeatherCardSmall';
import Spinner from '../Spinner/Spinner';

const UserLocationWeatherCardContainer = ({
  fetchWeatherDataProps,
  onClickAnimationProps,
  onMinimizeAnimationProps,
  userWeatherLocationProps,
  removeWeatherLocationProps,

  getUserLocationProps,
}) => {
  const [weatherData, setWeatherData] = useState({});
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });
  const [loading, setLoading] = useState(false);

  const apikey = 'b0ea585de7608342c1947e606b266dd4';

  useEffect(() => {
    if (userWeatherLocationProps) {
      fetchWeatherDataProps(
        userWeatherLocationProps,
        setWeatherData,
        CSSGridPosition,
        apikey
      );
    }
  }, [fetchWeatherDataProps, userWeatherLocationProps]);

  const onClickAnimation = onClickAnimationProps;

  const onMinimizeAnimation = onMinimizeAnimationProps;

  const getLocationClickHandler = () => {
    setLoading(true);
    getUserLocationProps();
  };

  const initContent = loading ? (
    <Spinner />
  ) : (
    <div className={classes.cardSmallContainer}>
      <div className={classes.cardSmallFront}>
        <button
          className={classes.getLocationBtn}
          type="button"
          onClick={getLocationClickHandler}
        >
          GET MY WEATHER
        </button>
      </div>
      {/* CARD BACK */}
      <div className={classes.cardSmallBack}>
        <button
          className={classes.getLocationBtn}
          type="button"
          onClick={getLocationClickHandler}
        >
          GET MY WEATHER
        </button>
      </div>
    </div>
  );

  const weatherContent = weatherData.currentWeatherData ? (
    // <> = react.Fragment shorthand
    <>
      <UserLocationWeatherCardSmall
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        setAnimationStateProps={setAnimationObj}
        animationStyleProps={animationObj.style}
        removeWeatherLocationProps={removeWeatherLocationProps}
        locationIDProps={userWeatherLocationProps.id}
        // PROPS FOR WEATHER
        tempUnitProps={userWeatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
      />
      <WeatherCardBig
        clickedProps={animationObj.clicked}
        onMinimizeAnimationProps={onMinimizeAnimation}
        setAnimationStateProps={setAnimationObj}
        animationStyleProps={animationObj.style}
        // PROPS FOR WEATHER
        tempUnitProps={userWeatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
        futureWeatherDataProps={weatherData.futureWeatherData}
      />
    </>
  ) : null;

  return (
    <div className={classes.cardContainer}>
      {weatherData.currentWeatherData ? weatherContent : initContent}
    </div>
  );
};

UserLocationWeatherCardContainer.propTypes = {
  fetchWeatherDataProps: PropTypes.func.isRequired,
  onClickAnimationProps: PropTypes.func.isRequired,
  onMinimizeAnimationProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  userWeatherLocationProps: PropTypes.instanceOf(Object),
  getUserLocationProps: PropTypes.func.isRequired,
};

UserLocationWeatherCardContainer.defaultProps = {
  userWeatherLocationProps: undefined,
};

export default UserLocationWeatherCardContainer;
