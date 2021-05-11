import React from 'react';
import PropTypes from 'prop-types';

//You can deconstruct the props to bgColor
const Display = ({ bgColor }) => (
  <div style={{ background: bgColor }}>Hello</div>
);

Display.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Display;
