import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import classes from './Search.module.css';
import CSSGridPosition from '../../utilities/gridposition';

const Search = ({ addWeatherLocationProps, replaceWeatherLocationProps }) => {
  const [location, setLocation] = useState('PLEASE SEARCH HERE');
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
          type="text"
          name="searchInput"
          id="seachInput"
          onChange={searchChangeHandler}
          title="Search for the weather here"
          aria-label="Search"
          spellCheck
          value={location}
          onClick={() => {
            setLocation('');
          }}
        />
        <div className={classes.btnContainer}>
          <div className={classes.searchRadio}>
            <div>
              <input
                type="radio"
                name="radioMetric"
                id="radioMetric"
                checked={radioUnit === 'metric'}
                onChange={() => {
                  radioChangeHandler('metric');
                }}
              />
              <label htmlFor="radioMetric">Metric</label>
            </div>
            <div>
              <input
                type="radio"
                name="radioImperial"
                id="radioImperial"
                checked={radioUnit === 'imperial'}
                onChange={() => {
                  radioChangeHandler('imperial');
                }}
              />
              <label htmlFor="radioImperial">Imperial</label>
            </div>
          </div>
          <button className={classes.searchBtn} type="submit">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

Search.propTypes = {
  addWeatherLocationProps: PropTypes.func.isRequired,
  replaceWeatherLocationProps: PropTypes.func.isRequired,
};
export default Search;
