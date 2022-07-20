import React from "react";
import styles from "./Search.module.scss";

const CloseIcon = ({ setSearchValue }) => {
  return (
    <div>
      <svg
        onClick={() => setSearchValue("")}
        className={styles.close}
        enableBackground="new 0 0 48 48"
        height="35px"
        width="35px"
        id="Layer_2"
        version="1.1"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25.4,24L41.7,7.7c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L24,22.6L7.7,6.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L22.6,24L6.3,40.3  c-0.4,0.4-0.4,1,0,1.4C6.5,41.9,6.7,42,7,42c0.3,0,0.5-0.1,0.7-0.3L24,25.4l16.3,16.3c0.2,0.2,0.5,0.3,0.7,0.3  c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L25.4,24z" />
      </svg>
    </div>
  );
};

export default CloseIcon;
