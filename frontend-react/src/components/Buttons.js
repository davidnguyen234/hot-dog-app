import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ color, text, onClick }) => {
   function handleClick(e) {
      e.preventDefault();
      console.log('The order is compeleted.');
  }
   return (
      <button onClick={handleClick} style={{ backgroundColor: color }}
         className='btn'>{text}
      </button>
   )
}
Buttons.defaultProps = {
   color: 'steelblue'
}
Buttons.protoType = {
   text: PropTypes.string,
   color: PropTypes.string,
   onClick: PropTypes.func,
}
export default Buttons