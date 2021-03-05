import React, { useState, useEffect, useCallback } from 'react';

import classes from './Main.module.css';

const Main = (props) => {
  const [location, setLocation] = useState(null);

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  let content = location;

  const setContentHandler = (
    locationTitle,
    temp,
    tempMin,
    tempMax,
    weatherDescription,
    feelsLike,
    windSpeed,
    sunrise,
    sunset
  ) => {
    content = (
      <React.Fragment>
        <div className={classes.locationTitle}>
          <h2 className={classes.locationHeader}>
            <ion-icon
              name="compass-outline"
              className={classes.compassOutline}
            ></ion-icon>
            {locationTitle}
          </h2>
          <h3 className={classes.locationDate}>02/03/2021</h3>
        </div>
        <div className={classes.weatherIcon}>
          <ion-icon name="rainy-outline"></ion-icon>
        </div>
        <div className={classes.temperature}>
          <h2>{temp} &#x2103;</h2>
          <div className={classes.hiLoTemperature}>
            <h4>{tempMax} &#x2103;</h4>
            <h4>{tempMin} &#x2103;</h4>
          </div>
        </div>
        <h3 className={classes.weatherType}>{weatherDescription}</h3>
        <div className={classes.chanceRain}>
          <ion-icon name="umbrella-outline"></ion-icon>
          <h4>&ensp;{feelsLike}</h4>
        </div>
        <div className={classes.day1}>
          <h3>Wednesday</h3>
          <ion-icon name="sunny-outline"></ion-icon>
          <h3>10 &#x2103; / 12 &#x2103;</h3>
        </div>
        <div className={classes.windSpeed}>
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <h4>&ensp;{windSpeed} m/s</h4>
          {/* <h4>N</h4> */}
        </div>
        <div className={classes.day2}>
          <h3>Thursday</h3>
          <ion-icon name="sunny-outline"></ion-icon>
          <h3>10 &#x2103; / 12 &#x2103;</h3>
        </div>
        {/* GRID ROW 5 */}
        <div className={classes.sunriseSunset}>
          <h4>{sunrise}&ensp;</h4>
          <ion-icon name="chevron-up-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
          <ion-icon name="chevron-down-outline"></ion-icon>
          <h4>&ensp;{sunset}</h4>
        </div>
        <div className={classes.day3}>
          <h3>Friday</h3>
          <ion-icon name="sunny-outline"></ion-icon>
          <h3>10 &#x2103; / 12 &#x2103;</h3>
        </div>
      </React.Fragment>
    );
  };

  const asyncTest = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${apikey}`
      );

      let data = await response.json();
      console.log(data);
      setContentHandler(
        data.name,
        data.main.temp,
        data.main.temp_min,
        data.main.temp_max,
        data.weather[0].description,
        data.main.feels_like,
        data.wind.speed,
        data.sys.sunrise,
        data.sys.sunset
      );
      console.log('?');
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  }, []);

  // useEffect(() => {
  //   asyncTest();
  // }, [asyncTest]);

  console.log('render');

  return (
    <main className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.locationSearch}>
          <input className={classes.locationSearchInput}></input>
          <button className={classes.locationSearchBtn}>SEARCH</button>
        </div>
        <div className={classes.weatherContainer}>
          <div className={classes.weatherLocation}>
            {content ? content : 'hello'}
          </div>
          <div className={classes.weatherLocation}>
            <button className={classes.btnDelete}>X</button>
            {/* GRID ROW 1 */}
            <div className={classes.locationTitle}>
              <h2 className={classes.locationHeader}>
                <ion-icon
                  name="compass-outline"
                  className={classes.compassOutline}
                ></ion-icon>
                HUDDERSFIELD
              </h2>
              <h3 className={classes.locationDate}>02/03/2021</h3>
            </div>

            {/* GRID ROW 2 */}
            <div className={classes.weatherIcon}>
              <ion-icon name="rainy-outline"></ion-icon>
            </div>
            <div className={classes.temperature}>
              <h2>10 &#x2103;</h2>
              <div className={classes.hiLoTemperature}>
                <h4>12 &#x2103;</h4>
                <h4>8 &#x2103;</h4>
              </div>
            </div>
            <h3 className={classes.weatherType}>rainy</h3>

            {/* GRID ROW 3 */}
            <div className={classes.chanceRain}>
              <ion-icon name="umbrella-outline"></ion-icon>
              <h4>50%</h4>
            </div>
            <div className={classes.day1}>
              <h3>Wednesday</h3>
              <ion-icon name="sunny-outline"></ion-icon>
              <h3>10 &#x2103; / 12 &#x2103;</h3>
            </div>

            {/* GRID ROW 4 */}
            <div className={classes.windSpeed}>
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
              <h4>5 m/s</h4>
              {/* <h4>N</h4> */}
            </div>
            <div className={classes.day2}>
              <h3>Thursday</h3>
              <ion-icon name="sunny-outline"></ion-icon>
              <h3>10 &#x2103; / 12 &#x2103;</h3>
            </div>

            {/* GRID ROW 5 */}
            <div className={classes.sunriseSunset}>
              <ion-icon name="chevron-up-outline"></ion-icon>
              <ion-icon name="sunny-outline"></ion-icon>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <h4>06:53</h4>
              <span> &ensp;/&ensp; </span>
              <h4>17:46</h4>
            </div>
            <div className={classes.day3}>
              <h3>Friday</h3>
              <ion-icon name="sunny-outline"></ion-icon>
              <h3>10 &#x2103; / 12 &#x2103;</h3>
            </div>
          </div>
          {/* <div className={classes.weatherLocation}></div> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
