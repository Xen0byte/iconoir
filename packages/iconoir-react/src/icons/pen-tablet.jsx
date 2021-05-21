import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PenTablet = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H6M6 3H4C2.89543 3 2 3.89543 2 5V12M6 3V12M6 21H4C2.89543 21 2 20.1046 2 19V12M6 21V12M2 12H6"
            stroke="black"
            stroke-width="1.5"
          />
          <path
            d="M15.5 11.5L12 14.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 10.01L17.01 9.99889"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

PenTablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenTablet.displayName = 'PenTablet';

export default PenTablet;