import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Lifebelt = forwardRef(
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.2351 9.10943C8.474 9.83764 8 10.8635 8 12C8 13.1365 8.474 14.1624 9.2351 14.8906M9.2351 9.10943C9.95339 8.42218 10.9274 8 12 8C13.0726 8 14.0466 8.42218 14.7649 9.10943M9.2351 9.10943L5 5M14.7649 9.10943C15.526 9.83764 16 10.8635 16 12C16 13.1365 15.526 14.1624 14.7649 14.8906M14.7649 9.10943L19 5M14.7649 14.8906C14.0466 15.5778 13.0726 16 12 16C10.9274 16 9.95339 15.5778 9.2351 14.8906M14.7649 14.8906L19 19M9.2351 14.8906L5 19"
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

Lifebelt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Lifebelt.displayName = 'Lifebelt';

export default Lifebelt;