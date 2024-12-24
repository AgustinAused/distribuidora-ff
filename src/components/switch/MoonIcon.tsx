import React from "react";

interface MoonIconProps extends React.SVGProps<SVGSVGElement> {}

export const MoonIcon: React.FC<MoonIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0112.25 3.56a7.5 7.5 0 109.502 11.441z"
      fill="currentColor"
    />
  </svg>
);
