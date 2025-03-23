import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";

import { useBokuWaAnimeHomepageContext } from '../contexts/BokuWaAnimeContext/BokuWaAnimeContext';
import ParkingSystemContext from '../contexts/BokuWaAnimeContext/BokuWaAnimeContext';

import ParkingSystemHeader from '../components/ParkingSystemHeader/ParkingSystemHeader';
import ParkingSystemContent from '../components/ParkingSystemContent/ParkingSystemContent';

import styles from '../PageStyles';

function ParkingSystemPage() {
  const [state, actions] = useBokuWaAnimeHomepageContext();
  // const { animeList, offset, isLoading, totalDataCount } = state;
  let navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <ParkingSystemHeader />
      <ParkingSystemContent />
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
