import React from 'react';

import classes from './Home.module.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

const home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default home;
