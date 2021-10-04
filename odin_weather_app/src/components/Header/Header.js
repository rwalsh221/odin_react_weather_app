import React from 'react';

import classes from './Header.module.css';

const header = () => (
  <header className={classes.headerContainer}>
    <h1 className={classes.mainHeading}>Odin Weather App</h1>
  </header>
);
export default header;
