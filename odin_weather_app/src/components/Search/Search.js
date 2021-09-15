import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './Search.module.css';
import test from '../../utilities/gridposition';

const Search = ({ addWeatherLocationProps }) => {
  const [location, setLocation] = useState();
  const [radioUnit, setRadioUnit] = useState('metric');
  const searchChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const radioChangeHandler = (unit) => {
    if (unit === 'metric') {
      setRadioUnit('metric');
    }
    if (unit === 'imperial') {
      setRadioUnit('imperial');
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const gridPos = test();
    addWeatherLocationProps(location, radioUnit, gridPos, nanoid());
  };

  let unavaliableGridPosition = [];

  const getGridPosition = () => {
    //   GRID POSITION STRINGS FOR CSS STYLE
    const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

    //   GET RANDOM NUMBER FOR CSSPOSITION ARRAY
    const gridPositionNum = Math.floor(Math.random() * 8) + 1;

    if (unavaliableGridPosition.indexOf(gridPositionNum) === -1) {
      unavaliableGridPosition.push(gridPositionNum);
      console.log(unavaliableGridPosition);
    } else if (unavaliableGridPosition.length >= 8) {
      // DELETE FIRST ELEMENT IN LOCATIONS ARRAY AND REPLACE
      console.log('arr complete');
    } else {
      getGridPosition();
    }
    return gridPositionCSS[gridPositionNum - 1];
  };

  // const gridPositionTest = () => {
  //   let unavaliableGridPosition = [];
  //   const getGridPos = () => {
  //     //   GRID POSITION STRINGS FOR CSS STYLE
  //     const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

  //     //   GET RANDOM NUMBER FOR CSSPOSITION ARRAY
  //     const gridPositionNum = Math.floor(Math.random() * 8) + 1;

  //     if (unavaliableGridPosition.indexOf(gridPositionNum) === -1) {
  //       unavaliableGridPosition.push(gridPositionNum);
  //       console.log(unavaliableGridPosition);
  //     } else if (unavaliableGridPosition.length >= 8) {
  //       // DELETE FIRST ELEMENT IN LOCATIONS ARRAY AND REPLACE
  //       console.log('arr complete');
  //     } else {
  //       getGridPos();
  //     }
  //     return gridPositionCSS[gridPositionNum - 1];
  //   };

  //   return getGridPos;
  // };

  // const test = gridPositionTest();

  return (
    <section className={classes.searchSection}>
      <form className={classes.searchForm} onSubmit={formSubmitHandler}>
        <input
          className={classes.searchInput}
          type={'text'}
          name={'searchInput'}
          id={'seachInput'}
          onChange={searchChangeHandler}
        ></input>
        <ul className={classes.searchRadio}>
          <li>
            <input
              type={'radio'}
              name={'radioMetric'}
              id={'radioMetric'}
              checked={radioUnit === 'metric' ? true : false}
              onChange={() => {
                radioChangeHandler('metric');
              }}
            ></input>
            <label htmlFor={'radioMetric'}>Metric</label>
          </li>
          <li>
            <input
              type={'radio'}
              name={'radioImperial'}
              id={'radioImperial'}
              checked={radioUnit === 'imperial' ? true : false}
              onChange={() => {
                radioChangeHandler('imperial');
              }}
            ></input>
            <label htmlFor={'radioImperial'}>Imperial</label>
          </li>
        </ul>
        <button className={classes.searchBtn} type={'submit'}>
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
