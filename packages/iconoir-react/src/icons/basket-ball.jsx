import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const BasketBall = forwardRef(
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M12 22V2M18.5716 4.46233C15.905 8.99174 15.9049 14.1847 18.5716 19.5377M5.42836 4.46233C8.09503 8.99174 8.09514 14.1847 5.42836 19.5377M21.9506 11C15.48 13.6667 9.69643 13.6668 2.04938 11"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

BasketBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BasketBall.displayName = 'BasketBall';

export default BasketBall;