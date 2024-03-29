import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCardBig.module.css';
import { formatDate, formatTime } from '../../utilities/utilities';

const WeatherCardBig = ({
  clickedProps,
  onMinimizeAnimationProps,
  setAnimationStateProps,
  animationStyleProps,
  // PROPS FOR WEATHER
  tempUnitProps,
  currentWeatherDataProps,
  futureWeatherDataProps,
}) => {
  let elementClassName;

  if (clickedProps) {
    elementClassName = `${classes.weatherCardBig} ${classes.circleClick} `;
  }
  if (!clickedProps) {
    elementClassName = `${classes.cardInit}`;
  }
  if (clickedProps === 'minimize') {
    elementClassName = `${classes.weatherCardBig} ${classes.circleMinimize}`;
  }

  const tempUnit = tempUnitProps === 'metric' ? '\u2103' : '\u2109';

  return (
    <div className={elementClassName} style={animationStyleProps}>
      {/* CARD ROW 1 */}
      <div className={classes.cardHeading}>
        <button
          type="button"
          className={classes.minimizeBtn}
          onClick={() => {
            onMinimizeAnimationProps(setAnimationStateProps);
          }}
        >
          X
        </button>
        <h3>
          <ion-icon name="compass-outline" className={classes.compassOutline} />
          {currentWeatherDataProps.name}
        </h3>
        <p className={classes.cardDate}>
          {formatDate(
            currentWeatherDataProps.dt,
            currentWeatherDataProps.timezone
          )}
        </p>
      </div>

      {/* CARD ROW 2 */}
      <div className={classes.cardWeatherImage}>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeatherDataProps.weather[0].icon}@2x.png`}
          alt="current weather"
        />
      </div>
      <div className={classes.cardTemperature}>
        <div>{`${Math.round(
          currentWeatherDataProps.main.temp
        )}${tempUnit}`}</div>
        <ul>
          <li>{`${Math.round(
            currentWeatherDataProps.main.temp_max
          )}${tempUnit}`}</li>
          <li>{`${Math.round(
            currentWeatherDataProps.main.temp_min
          )}${tempUnit}`}</li>
        </ul>
      </div>
      <div className={classes.cardWeatherDescription}>
        {currentWeatherDataProps.weather[0].description}
      </div>

      {/* CARD ROW 345 LEFT */}
      <div className={classes.cardChanceRain}>
        <ion-icon name="umbrella-outline" />
        <p>&ensp;{Math.round(futureWeatherDataProps.daily[0].pop * 100)}%</p>
      </div>
      <div className={classes.cardWind}>
        <ion-icon
          name="arrow-up-circle-outline"
          style={{
            transform: `rotate(${currentWeatherDataProps.wind.deg}deg)`,
          }}
        />
        <p>&ensp;{Math.round(currentWeatherDataProps.wind.speed)} m/s</p>
      </div>
      <div className={classes.cardSun}>
        <p>
          {formatTime(
            currentWeatherDataProps.sys.sunrise,
            currentWeatherDataProps.timezone
          )}
        </p>
        <div className={classes.cardSunIcon}>
          <ion-icon name="chevron-up-outline" />
          <ion-icon name="sunny-outline" />
          <ion-icon name="chevron-down-outline" />
        </div>
        <p>
          {formatTime(
            currentWeatherDataProps.sys.sunset,
            currentWeatherDataProps.timezone
          )}
        </p>
      </div>

      {/* CARD ROW 345 RIGHT */}
      <div className={classes.weatherFutureOne}>
        <p className={classes.weatherFutureDate}>
          {formatDate(
            futureWeatherDataProps.daily[1].dt,
            currentWeatherDataProps.timezone
          )}
        </p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`https://openweathermap.org/img/wn/${futureWeatherDataProps.daily[1].weather[0].icon}@2x.png`}
            alt="future weather"
          />
        </div>
        <ul>
          <li>
            <ion-icon
              name="chevron-up-outline"
              className={classes.weatherFutureIconUp}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[1].temp.max
            )}${tempUnit}`}
          </li>
          <li>
            <ion-icon
              name="chevron-down-outline"
              className={classes.weatherFutureIconDown}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[1].temp.min
            )}${tempUnit}`}
          </li>
        </ul>
      </div>
      <div className={classes.weatherFutureTwo}>
        <p className={classes.weatherFutureDate}>
          {formatDate(
            futureWeatherDataProps.daily[2].dt,
            currentWeatherDataProps.timezone
          )}
        </p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`https://openweathermap.org/img/wn/${futureWeatherDataProps.daily[2].weather[0].icon}@2x.png`}
            alt="future weather"
          />
        </div>
        <ul>
          <li>
            <ion-icon
              name="chevron-up-outline"
              className={classes.weatherFutureIconUp}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[2].temp.max
            )}${tempUnit}`}
          </li>
          <li>
            <ion-icon
              name="chevron-down-outline"
              className={classes.weatherFutureIconDown}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[2].temp.min
            )}${tempUnit}`}
          </li>
        </ul>
      </div>
      <div className={classes.weatherFutureThree}>
        <p>
          {formatDate(
            futureWeatherDataProps.daily[3].dt,
            currentWeatherDataProps.timezone
          )}
        </p>
        <div className={classes.weatherFutureImg}>
          <img
            src={`https://openweathermap.org/img/wn/${futureWeatherDataProps.daily[3].weather[0].icon}@2x.png`}
            alt="future weather"
          />
        </div>
        <ul>
          <li>
            <ion-icon
              name="chevron-up-outline"
              className={classes.weatherFutureIconUp}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[3].temp.min
            )}${tempUnit}`}
          </li>
          <li>
            <ion-icon
              name="chevron-down-outline"
              className={classes.weatherFutureIconUp}
            />
            {`${Math.round(
              futureWeatherDataProps.daily[3].temp.max
            )}${tempUnit}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

WeatherCardBig.propTypes = {
  clickedProps: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  onMinimizeAnimationProps: PropTypes.func.isRequired,
  setAnimationStateProps: PropTypes.func.isRequired,
  animationStyleProps: PropTypes.instanceOf(Object),
  tempUnitProps: PropTypes.string.isRequired,
  currentWeatherDataProps: PropTypes.instanceOf(Object).isRequired,
  futureWeatherDataProps: PropTypes.instanceOf(Object).isRequired,
};

WeatherCardBig.defaultProps = {
  animationStyleProps: undefined,
};

export default WeatherCardBig;
