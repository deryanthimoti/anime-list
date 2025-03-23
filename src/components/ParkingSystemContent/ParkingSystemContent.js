import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useParkingSystemContext } from '../../contexts/ParkingSystemContext/ParkingSystemContext';

import Button from '../Button/Button';
import ActionButton from '../Button/ActionButton';

import styles from './ParkingSystemStyles';

export default function ParkingSystemContent() {
  const [state, actions] = useParkingSystemContext();
  let navigate = useNavigate();

  const getSpaceType = (val) => {
    switch (val) {
      case 0:
      case '0':
        return 'Small'
      case 1:
      case '1':
        return 'Medium'
      case 2:
      case '2':
        return 'Large'
      default:
        return ''
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainButtonContainer}>
        <Button>{`Initialize Parking Lot`}</Button>
        <Button onClick={() => navigate("/add-parking-space")}>{`Add Parking Spaces`}</Button>
      </div>

      <div className={styles.parkingSpaceTableTitle}>Parking Space</div>
      <table className={styles.parkingSpaceTable}>
        <thead>
          <tr>
            <th>Space Type</th>
            <th>Dist. to Entry Point #1</th>
            <th>Dist. to Entry Point #2</th>
            <th>Dist. to Entry Point #3</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.parkingSpaceList ? state.parkingSpaceList.map((parkingSpace, index) => (
            <tr key={index}>
              <td>{getSpaceType(parkingSpace.parking_space_type)}</td>
              <td>{parkingSpace.distance_0}</td>
              <td>{parkingSpace.distance_1}</td>
              <td>{parkingSpace.distance_2}</td>
              <td>
                <div className={styles.availabilityContainer}>
                  <div className={parkingSpace.is_available ? styles.onlineIndicator : styles.offlineIndicator}></div>
                  {parkingSpace.is_available ? 'Available' : 'Unavailable'}
                </div>
              </td>
              <td>
                {!parkingSpace.is_available && <ActionButton>Unpark</ActionButton>}
              </td>
            </tr>
          )) : (
            <>
              No parking space at the moment
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

