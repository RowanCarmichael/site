import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.css';

const Button = ({ label, onClick, className, focussable, ...props }) => (
  <button className={classNames(styles.button, focussable ? styles.focussable : null, className)} onClick={onClick} {...props}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  focussable: PropTypes.bool,
};

Button.defaultProps = {
  label: null,
  onClick: null,
  className: null,
  focussable: false,
};

export default Button;
