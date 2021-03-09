import React, { useState, useEffect } from 'react';

import classes from './WeatherLocationContainer.module.css';
import { formatTime, formatDate } from '../../utilities/utilities';

const WeatherLocationContainer = (props) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [futureWeatherData, setFutureWeatherData] = useState(null);

  console.log(props.searchQuery);

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  let content = null;

  let setContentHandler = () => {
    if (currentWeatherData) {
      console.log(`rotate(${currentWeatherData.wind.deg})`);
      console.log(futureWeatherData);
      content = (
        <React.Fragment>
          <div className={classes.weatherLocationContainer}>
            <button
              className={classes.btnDelete}
              id={props.searchQuery.id}
              onClick={(e) => {
                console.log(e);
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
                {/* <ion-icon name="rainy-outline"></ion-icon> */}
                <img
                  src={`http://openweathermap.org/img/wn/${futureWeatherData.daily[0].weather[0].icon}@2x.png`}
                  alt={'weather icon'}
                ></img>
              </div>
            </div>
            {/* CURRENT WEATHER TEMP */}
            <div className={classes.temperature}>
              <h2>{currentWeatherData.main.temp.toFixed(0)} &#x2103;</h2>
              <div className={classes.hiLoTemperature}>
                <h4>{currentWeatherData.main.temp_max.toFixed(0)} &#x2103;</h4>
                <h4>{currentWeatherData.main.temp_min.toFixed(0)} &#x2103;</h4>
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
                    {futureWeatherData.daily[1].temp.max.toFixed(0)} &#x2103;
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.min.toFixed(0)} &#x2103;
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
              {/* <ion-icon name="sunny-outline"></ion-icon> */}
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
                    {futureWeatherData.daily[1].temp.max.toFixed(0)} &#x2103;
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[1].temp.min.toFixed(0)} &#x2103;
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
                    {futureWeatherData.daily[3].temp.max.toFixed(0)} &#x2103;
                  </h5>
                </div>
                <div className={classes.futureLo}>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  <h5>
                    {futureWeatherData.daily[3].temp.min.toFixed(0)} &#x2103;
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

  // const asyncTest = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery}&units=metric&appid=${apikey}`
  //     );

  //     let data = await response.json();
  //     console.log(data);
  //     //   setContentHandler(
  //     //     data.name,
  //     //     data.main.temp,
  //     //     data.main.temp_min,
  //     //     data.main.temp_max,
  //     //     data.weather[0].description,
  //     //     data.main.feels_like,
  //     //     data.wind.speed,
  //     //     data.sys.sunrise,
  //     //     data.sys.sunset
  //     //   );
  //     console.log('?');
  //     setLocation({ ...data });
  //   } catch (error) {
  //     console.log('error');
  //     console.error(error);
  //   }
  // }, [props.searchQuery]);

  // useEffect(() => {
  //   asyncTest();
  // }, [asyncTest]);

  useEffect(() => {
    const fetchData = async () => {
      if (props.searchQuery) {
        try {
          const currentWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery.query}&units=metric&appid=${apikey}`
          );

          let currentWeatherData = await currentWeather.json();

          console.log(currentWeatherData.coord);

          const futureWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apikey}`
          );

          let futureWeatherData = await futureWeather.json();
          console.log(currentWeatherData);
          console.log(futureWeatherData);
          //   setContentHandler(
          //     data.name,
          //     data.main.temp,
          //     data.main.temp_min,
          //     data.main.temp_max,
          //     data.weather[0].description,
          //     data.main.feels_like,
          //     data.wind.speed,
          //     data.sys.sunrise,
          //     data.sys.sunset
          //   );
          console.log('?');
          if (currentWeatherData.cod === 200) {
            setFutureWeatherData({ ...futureWeatherData });
            setCurrentWeatherData({ ...currentWeatherData });
          }
        } catch (error) {
          console.log('error');
          console.error(error);
        }
      }
    };
    fetchData();
  }, [props.searchQuery]);

  setContentHandler();

  const test = <div>test</div>;
  console.log(test);
  console.log('render');
  console.log(content);

  return <React.Fragment>{content ? content : null}</React.Fragment>;
};

export default WeatherLocationContainer;

//   const setContentHandler = (
//     locationTitle,
//     temp,
//     tempMin,
//     tempMax,
//     weatherDescription,
//     feelsLike,
//     windSpeed,
//     sunrise,
//     sunset
//   ) => {
//     console.log(temp);
//     content = (
//       <React.Fragment>
//         <button className={classes.btnDelete}>X</button>
//         <div className={classes.locationTitle}>
//           <h2 className={classes.locationHeader}>
//             <ion-icon
//               name="compass-outline"
//               className={classes.compassOutline}
//             ></ion-icon>
//             {locationTitle}
//           </h2>
//           <h3 className={classes.locationDate}>02/03/2021</h3>
//         </div>
//         <div className={classes.weatherIcon}>
//           <ion-icon name="rainy-outline"></ion-icon>
//         </div>
//         <div className={classes.temperature}>
//           <h2>{temp} &#x2103;</h2>
//           <div className={classes.hiLoTemperature}>
//             <h4>{tempMax} &#x2103;</h4>
//             <h4>{tempMin} &#x2103;</h4>
//           </div>
//         </div>
//         <h3 className={classes.weatherType}>{weatherDescription}</h3>
//         <div className={classes.chanceRain}>
//           <ion-icon name="umbrella-outline"></ion-icon>
//           <h4>&ensp;{feelsLike}</h4>
//         </div>
//         <div className={classes.day1}>
//           <h3>Wednesday</h3>
//           <ion-icon name="sunny-outline"></ion-icon>
//           <h3>10 &#x2103; / 12 &#x2103;</h3>
//         </div>
//         <div className={classes.windSpeed}>
//           <ion-icon name="arrow-back-circle-outline"></ion-icon>
//           <h4>&ensp;{windSpeed} m/s</h4>
//           {/* <h4>N</h4> */}
//         </div>
//         <div className={classes.day2}>
//           <h3>Thursday</h3>
//           <ion-icon name="sunny-outline"></ion-icon>
//           <h3>10 &#x2103; / 12 &#x2103;</h3>
//         </div>
//         {/* GRID ROW 5 */}
//         <div className={classes.sunriseSunset}>
//           <h4>{sunrise}&ensp;</h4>
//           <ion-icon name="chevron-up-outline"></ion-icon>
//           <ion-icon name="sunny-outline"></ion-icon>
//           <ion-icon name="chevron-down-outline"></ion-icon>
//           <h4>&ensp;{sunset}</h4>
//         </div>
//         <div className={classes.day3}>
//           <h3>Friday</h3>
//           <ion-icon name="sunny-outline"></ion-icon>
//           <h3>10 &#x2103; / 12 &#x2103;</h3>
//         </div>
//       </React.Fragment>
//     );

//     console.log(content);
//   };

// {/* <div className={classes.weatherLocationContainer}> */}
//   <button className={classes.btnDelete}>X</button>
//   {/* GRID ROW 1 */}
//   <div className={classes.locationTitle}>
//     <h2 className={classes.locationHeader}>
//       <ion-icon
//         name="compass-outline"
//         className={classes.compassOutline}
//       ></ion-icon>
//       HUDDERSFIELD
//     </h2>
//     <h3 className={classes.locationDate}>02/03/2021</h3>
//   </div>

//   {/* GRID ROW 2 */}
//   <div className={classes.weatherIcon}>
//     <ion-icon name="rainy-outline"></ion-icon>
//   </div>
//   <div className={classes.temperature}>
//     <h2>10 &#x2103;</h2>
//     <div className={classes.hiLoTemperature}>
//       <h4>12 &#x2103;</h4>
//       <h4>8 &#x2103;</h4>
//     </div>
//   </div>
//   <h3 className={classes.weatherType}>rainy</h3>

//   {/* GRID ROW 3 */}
//   <div className={classes.chanceRain}>
//     <ion-icon name="umbrella-outline"></ion-icon>
//     <h4>50%</h4>
//   </div>
//   <div className={classes.day1}>
//     <h3>Wednesday</h3>
//     <ion-icon name="sunny-outline"></ion-icon>
//     <h3>10 &#x2103; / 12 &#x2103;</h3>
//   </div>

//   {/* GRID ROW 4 */}
//   <div className={classes.windSpeed}>
//     <ion-icon name="arrow-back-circle-outline"></ion-icon>
//     <h4>5 m/s</h4>
//     {/* <h4>N</h4> */}
//   </div>
//   <div className={classes.day2}>
//     <h3>Thursday</h3>
//     <ion-icon name="sunny-outline"></ion-icon>
//     <h3>10 &#x2103; / 12 &#x2103;</h3>
//   </div>

//   {/* GRID ROW 5 */}
//   <div className={classes.sunriseSunset}>
//     <ion-icon name="chevron-up-outline"></ion-icon>
//     <ion-icon name="sunny-outline"></ion-icon>
//     <ion-icon name="chevron-down-outline"></ion-icon>
//     <h4>06:53</h4>
//     <span> &ensp;/&ensp; </span>
//     <h4>17:46</h4>
//   </div>
//   <div className={classes.day3}>
//     <h3>Friday</h3>
//     <ion-icon name="sunny-outline"></ion-icon>
//     <h3>10 &#x2103; / 12 &#x2103;</h3>
//   </div>
// </div>
