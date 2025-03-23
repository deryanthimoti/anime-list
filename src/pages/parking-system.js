import React from 'react';
import { ToastContainer } from 'react-toastify';

import ParkingSystemContext from '../contexts/ParkingSystemContext/ParkingSystemContext';

import ParkingSystemHeader from '../components/ParkingSystemHeader/ParkingSystemHeader';
import ParkingSystemContent from '../components/ParkingSystemContent/ParkingSystemContent';

import styles from '../PageStyles';

function ParkingSystemPage() {

  return (
    <div className={styles.mainContainer}>
      <ParkingSystemHeader />
      <ParkingSystemContent />
      <ToastContainer />
    </div>
  );
}

export default function ParkingSystemPageContainer () {
  return (
    <ParkingSystemContext>
      <ParkingSystemPage />
    </ParkingSystemContext>
  );
}
