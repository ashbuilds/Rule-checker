import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const LongText = props => (
  <textarea {...props} className={[style.long_text, props.className].join(' ')} />
);

LongText.propTypes = {
  className: PropTypes.string,
};

LongText.defaultProps = {
  className: '',
};

export default LongText;
