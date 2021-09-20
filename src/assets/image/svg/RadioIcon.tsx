import React, { ReactElement } from "react";

interface Props {
  checked?: boolean;
  color: string;
}

export default function RadioIcon({ checked, color }: Props): ReactElement {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="10"
        fill="white"
        stroke={color}
        stroke-width="2"
      />
      {checked !== undefined && (
        <path
          d="M15 9L9.5 14L7 11.7273"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </svg>
  );
}
