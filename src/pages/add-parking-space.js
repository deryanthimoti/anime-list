import React, { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';

import ParkingSystemContext, { useParkingSystemContext } from '../contexts/ParkingSystemContext/ParkingSystemContext';

import ParkingSystemHeader from '../components/ParkingSystemHeader/ParkingSystemHeader';
import AddParkingSpacesContent from '../components/ParkingSystemContent/AddParkingSpacesContent';

import styles from '../PageStyles';

function AddParkingSpacePage() {
  return (
    <div className={styles.mainContainer}>
      <ParkingSystemHeader />
      <AddParkingSpacesContent />
      <ToastContainer />
    </div>
  );
}

export default function AddParkingSpacesPageContainer () {
  return (
    <ParkingSystemContext>
      <AddParkingSpacePage />
    </ParkingSystemContext>
  );
}
