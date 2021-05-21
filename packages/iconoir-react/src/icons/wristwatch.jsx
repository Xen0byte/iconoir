import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Wristwatch = forwardRef(
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
            d="M8 7.52779C6.7725 8.62643 6 10.223 6 12C6 13.777 6.7725 15.3736 8 16.4722M8 7.52779C9.06151 6.57771 10.4633 6 12 6C13.5367 6 14.9385 6.57771 16 7.52779M8 7.52779V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V7.52779M16 7.52779C17.2275 8.62643 18 10.223 18 12C18 13.777 17.2275 15.3736 16 16.4722M16 16.4722C14.9385 17.4223 13.5367 18 12 18C10.4633 18 9.06151 17.4223 8 16.4722M16 16.4722V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V16.4722"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 12H12V10"
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

Wristwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Wristwatch.displayName = 'Wristwatch';

export default Wristwatch;