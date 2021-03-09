import React, { useState } from 'react';

import classes from './Main.module.css';
import WeatherLocationContainer from '../WeatherLocationContainer/WeatherLocationContainer';

// TODO: CHANGE SYMBOL BASED ON WEATHER DOOOOONNNEEE
// TODO: FORMAT TEMP NUMBER. DOOOOOONNE
// TODO: FORMAT TIME. DOOOOONEEE
// TODO: GET FUTRE WEATHER. DOOOOOONEEEE
// TODO: RENDER MULTIPLE LOCATIONS. DOOONNNEEE
// TODO: REFACTOR MAIN INTO FUCTIONS
// TODO: FORMAT DESCRIPTION DOOOOONEEEEE
// TODO: LOCAL STORAGE
// TODO: DELETE
// TODO: RADIO BUTTON CELECIUS
// TODO: CHANGE BACKGROUND. USE A MAP

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <main className={classes.main}>
      <div className={classes.innerContainer}>
        <div></div>
        <form
          className={classes.locationSearch}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
            let copySearchQuery;
            if (searchQuery) {
              copySearchQuery = [...searchQuery];
            } else {
              copySearchQuery = [];
            }

            for (let i = 0; i < e.target.length; i++) {
              if (e.target[i].id === 'locationSearch') {
                copySearchQuery.push(e.target[i].value);
                e.target[i].value = '';
              }
              setSearchQuery([...copySearchQuery]);
            }
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
              <input type={'radio'} name={'celcius'} value={'celcius'}></input>
              Celcius
            </label>
            <label>
              <input
                type={'radio'}
                name={'fahrenhiet'}
                value={'fahrenhiet'}
              ></input>
              Fahrenhiet
            </label>
          </div>
          <button className={classes.locationSearchBtn}>SEARCH</button>
        </form>
        <div className={classes.weatherContainer}>
          {searchQuery
            ? searchQuery.map((element) => {
                return (
                  <WeatherLocationContainer
                    searchQuery={element}
                    key={element}
                  />
                );
              })
            : null}
          {/* <div className={classes.weatherLocation}></div> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
