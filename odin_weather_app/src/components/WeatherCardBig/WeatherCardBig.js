import React from 'react';
import classes from './WeatherCardBig.module.css';

const WeatherCardBig = (props) => {
  let elementClassName = props.clicked
    ? `${classes.weatherCardBig} ${classes.circleHover} `
    : `${classes.weatherCardBig}`;

  return (
    <div
      className={elementClassName}
      style={props.animationStyle}
      onClick={(e) => {
        props.onClickAnimation(e);
      }}
    >
      {/* CARD ROW 1 */}
      <div className={classes.cardHeading}>
        <h2>
          <ion-icon
            name="compass-outline"
            className={classes.compassOutline}
          ></ion-icon>
          London
        </h2>
        <p className={classes.cardDate}>23/08/2021</p>
      </div>

      {/* CARD ROW 2 */}
      <div className={classes.cardWeatherImage}></div>
      <div className={classes.cardTemperature}>
        <div>21</div>
        <ul>
          <li>23</li>
          <li>19</li>
        </ul>
      </div>
      <div className={classes.cardWeatherDescription}>Broken Clouds</div>

      {/* CARD ROW 345 LEFT */}
      <div className={classes.cardChanceRain}>
        <ion-icon name="umbrella-outline"></ion-icon>
        <p>&ensp;20%</p>
      </div>
      <div className={classes.cardWind}>
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
        <p>&ensp;10 m/s</p>
      </div>
      <div className={classes.cardSun}>
        <p>6:59:04</p>
        <div className={classes.cardSunIcon}>
          <ion-icon name="chevron-up-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <p>6:59:04</p>
      </div>

      {/* CARD ROW 345 RIGHT */}
      <div className={classes.weatherFutureOne}>
        <p>24/08/2021</p>
        <div className={classes.weatherFutureImg}></div>
        <ul>
          <li>23 &#8451;</li>
          <li>13 &#8451;</li>
        </ul>
      </div>
      <div className={classes.weatherFutureTwo}>
        <p>24/08/2021</p>
        <div className={classes.weatherFutureImg}></div>
        <ul>
          <li>23 &#8451;</li>
          <li>13 &#8451;</li>
        </ul>
      </div>
      <div className={classes.weatherFutureThree}>
        <p>24/08/2021</p>
        <div className={classes.weatherFutureImg}></div>
        <ul>
          <li>23 &#8451;</li>
          <li>13 &#8451;</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCardBig;
