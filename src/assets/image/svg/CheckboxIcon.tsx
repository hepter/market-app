import React, { ReactElement } from "react";

interface Props {
  checked?: boolean;
  color?: string;
}

export default function CheckboxIcon({
  checked,
  color = "white",
}: Props): ReactElement {
  return (
    <div>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#CheckboxIconFilter0_d)">
          <rect x="7" y="6" width="22" height="22" rx="2" fill={color} />
        </g>
        {checked !== undefined && (
          <path
            d="M23.6667 13L16.3333 20.3333L13 17"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        )}
        <defs>
          <filter
            id="CheckboxIconFilter0_d"
            x="0"
            y="0"
            width="36"
            height="36"
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
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="3.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.364706 0 0 0 0 0.219608 0 0 0 0 0.752941 0 0 0 0.4 0"
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
    </div>
  );
}
