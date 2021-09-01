import React, { useState } from 'react';

import classes from './Main.module.css';
import Search from '../Search/Search';
import WeatherLocationContainer from '../WeatherLocationContainer/WeatherLocationContainer';
import WeatherCardGrid from '../WeatherCardGrid/WeatherCardGrid';

// TODO: ADD ERROR HANDLING FOR CITY NOT FOUND
// TODO: ADD DEFAULT TEXT TO SEARCH BAR
// TODO: FIX BTN HOVER ON MOBILE. FIX IN CV APP ASWELL

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);
  // const [hover, setHover] = useState('');

  // const setHoverClass = () => {
  //   setHover({ bigSmallAnimation: 'circleHover', bigCircle: 'bigCircle' });
  // };

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
        <Search />
        <div className={classes.weatherContainer}>
          <WeatherCardGrid />
          {renderWeatherLocation()}
        </div>
      </div>
    </main>
  );
};

export default Main;
