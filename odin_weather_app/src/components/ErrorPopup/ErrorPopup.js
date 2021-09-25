import React from 'react';
import classes from './ErrorPopup.module.css';

const ErrorPopup = ({ showErrorProps }) => {
  return (
    <div style={{ display: showErrorProps }} className={classes.errorPopup}>
      <p>LOCATION NOT FOUND</p>
    </div>
  );
};

export default ErrorPopup;
