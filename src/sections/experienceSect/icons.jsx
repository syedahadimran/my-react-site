import React from "react";

export const CourtIcon = () => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M23 14H51L56 58H18L23 14Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M27 14L24 32H50L47 14"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 43H52"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M37 14V58"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M28 24H46"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ShowerIcon = () => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M25 20V15H36C44 15 50 21 50 29V32"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 32H57L61 37V47H35V42C35 36.477 39.477 32 45 32H46Z"
      fill="currentColor"
    />
    <circle cx="40" cy="56" r="2.2" fill="currentColor" />
    <circle cx="48" cy="56" r="2.2" fill="currentColor" />
    <circle cx="56" cy="56" r="2.2" fill="currentColor" />
    <circle cx="36" cy="64" r="2.2" fill="currentColor" />
    <circle cx="44" cy="64" r="2.2" fill="currentColor" />
    <circle cx="52" cy="64" r="2.2" fill="currentColor" />
    <circle cx="60" cy="64" r="2.2" fill="currentColor" />
  </svg>
);

export const ShopIcon = () => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M21 31L26 20H48L53 31"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 31H56V37C56 42 52 46 47 46C43.5 46 40.5 44 39 41.2C37.5 44 34.5 46 31 46C26 46 22 42 22 37V31H18Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M24 46V61H50V46"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 61V51C33 47.686 35.686 45 39 45C42.314 45 45 47.686 45 51V61"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 61H24"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 61H58"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const LoungeIcon = () => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="22"
      y="20"
      width="30"
      height="22"
      rx="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      d="M18 35C21.314 35 24 37.686 24 41V50H50V41C50 37.686 52.686 35 56 35C59.314 35 62 37.686 62 41V48C62 53.523 57.523 58 52 58H22C16.477 58 12 53.523 12 48V41C12 37.686 14.686 35 18 35Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M20 58V64"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M54 58V64"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const getFeatureIcon = (iconName) => {
  switch (iconName) {
    case "court":
      return <CourtIcon />;
    case "shower":
      return <ShowerIcon />;
    case "shop":
      return <ShopIcon />;
    case "lounge":
      return <LoungeIcon />;
    default:
      return null;
  }
};