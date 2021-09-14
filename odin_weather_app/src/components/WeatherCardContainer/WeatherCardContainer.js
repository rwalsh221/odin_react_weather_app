import React, { useEffect, useState } from 'react';
import classes from './WeatherCardContainer.module.css';

import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import Spinner from '../Spinner/Spinner';

const WeatherCardContainer = ({
  id,
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  weatherLocationProps,
}) => {
  const [weatherData, setWeatherData] = useState({});
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  console.log(weatherLocationProps);
  useEffect(() => {
    const fetchData = async () => {
      if (weatherLocationProps) {
        try {
          // GET CURRENT WEATHER AND LONG LAT FOR FUTUREWEATHER
          const currentWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocationProps.location}&units=${weatherLocationProps.unit}&appid=${apikey}`
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

  const onClickAnimation = (element) => {
    // const el = document.getElementById(`${element.target.id}`);
    // console.log(el);
    const elementPosition = element.target.getBoundingClientRect(); // GET POSITION OF ELEMENT
    // el.style.position = 'fixed';
    // el.style.top = elementPosition.top;
    // el.style.left = elementPosition.left;

    setAnimationObj({
      clicked: true,
      style: {
        position: 'fixed',
        top: elementPosition.top,
        left: elementPosition.left,
      },
    });
    // setAnimationObj({ clicked: true });
  };

  const content = weatherData.currentWeatherData ? (
    <React.Fragment>
      <WeatherCardSmall
        id={id}
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
        // PROPS FOR WEATHER
        weatherLocationProps={weatherData.currentWeatherData.name}
        weatherTypeImgProps={`http://openweathermap.org/img/wn/${weatherData.currentWeatherData.weather[0].icon}@2x.png`}
        weatherTempProps={weatherData.currentWeatherData.main.temp}
      />
      <WeatherCardBig
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
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
      style={{ gridArea: `${weatherLocationProps.weatherCardGridPositon}` }}
    >
      {content}
    </div>
  );
};

export default WeatherCardContainer;
