import React, { useState } from 'react';
import classes from './Search.module.css';

const Search = ({ addWeatherLocationProps }) => {
  const [location, setLocation] = useState();
  const [radioUnit, setRadioUnit] = useState('metric');
  console.log(location);
  console.log(radioUnit);
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
    addWeatherLocationProps(location, radioUnit, '1');
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
