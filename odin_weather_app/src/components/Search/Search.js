import React from 'react';
import classes from './Search.module.css';

const Search = () => {
  return (
    <section className={classes.searchSection}>
      <form className={classes.searchForm}>
        <input
          className={classes.searchInput}
          type={'text'}
          name={'searchInput'}
          id={'seachInput'}
        ></input>
        <ul className={classes.searchRadio}>
          <li>
            <input
              type={'radio'}
              name={'radioMetric'}
              id={'radioMetric'}
            ></input>
            <label htmlFor={'radioMetric'}>Metric</label>
          </li>
          <li>
            <input
              type={'radio'}
              name={'radioImperial'}
              id={'radioImperial'}
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
