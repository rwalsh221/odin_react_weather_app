import React, { useState, useEffect } from 'react';

import classes from './Main.module.css';
import Search from '../Search/Search';
import WeatherCardGrid from '../WeatherCardGrid/WeatherCardGrid';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import CSSGridPosition from '../../utilities/gridposition';

const Main = (props) => {
  const [userWeatherLocation, setUserWeatherLocation] = useState();
  const [weatherLocations, setWeatherLocations] = useState([]);
  const [error, setError] = useState('none');

  // GET USER LOCATION FROM BROWSER AND FIND LOCAL WEATHER. DEFAULTS TO LONDON IF DENIED ACCSESS TO LOCATION
  useEffect(() => {
    const getLocation = () => {
      // getCurrentPostion(successCallback, failCallback)
      navigator.geolocation.getCurrentPosition(
        (position) => reverseGeoLoc(position),
        () =>
          setUserWeatherLocation({
            location: 'london',
            unit: 'metric',
            weatherCardGridPositon: 'cc',
          })
      );
    };

    const reverseGeoLoc = async (position) => {
      console.log('run');
      try {
        const getLocation = await fetch(
          `https://eu1.locationiq.com/v1/reverse.php?key=${'pk.252799e8c85697a3838b079587a0eca3'}&lat=${
            position.coords.latitude
          }&lon=${position.coords.longitude}&format=json`
        );

        const getLocationData = await getLocation.json();

        setUserWeatherLocation({
          location: getLocationData.address.city,
          unit: 'metric',
          weatherCardGridPositon: 'cc',
        });
      } catch (error) {
        setUserWeatherLocation({
          location: 'london',
          unit: 'metric',
          weatherCardGridPositon: 'cc',
        });
        console.error(error);
      }
    };

    getLocation();
  }, [weatherLocations]);

  // ADDS WEATHER LOCATION ON SEARCH SUBMIT
  const addWeatherLocation = (
    location,
    unit,
    weatherCardGridPositon,
    id,
    timeStamp
  ) => {
    const weatherLocationsCopy = [...weatherLocations];

    weatherLocationsCopy.push({
      location,
      unit,
      weatherCardGridPositon,
      id,
      timeStamp,
    });

    setWeatherLocations(weatherLocationsCopy);
  };

  // REPLACES FIRST WEATHER LOCATION WHEN GRID IS FULL. GRID IS FULL AT EIGHT ELEMENTS
  const replaceWeatherLocation = (location, unit, id, timeStamp) => {
    const weatherLocationsCopy = [...weatherLocations];
    // SORT ARRAY BY TIMESTAMP TO REPLACE OLDEST LOCATION
    weatherLocationsCopy.sort((a, b) => a.timeStamp - b.timeStamp);

    weatherLocationsCopy[0] = {
      ...weatherLocationsCopy[0],
      location,
      unit,
      id,
      timeStamp,
    };

    setWeatherLocations(weatherLocationsCopy);
  };

  // REMOVES WEATHER LOCATION
  const removeWeatherLocation = (id) => {
    console.log(id);
    const weatherLocationsCopy = [...weatherLocations];

    for (let i = 0; i <= weatherLocationsCopy.length; i++) {
      if (id === weatherLocationsCopy[i].id) {
        CSSGridPosition.addGridPosition(
          weatherLocations[i].weatherCardGridPositon
        );
        weatherLocationsCopy.splice(i, 1);
        break;
      }
    }

    setWeatherLocations([...weatherLocationsCopy]);
  };

  const errorHandler = () => {
    const weatherLocationsCopy = [...weatherLocations];
    weatherLocationsCopy.splice(-1, 1);

    setWeatherLocations(weatherLocationsCopy);

    setError('block');
    setTimeout(() => {
      setError('none');
    }, 5000);
  };

  return (
    <main className={classes.main}>
      <ErrorPopup showErrorProps={error} />
      <Search
        addWeatherLocationProps={addWeatherLocation}
        replaceWeatherLocationProps={replaceWeatherLocation}
      />
      <WeatherCardGrid
        userWeatherLocationProps={userWeatherLocation}
        weatherLocationsProps={weatherLocations}
        removeWeatherLocationProps={removeWeatherLocation}
        errorHandlerProps={errorHandler}
      />
    </main>
  );
};

export default Main;
