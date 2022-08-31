import React from "react";

function PlaylistIcon({ color = "#fff" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
        fill={color}
      />
      <path
        d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
        fill={color}
      />
    </svg>
  );
}

export default PlaylistIcon;
