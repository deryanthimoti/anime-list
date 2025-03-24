import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";

import { useParkingSystemContext } from '../../contexts/ParkingSystemContext/ParkingSystemContext';

import Button from '../Button/Button';
import ActionButton from '../Button/ActionButton';

import styles from './ParkingSystemStyles';

export default function ParkingSystemContent() {
  const [state, actions] = useParkingSystemContext();
  const [formState, setFormState] = useState({
    entryPoint: '0',
    vehicleType: 'S',
    entryTime: undefined,
  });
  let navigate = useNavigate();

  const onVehicleTypeChange = (event) => {
    const tempFormState = {...formState};
    tempFormState.vehicleType = event.target.value;
    setFormState(tempFormState);
  };

  const onEntryPointChange = (event) => {
    const tempFormState = {...formState};
    tempFormState.entryPoint = event.target.value;
    setFormState(tempFormState);
  };

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
        <Button onClick={() => actions.reInitialize()}>{`Initialize Parking Lot`}</Button>
        <Button onClick={() => navigate("/add-parking-space")}>{`Add Parking Spaces`}</Button>
      </div>

      {state.parkingSpaceList.length > 0 && (
        <div className={styles.parkingForm}>
          <div>
            Vehicle Type
            <select style={{ marginLeft: 8 }} value={formState.vehicleType} onChange={(e) => onVehicleTypeChange(e)}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>
          <div>
            Entry Point
            <select style={{ marginLeft: 8 }} value={formState.entryPoint} onChange={(e) => onEntryPointChange(e)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          
          <DatePicker
            selected={formState.entryTime}
            onChange={(date) => setFormState({ ...formState, entryTime: date })}
            isClearable
            placeholderText="Select time and date"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            maxDate={new Date()}
          />

          <div style={{ marginTop: 8 }}>
            <ActionButton onClick={() => actions.park({ vehicleType: formState.vehicleType, entryPoint: formState.entryPoint, entryDateTime: formState.entryTime })}>Park Vehicle</ActionButton>
          </div>
        </div>
      )}
      
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
                {/* Join the database 1st before sending the data */}
                {!parkingSpace.is_available && <ActionButton onClick={() => actions.unpark(parkingSpace.id)}>Unpark</ActionButton>}
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

