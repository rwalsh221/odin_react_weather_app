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
          errorHandlerProps={errorHandlerProps}
        />
      ) : null}
      {renderWeatherLocations()}
    </section>
  );
};

WeatherCardGrid.propTypes = {
  errorHandlerProps: PropTypes.func.isRequired,
  removeWeatherLocationProps: PropTypes.func.isRequired,
  weatherLocationsProps: PropTypes.instanceOf(Object).isRequired,
  userWeatherLocationProps: PropTypes.instanceOf(Object),
};

WeatherCardGrid.defaultProps = {
  userWeatherLocationProps: undefined,
};

export default WeatherCardGrid;
