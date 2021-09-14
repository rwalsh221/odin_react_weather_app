import React, { useState } from 'react';
import classes from './WeatherCardGrid.module.css';

import WeatherCardContainer from '../WeatherCardContainer/WeatherCardContainer';

const WeatherCardGrid = ({
  userWeatherLocationProps,
  weatherLocationsProps,
}) => {
  const [animationObj, setAnimationObj] = useState({
    clicked: false,
    style: {},
  });

  console.log(userWeatherLocationProps);

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

  // RENDER CARDS IF WEATHERLOACTIONPROPS HAS ELEMENTS
  const renderWeatherLocations = () => {
    const content = weatherLocationsProps
      ? weatherLocationsProps.map((element) => {
          console.log(element);
          return (
            <WeatherCardContainer
              clickedProps={animationObj.clicked}
              onClickAnimationProps={onClickAnimation}
              animationStyleProps={animationObj.style}
              weatherLocationProps={element}
            />
          );
        })
      : null;

    return content;
  };

  // const renderUserWeatherLocations = () => {
  //   const content = userWeatherLocationsProps
  //     ? weatherLocationsProps.map((element) => {
  //         console.log(element);
  //         return (
  //           <WeatherCardContainer
  //             clickedProps={animationObj.clicked}
  //             onClickAnimationProps={onClickAnimation}
  //             animationStyleProps={animationObj.style}
  //             weatherLocationProps={element}
  //           />
  //         );
  //       })
  //     : null;

  //   return content;
  // };

  return (
    <section className={classes.weatherCardGrid}>
      {userWeatherLocationProps ? (
        <WeatherCardContainer
          clickedProps={animationObj.clicked}
          onClickAnimationProps={onClickAnimation}
          animationStyleProps={animationObj.style}
          weatherLocationProps={userWeatherLocationProps}
        />
      ) : null}
      {renderWeatherLocations()}
    </section>
  );
};

export default WeatherCardGrid;
