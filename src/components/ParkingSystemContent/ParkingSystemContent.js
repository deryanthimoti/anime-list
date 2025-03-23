import React, { useMemo } from 'react';

import { useParkingSystemContext } from '../../contexts/ParkingSystemContext/ParkingSystemContext';

import Button from '../Button/Button';
import styles from './ParkingSystemStyles';

export default function ParkingSystemContent() {
  const [state, actions] = useParkingSystemContext();
  // const { animeList, offset, isLoading, totalDataCount } = state;

  return (
    <div className={styles.mainContainer}>
      <Button>{`Initialize Parking Lot`}</Button>
    </div>
  );
}

