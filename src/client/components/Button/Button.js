import React from 'react';

import './Button.scss';

const Button = ({ type = '', text, onClick }) => <button className={'button ' + type} onClick={onClick}>{text}</button>;

Button.propTypes = {
  type: React.PropTypes.string,
  text: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default Button;