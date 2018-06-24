import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.css';

const Header = ({ children, className, ...props }) => (
  <header className={classNames(styles.header, className)} {...props}>
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  className: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  className: null,
};

export default Header;
