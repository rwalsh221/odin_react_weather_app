import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCardGrid.module.css';

import WeatherCardContainer from '../WeatherCardContainer/WeatherCardContainer';
import UserLocationWeatherCardContainer from '../userLocationWeatherCardContainer/userLocationWeatherCardContainer';

const WeatherCardGrid = ({
  userWeatherLocationProps,
  weatherLocationsProps,
  removeWeatherLocationProps,
  errorHandlerProps,
  getUserLocationProps,
}) => {
  // GET WEATHER DATA FROM API
  const fetchWeatherData = async (
    weatherLocationProps,
    state,
    CSSGridPosition,
    apikey
  ) => {
    try {
      // GET CURRENT WEATHER AND LONG LAT FOR FUTUREWEATHER
      const currentWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocationProps.location}&units=${weatherLocationProps.unit}&appid=${apikey}`
      );

      const currentWeatherData = await currentWeather.json();

      // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
      const futureWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          currentWeatherData.coord.lat
        }&lon=${
          currentWeatherData.coord.lon
        }&exclude=minutely,hourly,alerts&units=${'metric'}&appid=${apikey}`
      );

      const futureWeatherData = await futureWeather.json();

      if (currentWeatherData.cod === 200) {
        state({
          currentWeatherData: { ...currentWeatherData },
          futureWeatherData: { ...futureWeatherData },
        });
      }
    } catch (error) {
      errorHandlerProps();
      CSSGridPosition.addGridPosition(
        weatherLocationProps.weatherCardGridPositon
      );
      console.error(error);
    }
  };

  // RENDER CARDS IF WEATHERLOACTIONPROPS HAS ELEMENTS
  const renderWeatherLocations = () => {
    const content = weatherLocationsProps
      ? weatherLocationsProps.map((element) => (
          <WeatherCardContainer
            key={element.id}
            fetchWeatherDataProps={fetchWeatherData}
            weatherLocationProps={element}
            removeWeatherLocationProps={removeWeatherLocationProps}
            errorHandlerProps={errorHandlerProps}
          />
        ))
      : null;

    return content;
  };

  return (
    <section className={classes.weatherCardGrid}>
      <UserLocationWeatherCardContainer
        fetchWeatherDataProps={fetchWeatherData}
        userWeatherLocationProps={userWeatherLocationProps}
        removeWeatherLocationProps={removeWeatherLocationProps}
        errorHandlerProps={errorHandlerProps}
        getUserLocationProps={getUserLocationProps}
      />
      {renderWeatherLocations()}
    </section>
  );
};

WeatherCardGrid.propTypes = {
  errorHandlerProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  weatherLocationsProps: PropTypes.instanceOf(Object).isRequired,
  userWeatherLocationProps: PropTypes.instanceOf(Object),
  getUserLocationProps: PropTypes.func.isRequired,
};

WeatherCardGrid.defaultProps = {
  userWeatherLocationProps: undefined,
};

export default WeatherCardGrid;
