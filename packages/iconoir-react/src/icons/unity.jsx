import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Unity = forwardRef(
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
          <g clip-path="url(#clip0)">
            <path
              d="M4 13L13.5 13M4 13L8 17.5M4 13L8 8.5M13.5 13L18.5 4M13.5 13L18.5 20M18.5 4L12.5 5M18.5 4L20 9.5M18.5 20L20 14.5M18.5 20L12.5 19.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </svg>
    );
  }
);

Unity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Unity.displayName = 'Unity';

export default Unity;