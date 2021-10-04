import React from 'react';
import PropTypes from 'prop-types';
import classes from './ErrorPopup.module.css';

const ErrorPopup = ({ showErrorProps }) => (
  <div style={{ display: showErrorProps }} className={classes.errorPopup}>
    <p>LOCATION NOT FOUND</p>
  </div>
);

ErrorPopup.propTypes = {
  showErrorProps: PropTypes.string.isRequired,
};

export default ErrorPopup;
