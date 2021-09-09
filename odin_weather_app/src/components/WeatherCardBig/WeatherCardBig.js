import React from 'react';
import classes from './WeatherCardBig.module.css';

const WeatherCardBig = ({
  clickedProps,
  onClickAnimationProps,
  animationStyleProps,
  // PROPS FOR WEATHER
  currentWeatherDataProps,
  futureWeatherDataProps,
}) => {
  let elementClassName = clickedProps
    ? `${classes.weatherCardBig} ${classes.circleHover} `
    : `${classes.weatherCardBig}`;

  return (
    <div
      className={elementClassName}
      style={animationStyleProps}
      onClick={(e) => {
        onClickAnimationProps(e);
      }}
    >
      {/* CARD ROW 1 */}
      <div className={classes.cardHeading}>
        <h2>
          <ion-icon
            name="compass-outline"
            className={classes.compassOutline}
          ></ion-icon>
          {currentWeatherDataProps.name}
        </h2>
        <p className={classes.cardDate}>{currentWeatherDataProps.dt}</p>
      </div>

      {/* CARD ROW 2 */}
      <div className={classes.cardWeatherImage}>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
          alt={'current weather'}
        />
      </div>
      <div className={classes.cardTemperature}>
        <div>{Math.round(currentWeatherDataProps.main.temp)}</div>
        <ul>
          <li>{Math.round(currentWeatherDataProps.main.temp_max)}</li>
          <li>{Math.round(currentWeatherDataProps.main.temp_min)}</li>
        </ul>
      </div>
      <div className={classes.cardWeatherDescription}>
        {currentWeatherDataProps.weather[0].description}
      </div>

      {/* CARD ROW 345 LEFT */}
      <div className={classes.cardChanceRain}>
        <ion-icon name="umbrella-outline"></ion-icon>
        <p>&ensp;{Math.round(futureWeatherDataProps.daily[0].pop * 100)}%</p>
      </div>
      <div className={classes.cardWind}>
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
        <p>&ensp;{Math.round(currentWeatherDataProps.wind.speed)} m/s</p>
      </div>
      <div className={classes.cardSun}>
        <p>{currentWeatherDataProps.sys.sunrise}</p>
        <div className={classes.cardSunIcon}>
          <ion-icon name="chevron-up-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <p>{currentWeatherDataProps.sys.sunset}</p>
      </div>

      {/* CARD ROW 345 RIGHT */}
      <div className={classes.weatherFutureOne}>
        <p>{futureWeatherDataProps.daily[1].dt}</p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`http://openweathermap.org/img/wn/${futureWeatherDataProps.daily[1].weather[0].icon}@2x.png`}
            alt={'future weather'}
          />
        </div>
        <ul>
          <li>
            {Math.round(futureWeatherDataProps.daily[1].temp.min)} &#8451;
          </li>
          <li>
            {Math.round(futureWeatherDataProps.daily[1].temp.max)} &#8451;
          </li>
        </ul>
      </div>
      <div className={classes.weatherFutureTwo}>
        <p>{futureWeatherDataProps.daily[2].dt}</p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`http://openweathermap.org/img/wn/${futureWeatherDataProps.daily[2].weather[0].icon}@2x.png`}
            alt={'future weather'}
          />
        </div>
        <ul>
          <li>
            {Math.round(futureWeatherDataProps.daily[2].temp.min)} &#8451;
          </li>
          <li>
            {Math.round(futureWeatherDataProps.daily[2].temp.max)} &#8451;
          </li>
        </ul>
      </div>
      <div className={classes.weatherFutureThree}>
        <p>{futureWeatherDataProps.daily[3].dt}</p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`http://openweathermap.org/img/wn/${futureWeatherDataProps.daily[3].weather[0].icon}@2x.png`}
            alt={'future weather'}
          />
        </div>
        <ul>
          <li>
            {Math.round(futureWeatherDataProps.daily[3].temp.min)} &#8451;
          </li>
          <li>
            {Math.round(futureWeatherDataProps.daily[3].temp.max)} &#8451;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCardBig;
