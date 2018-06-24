import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.css';

const Footer = ({ children, className, ...props }) => (
  <footer className={classNames(styles.footer, className)} {...props}>
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: null,
  className: null,
};

export default Footer;
