import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './Search.module.css';
import CSSGridPosition from '../../utilities/gridposition';

const Search = ({ addWeatherLocationProps, replaceWeatherLocationProps }) => {
  const [location, setLocation] = useState('');
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

    const gridPos = CSSGridPosition.getGridPos();
    const timeStamp = new Date().getTime();
    const id = nanoid();

    // REMOVE FIRST ITEM IN LOACTION ARRAY AND REPLACE WITH NEW LOACTION
    if (gridPos === 'ARRAY EMPTY') {
      replaceWeatherLocationProps(location, radioUnit, id, timeStamp);
      setLocation('');
      return;
    }
    addWeatherLocationProps(location, radioUnit, gridPos, id, timeStamp);
    setLocation('');
  };

  return (
    <section className={classes.searchSection}>
      <form className={classes.searchForm} onSubmit={formSubmitHandler}>
        <input
          className={classes.searchInput}
          type={'text'}
          name={'searchInput'}
          id={'seachInput'}
          onChange={searchChangeHandler}
          title={'Search for the weather here'}
          aria-label={'Search'}
          spellCheck={true}
          value={location}
        ></input>
        <div className={classes.btnContainer}>
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
        </div>
      </form>
    </section>
  );
};

export default Search;
