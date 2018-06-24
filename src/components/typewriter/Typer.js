import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typer.css';

const Typer = ({ text, className, ...props }) => (
  <div className={className} {...props}>
    <span>{text}</span>
    <span className={styles.cursor}>|</span>
  </div>
);

Typer.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Typer.defaultProps = {
  className: null,
};

export default Typer;
