import React from 'react';
import myImg from '../../Assets/pic2.png'; // Assuming this is the path to your image

const AvatarPicSvg = () => (
  <svg width="400px" height="400px" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <clipPath id="circleView">
        <circle cx="200" cy="200" r="200"></circle> {/* Increased circle size */}
      </clipPath>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0, 0)"> {/* Adjusted translation to accommodate the larger circle */}
        <image href={myImg} x="0" y="0" width="400px" height="400px" clipPath="url(#circleView)" />
      </g>
    </g>
  </svg>
);

export default AvatarPicSvg;
