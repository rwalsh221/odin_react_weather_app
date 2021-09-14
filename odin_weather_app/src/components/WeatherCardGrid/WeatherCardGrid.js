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
    // const el = document.getElementById(`${element.target.id}`);
    // console.log(el);
    // const elementPosition = element.target.getBoundingClientRect(); // GET POSITION OF ELEMENT
    // el.style.position = 'fixed';
    // el.style.top = elementPosition.top;
    // el.style.left = elementPosition.left;
    // setAnimationObj({
    //   clicked: true,
    //   style: {
    //     position: 'fixed',
    //     top: elementPosition.top,
    //     left: elementPosition.left,
    //   },
    // });
    // setAnimationObj({ clicked: true });
  };

  // RENDER CARDS IF WEATHERLOACTIONPROPS HAS ELEMENTS
  const renderWeatherLocations = () => {
    const content = weatherLocationsProps
      ? weatherLocationsProps.map((element, index) => {
          console.log(element);
          return (
            <WeatherCardContainer
              key={index}
              id={index}
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
          id={'user'}
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
