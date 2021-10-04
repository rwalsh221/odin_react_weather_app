import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCardGrid.module.css';

import WeatherCardContainer from '../WeatherCardContainer/WeatherCardContainer';

const WeatherCardGrid = ({
  userWeatherLocationProps,
  weatherLocationsProps,
  removeWeatherLocationProps,
  errorHandlerProps,
}) => {
  // RENDER CARDS IF WEATHERLOACTIONPROPS HAS ELEMENTS
  const renderWeatherLocations = () => {
    const content = weatherLocationsProps
      ? weatherLocationsProps.map((element) => (
          <WeatherCardContainer
            key={element.id}
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
      {userWeatherLocationProps ? (
        <WeatherCardContainer
          weatherLocationProps={userWeatherLocationProps}
          removeWeatherLocationProps={removeWeatherLocationProps}
        />
      ) : null}
      {renderWeatherLocations()}
    </section>
  );
};

WeatherCardGrid.propTypes = {
  errorHandlerProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  weatherLocationsProps: PropTypes.objectOf(PropTypes.obj()).isRequired,
  userWeatherLocationProps: PropTypes.objectOf(PropTypes.obj()).isRequired,
};

export default WeatherCardGrid;
