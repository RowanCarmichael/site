import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const FloatingButton = ({ onClick, children }) => (
  <div className={styles.floatingButton} onClick={onClick} role="button" tabIndex="0">
    {children}
  </div>
);

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default FloatingButton;
