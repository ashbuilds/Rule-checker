import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const ShortText = props => (
  <input {...props} className={[style.short_text, props.className].join(' ')} type="text" />
);

ShortText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

ShortText.defaultProps = {
  className: '',
  value:'',
};

export default ShortText;
