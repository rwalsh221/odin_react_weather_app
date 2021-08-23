import React, { useState } from 'react';
import classes from './WeatherCardGrid.module.css';

import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';

const WeatherCardGrid = (props) => {
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });

  const onClickAnimation = (element) => {
    const elementPosition = element.target.getBoundingClientRect(); // GET POSITION OF ELEMENT

    setAnimationObj({
      clicked: true,
      style: {
        position: 'fixed',
        top: elementPosition.top,
        left: elementPosition.left,
      },
    });
  };

  return (
    <section className={classes.weatherCardGrid}>
      <div className={classes.cardContainer}>
        <WeatherCardSmall
          clicked={animationObj.clicked}
          onClickAnimation={onClickAnimation}
          animationStyle={animationObj.style}
        />
        <WeatherCardBig
          clicked={animationObj.clicked}
          onClickAnimation={onClickAnimation}
          animationStyle={animationObj.style}
        />
      </div>

      {/* <WeatherCardSmall /> */}
    </section>
  );
};

export default WeatherCardGrid;
