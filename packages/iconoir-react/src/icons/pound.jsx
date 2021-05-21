import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Pound = forwardRef(
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
            d="M17.3333 8.8C17.3333 6.14903 15.0948 4 12.3333 4C9.57191 4 7.33333 6.14903 7.33333 8.8C7.33333 11.451 9.57191 13.6 12.3333 13.6M12.3333 13.6H15.1111M12.3333 13.6H10.6667M4 13.6H10.6667M10.6667 13.6C9.55556 16.2667 7.88889 18.9333 5.66667 20H16.2222C16.2222 20 17.8889 20 19 18.9333"
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

Pound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pound.displayName = 'Pound';

export default Pound;