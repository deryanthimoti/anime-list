import React from "react";

import styles from './ParkingSystemHeaderStyles';

export default function ParkingSystemHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>{`OO Parking System`}</div>
      <div className={styles.headerDescription}><i>{`by Ayala Corp`}</i></div>
    </div>
  )
}