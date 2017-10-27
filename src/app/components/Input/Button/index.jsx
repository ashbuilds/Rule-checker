import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const Button = props => (
  <button {...props} className={[style.button, props.className].join(' ')} >
    <span>{ props.text }</span>
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
