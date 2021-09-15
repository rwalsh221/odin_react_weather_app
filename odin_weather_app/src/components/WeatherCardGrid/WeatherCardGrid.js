import React from 'react';
import classes from './WeatherCardGrid.module.css';

import WeatherCardContainer from '../WeatherCardContainer/WeatherCardContainer';

const WeatherCardGrid = ({
  userWeatherLocationProps,
  weatherLocationsProps,
  removeWeatherLocationProps,
}) => {
  // RENDER CARDS IF WEATHERLOACTIONPROPS HAS ELEMENTS
  const renderWeatherLocations = () => {
    const content = weatherLocationsProps
      ? weatherLocationsProps.map((element, index) => {
          console.log(element);
          return (
            <WeatherCardContainer
              key={element.id}
              weatherLocationProps={element}
              removeWeatherLocationProps={removeWeatherLocationProps}
            />
          );
        })
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

export default WeatherCardGrid;
