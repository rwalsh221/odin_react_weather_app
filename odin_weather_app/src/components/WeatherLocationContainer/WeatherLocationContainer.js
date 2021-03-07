import React, { useState, useEffect } from 'react';

import classes from './WeatherLocationContainer.module.css';
import { formatTime, formatDate } from '../../utilities/utilities';

const WeatherLocationContainer = (props) => {
  const [location, setLocation] = useState(null);

  console.log(props.searchQuery);

  const apikey = 'b0ea585de7608342c1947e606b266dd4';
  let content = null;

  let setContentHandler = () => {
    if (location) {
      console.log();
      content = (
        <React.Fragment>
          <button className={classes.btnDelete}>X</button>
          <div className={classes.locationTitle}>
            <h2 className={classes.locationHeader}>
              <ion-icon
                name="compass-outline"
                className={classes.compassOutline}
              ></ion-icon>
              {location.name}
            </h2>
            <h3 className={classes.locationDate}>
              {formatDate(location.dt, location.timezone)}
            </h3>
          </div>
          <div className={classes.weatherIcon}>
            <ion-icon name="rainy-outline"></ion-icon>
          </div>
          <div className={classes.temperature}>
            <h2>{location.main.temp.toFixed(0)} &#x2103;</h2>
            <div className={classes.hiLoTemperature}>
              <h4>{location.main.temp_max.toFixed(0)} &#x2103;</h4>
              <h4>{location.main.temp_min.toFixed(0)} &#x2103;</h4>
            </div>
          </div>
          <h3 className={classes.weatherType}>
            {location.weather[0].description}
          </h3>
          <div className={classes.chanceRain}>
            <ion-icon name="umbrella-outline"></ion-icon>
            <h4>&ensp;{location.main.feels_like.toFixed(0)} &#x2103;</h4>
          </div>
          <div className={classes.day1}>
            <h3>Wednesday</h3>
            <ion-icon name="sunny-outline"></ion-icon>
            <h3>10 &#x2103; / 12 &#x2103;</h3>
          </div>
          <div className={classes.windSpeed}>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            <h4>&ensp;{location.wind.speed.toFixed(1)} m/s</h4>
            {/* <h4>N</h4> */}
          </div>
          <div className={classes.day2}>
            <h3>Thursday</h3>
            <ion-icon name="sunny-outline"></ion-icon>
            <h3>10 &#x2103; / 12 &#x2103;</h3>
          </div>
          {/* GRID ROW 5 */}
          <div className={classes.sunriseSunset}>
            <h4>{formatTime(location.sys.sunrise, location.timezone)}&ensp;</h4>
            <ion-icon name="chevron-up-outline"></ion-icon>
            <ion-icon name="sunny-outline"></ion-icon>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <h4>&ensp;{formatTime(location.sys.sunset, location.timezone)}</h4>
          </div>
          <div className={classes.day3}>
            <h3>Friday</h3>
            <ion-icon name="sunny-outline"></ion-icon>
            <h3>10 &#x2103; / 12 &#x2103;</h3>
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
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery}&units=metric&appid=${apikey}`
          );

          let data = await response.json();
          console.log(data);
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
          setLocation({ ...data });
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

  return (
    <React.Fragment>
      <div className={classes.weatherLocationContainer}>{content}</div>
    </React.Fragment>
  );
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
