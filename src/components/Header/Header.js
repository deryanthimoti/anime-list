import React from "react";

import styles from './HeaderStyles';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>{`Boku Wa Anime`}</div>
      <div className={styles.headerDescription}><i>{`Kaizoku ou ni orewa naru!`}</i></div>
    </div>
  )
}