import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './userLocationWeatherCardContainer.module.css';

import CSSGridPosition from '../../utilities/gridposition';
// import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import UserLocationWeatherCardSmall from '../UserLocationWeatherCardSmall/UserLocationWeatherCardSmall';
// import Spinner from '../Spinner/Spinner';

const UserLocationWeatherCardContainer = ({
  fetchWeatherDataProps,
  userWeatherLocationProps,
  removeWeatherLocationProps,
  // errorHandlerProps,
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

  const onClickAnimation = (element) => {
    const elementPosition = element.target.getBoundingClientRect(); // GET POSITION OF ELEMENT

    setAnimationObj({
      clicked: true,
      style: {
        position: 'fixed',
        top: elementPosition.top,
        left: elementPosition.left,
      },
    });
  };

  const onMinimizeAnimation = () => {
    setAnimationObj({
      clicked: 'minimize',
    });
    setTimeout(() => {
      setAnimationObj({
        clicked: false,
      });
    }, 2000);
  };

  const content = weatherData.currentWeatherData ? (
    // <> = react.Fragment shorthand
    <>
      <UserLocationWeatherCardSmall
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
        removeWeatherLocationProps={removeWeatherLocationProps}
        locationIDProps={userWeatherLocationProps.id}
        // PROPS FOR WEATHER
        tempUnitProps={userWeatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
      />
      <WeatherCardBig
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        onMinimizeAnimationProps={onMinimizeAnimation}
        animationStyleProps={animationObj.style}
        // PROPS FOR WEATHER
        tempUnitProps={userWeatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
        futureWeatherDataProps={weatherData.futureWeatherData}
      />
    </>
  ) : (
    <div className={classes.cardSmallContainer}>
      <div className={classes.cardSmallFront}>
        <button
          className={classes.getLocationBtn}
          type="button"
          onClick={getUserLocationProps}
        >
          GET MY WEATHER
        </button>
      </div>
      {/* CARD BACK */}
      <div className={classes.cardSmallBack}>
        <button
          className={classes.getLocationBtn}
          type="button"
          onClick={getUserLocationProps}
        >
          GET MY WEATHER
        </button>
      </div>
    </div>
  );

  return <div className={classes.cardContainer}>{content}</div>;
};

UserLocationWeatherCardContainer.propTypes = {
  fetchWeatherDataProps: PropTypes.func.isRequired,
  // errorHandlerProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  userWeatherLocationProps: PropTypes.instanceOf(Object),
  getUserLocationProps: PropTypes.func.isRequired,
};

UserLocationWeatherCardContainer.defaultProps = {
  userWeatherLocationProps: undefined,
};

export default UserLocationWeatherCardContainer;
