import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import styles from './Button.css';

const IconButton = ({ icon, onClick, className, ...props }) => (
  <Button label={icon} focussable className={classNames(styles.button, styles.jump, className)} onClick={onClick} {...props} />
);

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: null,
  className: null,
};

export default IconButton;
