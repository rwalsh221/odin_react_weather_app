import React, { useState } from 'react';
import classes from './WeatherCardGrid.module.css';

import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';

const WeatherCardGrid = (props) => {
  const [hover, setHover] = useState(false);

  const setHoverClass = () => {
    // setHover({ bigSmallAnimation: 'circleHover', bigCircle: 'bigCircle' });
    setHover(true);
  };

  return (
    <section className={classes.weatherCardGrid}>
      <div className={classes.cardContainer}>
        <WeatherCardSmall hover={hover} setHoverClass={setHoverClass} />
      </div>

      {/* <WeatherCardSmall /> */}
    </section>
  );
};

export default WeatherCardGrid;
