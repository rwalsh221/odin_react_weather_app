import React from 'react';

import classes from './Main.module.css';

const main = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.weatherContainer}></div>
    </main>
  );
};

export default main;
