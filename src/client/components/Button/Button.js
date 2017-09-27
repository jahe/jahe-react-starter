import PropTypes from 'prop-types';
import React from 'react';

import './Button.scss';

const Button = ({ type = '', text, onClick }) => (
  <button className={'button ' + type} onClick={onClick}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
