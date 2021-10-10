import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCardContainer.module.css';

import CSSGridPosition from '../../utilities/gridposition';
import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import Spinner from '../Spinner/Spinner';

const WeatherCardContainer = ({
  fetchDataProps,
  weatherLocationProps,
  removeWeatherLocationProps,
  // errorHandlerProps,
}) => {
  const [weatherData, setWeatherData] = useState({});
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });

  const apikey = 'b0ea585de7608342c1947e606b266dd4';

  useEffect(() => {
    if (weatherLocationProps) {
      fetchDataProps(
        weatherLocationProps,
        setWeatherData,
        CSSGridPosition,
        apikey
      );
    }
  }, [fetchDataProps, weatherLocationProps]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (weatherLocationProps) {
  //       try {
  //         // GET CURRENT WEATHER AND LONG LAT FOR FUTUREWEATHER
  //         const currentWeather = await fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocationProps.location}&units=${weatherLocationProps.unit}&appid=${apikey}`
  //         );

  //         const currentWeatherData = await currentWeather.json();

  //         // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
  //         const futureWeather = await fetch(
  //           `https://api.openweathermap.org/data/2.5/onecall?lat=${
  //             currentWeatherData.coord.lat
  //           }&lon=${
  //             currentWeatherData.coord.lon
  //           }&exclude=minutely,hourly,alerts&units=${'metric'}&appid=${apikey}`
  //         );

  //         const futureWeatherData = await futureWeather.json();

  //         if (currentWeatherData.cod === 200) {
  //           setWeatherData({
  //             currentWeatherData: { ...currentWeatherData },
  //             futureWeatherData: { ...futureWeatherData },
  //           });
  //         }
  //       } catch (error) {
  //         errorHandlerProps();
  //         CSSGridPosition.addGridPosition(
  //           weatherLocationProps.weatherCardGridPositon
  //         );
  //         console.error(error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [weatherLocationProps, errorHandlerProps]);

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
      <WeatherCardSmall
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
        removeWeatherLocationProps={removeWeatherLocationProps}
        locationIDProps={weatherLocationProps.id}
        // PROPS FOR WEATHER
        tempUnitProps={weatherLocationProps.unit}
        currentWeatherDataProps={weatherData.currentWeatherData}
      />
      <WeatherCardBig
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        onMinimizeAnimationProps={onMinimizeAnimation}
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
  fetchDataProps: PropTypes.func.isRequired,
  // errorHandlerProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  weatherLocationProps: PropTypes.instanceOf(Object).isRequired,
};

export default WeatherCardContainer;
