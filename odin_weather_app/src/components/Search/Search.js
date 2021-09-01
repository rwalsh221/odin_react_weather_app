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
        <ul>
          <li>
            <label htmlFor={'radioMetric'}>Metric</label>
            <input
              type={'radio'}
              name={'radioMetric'}
              id={'radioMetric'}
            ></input>
          </li>
          <li>
            <label htmlFor={'radioImperial'}>Imperial</label>
            <input
              type={'radio'}
              name={'radioImperial'}
              id={'radioImperial'}
            ></input>
          </li>
        </ul>
        <button type={'submit'}>Search</button>
      </form>
    </section>
  );
};

export default Search;
