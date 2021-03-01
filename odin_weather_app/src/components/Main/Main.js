import React from 'react';

import classes from './Main.module.css';

const main = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.locationSearch}>
          <input className={classes.locationSearchInput}></input>
          <button className={classes.locationSearchBtn}>SEARCH</button>
        </div>
        <div className={classes.weatherContainer}>
          <div className={classes.weatherLocation}></div>
          <div className={classes.weatherLocation}></div>
          <div className={classes.weatherLocation}></div>
        </div>
      </div>
    </main>
  );
};

export default main;
