import React, { useEffect, useState } from 'react';
import classes from './WeatherCardContainer.module.css';

import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import Spinner from '../Spinner/Spinner';

const WeatherCardContainer = ({
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  weatherLocationProps,
  weatherLocationUnitProps,
  weatherLocationPositionProps,
}) => {
  //   const [weatherLocations, setWeatherLocations] = useState([
  //     { location: 'london', unit: 'metric', weatherCardGridPositon: '5' },
  //   ]);

  const [weatherData, setWeatherData] = useState({});

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  console.log(weatherLocationProps);
  useEffect(() => {
    const fetchData = async () => {
      if (weatherLocationProps) {
        try {
          // GET CURRENT WEATHER AND LONG LAT FOR FUTUREWEATHER
          const currentWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocationProps}&units=${'metric'}&appid=${apikey}`
          );

          let currentWeatherData = await currentWeather.json();

          // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
          const futureWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${
              currentWeatherData.coord.lat
            }&lon=${
              currentWeatherData.coord.lon
            }&exclude=minutely,hourly,alerts&units=${'metric'}&appid=${apikey}`
          );

          let futureWeatherData = await futureWeather.json();

          if (currentWeatherData.cod === 200) {
            setWeatherData({
              currentWeatherData: { ...currentWeatherData },
              futureWeatherData: { ...futureWeatherData },
            });
            // setFutureWeatherData({ ...futureWeatherData });
            // setCurrentWeatherData({ ...currentWeatherData });
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [weatherLocationProps]);

  console.log(weatherData.currentWeatherData);
  console.log(weatherData.futureWeatherData);

  const content = weatherData.currentWeatherData ? (
    <React.Fragment>
      <WeatherCardSmall
        clickedProps={clickedProps}
        onClickAnimationProps={onClickAnimationProps}
        animationStyleProps={animationStyleProps}
        // PROPS FOR WEATHER
        weatherLocationProps={weatherData.currentWeatherData.name}
        weatherTypeImgProps={`http://openweathermap.org/img/wn/${weatherData.currentWeatherData.weather[0].icon}@2x.png`}
        weatherTempProps={weatherData.currentWeatherData.main.temp}
      />
      <WeatherCardBig
        clickedProps={clickedProps}
        onClickAnimationProps={onClickAnimationProps}
        animationStyleProps={animationStyleProps}
        // PROPS FOR WEATHER
        currentWeatherDataProps={weatherData.currentWeatherData}
        futureWeatherDataProps={weatherData.futureWeatherData}
      />
    </React.Fragment>
  ) : (
    <Spinner />
  );

  return (
    <div
      className={classes.cardContainer}
      style={{ gridArea: `${weatherLocationPositionProps}` }}
    >
      {content}
    </div>
  );
};

export default WeatherCardContainer;
