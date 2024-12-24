import React from "react";

interface SunIconProps extends React.SVGProps<SVGSVGElement> {}

export const SunIcon: React.FC<SunIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1.5v3M12 19.5v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1.5 12h3M19.5 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
    />
  </svg>
);
