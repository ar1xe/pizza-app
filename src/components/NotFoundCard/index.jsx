import React from "react";
import styles from "./NotFoundCard.module.scss";

const NotFoundCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>
          <span>404</span>
          <br />
          <span>😟💩 </span>
          <br />
          Страница не найдена...
        </h1>
      </div>
      <div className={styles.button__container}>
        <button type="button">На главную?</button>
      </div>
    </div>
  );
};

export default NotFoundCard;
