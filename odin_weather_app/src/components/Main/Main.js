import React, { useState, useEffect } from 'react';

import classes from './Main.module.css';
import Search from '../Search/Search';
import WeatherLocationContainer from '../WeatherLocationContainer/WeatherLocationContainer';
import WeatherCardGrid from '../WeatherCardGrid/WeatherCardGrid';
import getGridPosition from '../../utilities/gridposition';

// TODO: ADD ERROR HANDLING FOR CITY NOT FOUND
// TODO: ADD DEFAULT TEXT TO SEARCH BAR
// TODO: FIX BTN HOVER ON MOBILE. FIX IN CV APP ASWELL

// ON FORM SUBMIT SET WAETHERLOCATIONS STATE. SEND THIS STATE TO WEATHERCARDGRID. FOREACH ON STATE TO GENERTATE SMALL AND BIG CARD WITH PROPS -- CREATE DELETE FUNCTION TO REMOVE <LOCATION FROM STATE AND PASS DOWN.

// const getGridPosition = () => {
//   const gridPosition = Math.floor(Math.random() * 9) + 1;

//   if (
//     unavaliableGridPosition.indexOf(gridPosition) === -1 &&
//     gridPosition !== 5
//   ) {
//     console.log(gridPosition);
//     unavaliableGridPosition.push(gridPosition);
//     console.log(unavaliableGridPosition);
//     console.log(unavaliableGridPosition.length);
//   } else if (unavaliableGridPosition.length >= 8) {
//     console.log('arr complete');
//   } else {
//     getGridPosition();
//   }
// };

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);
  const [userWeatherLocation, setUserWeatherLocation] = useState();
  const [weatherLocations, setWeatherLocations] = useState([
    // { location: 'liverpool', unit: 'metric', weatherCardGridPositon: 'bl' },
    // { location: 'liverpool', unit: 'metric', weatherCardGridPositon: 'tl' },
    // { location: 'liverpool', unit: 'metric', weatherCardGridPositon: 'tr' },
  ]);

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
        weatherLocationsCopy.splice(i, 1);
        break;
      }
    }

    setWeatherLocations([...weatherLocationsCopy]);
  };

  const searchQueryfactory = (query) => {
    const id = new Date();

    return {
      query: query,
      id: `${query}#${id.getMilliseconds()}`,
    };
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    let copySearchQuery;
    if (searchQuery) {
      copySearchQuery = [...searchQuery];
    } else {
      copySearchQuery = [];
    }

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].id === 'locationSearch') {
        copySearchQuery.push(searchQueryfactory(e.target[i].value));
        e.target[i].value = '';
      }
      setSearchQuery([...copySearchQuery]);
    }
  };

  const setRadioHandler = (unit) => {
    if (unit === 'metric') {
      setImperial(false);
      setMetric(true);
    } else {
      setImperial(true);
      setMetric(false);
    }
  };

  const deleteSearchQueryHandler = (id) => {
    let copySearchQuery = [...searchQuery];
    console.log(copySearchQuery);
    for (let i = 0; i < copySearchQuery.length; i++) {
      if (copySearchQuery[i].id === id) {
        copySearchQuery.splice(i, 1);
      }
    }
    setSearchQuery([...copySearchQuery]);
  };

  const renderWeatherLocation = () => {
    const content = searchQuery
      ? searchQuery.map((element) => {
          return (
            <WeatherLocationContainer
              searchQuery={element}
              key={element.id}
              deleteHandler={deleteSearchQueryHandler}
              unit={metric ? 'metric' : 'imperial'}
            />
          );
        })
      : null;
    return content;
  };

  return (
    <main className={classes.main}>
      <div className={classes.innerContainer}>
        <form
          className={classes.locationSearch}
          onSubmit={(e) => {
            searchSubmitHandler(e);
          }}
        >
          <input
            className={classes.locationSearchInput}
            type={'text'}
            name={'LocationSearch'}
            id={'locationSearch'}
          ></input>
          <div className={classes.searchRadioContainer}>
            <label>
              <input
                type={'radio'}
                name={'metric'}
                value={'metric'}
                checked={metric}
                onChange={(e) => {
                  setRadioHandler(e.target.value);
                }}
              ></input>
              Metric
            </label>
            <label>
              <input
                type={'radio'}
                name={'imperial'}
                value={'imperial'}
                checked={imperial}
                onChange={(e) => {
                  setRadioHandler(e.target.value);
                }}
              ></input>
              Imperial
            </label>
          </div>
          <button className={classes.locationSearchBtn}>SEARCH</button>
        </form>
        <Search
          addWeatherLocationProps={addWeatherLocation}
          replaceWeatherLocationProps={replaceWeatherLocation}
        />
        <div className={classes.weatherContainer}>
          <WeatherCardGrid
            userWeatherLocationProps={userWeatherLocation}
            weatherLocationsProps={weatherLocations}
            removeWeatherLocationProps={removeWeatherLocation}
          />
          {renderWeatherLocation()}
        </div>
      </div>
    </main>
  );
};

export default Main;
