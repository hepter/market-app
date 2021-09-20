import React, { ReactElement } from "react";

interface Props {
  color?: string;
}

export default function BasketIcon({ color = "white" }: Props): ReactElement {
  return (
    <svg
      width="24"
      height="24.53"
      viewBox="0 0 24 24.53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z"
        fill={color}
      />
      <g filter="url(#BasketIconFilter0_d)">
        <path
          d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="BasketIconFilter0_d"
          x="4.72388"
          y="4.65747"
          width="14.5527"
          height="12.8091"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
