import React, { useState } from 'react';
import classes from './WeatherCardGrid.module.css';

import WeatherCardContainer from '../WeatherCardContainer/WeatherCardContainer';
import WeatherCardBig from '../WeatherCardBig/WeatherCardBig';
import WeatherCardSmall from '../WeatherCardSmall/WeatherCardSmall';

const WeatherCardGrid = ({ weatherLocationsProps }) => {
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
      <WeatherCardContainer
        clickedProps={animationObj.clicked}
        onClickAnimationProps={onClickAnimation}
        animationStyleProps={animationObj.style}
        weatherLocationProps={weatherLocationsProps[0].location}
        weatherLocationUnitProps={weatherLocationsProps[0].unit}
        weatherLocationPositionProps={
          weatherLocationsProps[0].weatherCardGridPositon
        }
      />
      {/* <div className={classes.cardContainer}>
        <WeatherCardSmall
          clickedProps={animationObj.clicked}
          onClickAnimationProps={onClickAnimation}
          animationStyleProps={animationObj.style}
          weatherLocationProps={weatherLocationsProps[0].location}
        />
        <WeatherCardBig
          clicked={animationObj.clicked}
          onClickAnimation={onClickAnimation}
          animationStyle={animationObj.style}
        />
      </div> */}
    </section>
  );
};

export default WeatherCardGrid;
