import React, { useState, useEffect } from 'react';

import classes from './WeatherLocationContainer.module.css';
import { formatTime, formatDate } from '../../utilities/utilities';

const WeatherLocationContainer = (props) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [futureWeatherData, setFutureWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (props.searchQuery) {
        try {
          // GET CURRENT WEATHER AND LONG LAT FOR FUTUREWEATHER
          const currentWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery.query}&units=${props.unit}&appid=${apikey}`
          );

          let currentWeatherData = await currentWeather.json();

          // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
          const futureWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&exclude=minutely,hourly,alerts&units=${props.unit}&appid=${apikey}`
          );

          let futureWeatherData = await futureWeather.json();

          if (currentWeatherData.cod === 200) {
            setFutureWeatherData({ ...futureWeatherData });
            setCurrentWeatherData({ ...currentWeatherData });
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [props.searchQuery, props.unit]);

  const backgroundGifHandler = (weatherType) => {
    let background;
    switch (weatherType) {
      case 'Snow':
        background = 'https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif';
        break;
      case 'ThunderStorm':
        background =
          'https://media.giphy.com/media/lkimn0qpby38zMJMY/giphy.gif';
        break;
      case 'Drizzle':
        background =
          'https://media.giphy.com/media/l0IrIkq7Q3iRII0hy/giphy.gif';
        break;
      case 'Rain':
        background = 'https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif';
        break;
      case 'Clear':
        background = 'https://media.giphy.com/media/EKpmZuydbsmRy/giphy.gif';
        break;
      case 'Cloudy':
        background =
          'https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif';
        break;
      default:
        background =
          'https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif';
    }

    return background;
  };

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  let content = null;

  let setContentHandler = () => {
    const temperatureUnit = props.unit === 'metric' ? '\u2103' : '\u2109';

    if (currentWeatherData) {
      content = (
        <React.Fragment>
          <div
            style={{
              backgroundImage: `url("${backgroundGifHandler(
                currentWeatherData.weather[0].main
              )}")`,
            }}
            className={classes.weatherLocationContainer}
          >
            <button
              className={classes.btnDelete}
              id={props.searchQuery.id}
              onClick={(e) => {
                props.deleteHandler(e.target.id);
              }}
            >
              X
            </button>

            {/* TITLE */}
            <div className={classes.locationTitle}>
              <h2 className={classes.locationHeader}>
                <ion-icon
                  name="compass-outline"
                  className={classes.compassOutline}
                ></ion-icon>
                {currentWeatherData.name}
              </h2>
              <h3 className={classes.locationDate}>
                {formatDate(currentWeatherData.dt, currentWeatherData.timezone)}
              </h3>
            </div>

            {/* CURRENT WEATHER ICON */}
            <div className={classes.weatherIconContainer}>
              <div className={classes.weatherIcon}>
                <img
                  src={`http://openweathermap.org/img/wn/${futureWeatherData.daily[0].weather[0].icon}@2x.png`}
                  alt={'weather icon'}
                ></img>
              </div>
            </div>

            {/* CURRENT WEATHER TEMP */}
            <div className={classes.temperature}>
              <h2>
                {currentWeatherData.main.temp.toFixed(0)} {`${temperatureUnit}`}
              </h2>
              <div className={classes.hiLoTemperature}>
                <h4>
                  {currentWeatherData.main.temp_max.toFixed(0)}
                  {`${temperatureUnit}`}
                </h4>
                <h4>
                  {currentWeatherData.main.temp_min.toFixed(0)}
                  {`${temperatureUnit}`}
                </h4>
              </div>
            </div>

            {/* CURRENT WEATHER DESCIPTION */}
            <h3 className={classes.weatherType}>
              {currentWeatherData.weather[0].description}
            </h3>

            {/* CHANCE OF RAIN */}
            <div className={classes.chanceRain}>
              <ion-icon name="umbrella-outline"></ion-icon>
              <h4>&ensp;{futureWeatherData.daily[0].pop * 100} %</h4>
            </div>

            {/* FUTURE WEATHER DAY 1 */}
            <div className={classes.day1}>
              <h3>
                {formatDate(
                  futureWeatherData.daily[1].dt,
                  currentWeatherData.timezone
                )}
              </h3>
              <div className={classes.futureImg}>
                <img
                  src={`http://openweathermap.org/img/wn/${futureWeatherData.daily[1].weather[0].icon}@2x.png`}
                  alt="weather icon"
                ></img>
              </div>
              <div className={classes.futureHiLo}>
                <div className={classes.futureHi}>
                  <ion-icon name="chevron-up-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.max.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.min.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
              </div>
            </div>

            {/* WINDSPEED */}
            <div className={classes.windSpeed}>
              <ion-icon
                name="arrow-up-circle-outline"
                style={{
                  transform: `rotate(${currentWeatherData.wind.deg}deg)`,
                }}
              ></ion-icon>
              <h4>&ensp;{currentWeatherData.wind.speed.toFixed(1)} m/s</h4>
            </div>

            {/* FUTURE WEATHER DAY 2 */}
            <div className={classes.day2}>
              <h3>
                {formatDate(
                  futureWeatherData.daily[2].dt,
                  currentWeatherData.timezone
                )}
              </h3>
              <div className={classes.futureImg}>
                <img
                  src={`http://openweathermap.org/img/wn/${futureWeatherData.daily[2].weather[0].icon}@2x.png`}
                  alt="weather icon"
                ></img>
              </div>
              <div className={classes.futureHiLo}>
                <div className={classes.futureHi}>
                  <ion-icon name="chevron-up-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.max.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.min.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
              </div>
            </div>

            {/* SUNRISE SUNSET */}
            <div className={classes.sunriseSunset}>
              <h4>
                {formatTime(
                  currentWeatherData.sys.sunrise,
                  currentWeatherData.timezone
                )}
                &ensp;
              </h4>
              <ion-icon name="chevron-up-outline"></ion-icon>
              <ion-icon name="sunny-outline"></ion-icon>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <h4>
                &ensp;
                {formatTime(
                  currentWeatherData.sys.sunset,
                  currentWeatherData.timezone
                )}
              </h4>
            </div>

            {/* FUTURE WEATHER DAY 3 */}
            <div className={classes.day3}>
              <h3>
                {formatDate(
                  futureWeatherData.daily[3].dt,
                  currentWeatherData.timezone
                )}
              </h3>
              <div className={classes.futureImg}>
                <img
                  src={`http://openweathermap.org/img/wn/${futureWeatherData.daily[3].weather[0].icon}@2x.png`}
                  alt="weather icon"
                ></img>
              </div>
              <div className={classes.futureHiLo}>
                <div className={classes.futureHi}>
                  <ion-icon name="chevron-up-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[3].temp.max.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[3].temp.min.toFixed(0)}
                    {`${temperatureUnit}`}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      content = null;
    }
  };

  setContentHandler();

  return <React.Fragment>{content ? content : null}</React.Fragment>;
};

export default WeatherLocationContainer;
