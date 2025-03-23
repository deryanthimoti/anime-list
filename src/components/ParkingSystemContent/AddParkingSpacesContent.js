import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useParkingSystemActionContext } from '../../contexts/ParkingSystemContext/ParkingSystemContext';

import Button from '../Button/Button';
import ActionButton from '../Button/ActionButton';

import styles from './ParkingSystemStyles';

export default function AddParkingSpacesContent() {
  const { addParkingLot } = useParkingSystemActionContext();
  const [formState, setFormState] = useState([{
    parkingSpaceType: 'S',
    distances: [0, 0, 0],
  }]);
  let navigate = useNavigate();

  const onSpaceTypeChange = (event, index) => {
    const tempFormState = [...formState];
    tempFormState[index].parkingSpaceType = event.target.value;
    setFormState(tempFormState);
  };

  const onChangeDistance = (event, index, i) => {
    const tempFormState = [...formState];
    tempFormState[index].distances[i] = event.target.value;
    setFormState(tempFormState);
  };

  const handleDeleteEntry = (index) => {
    const tempFormState = [...formState];
    tempFormState.splice(index, 1);
    setFormState(tempFormState);
  };

  const handleAddEntry = () => {
    const tempFormState = [...formState];
    tempFormState.push({
      parkingSpaceType: 'S',
      distances: [0, 0, 0],
    });
    setFormState(tempFormState);
  };

  const handleSave = () => {
    const tempFormState = [...formState];
    tempFormState.map(fState => {
      const dist = fState.distances.map(Number);
      return {
        ...fState,
        distances: dist,
      }
    })
    addParkingLot(tempFormState);
  };

  return (
    <div className={styles.mainContainer}>
      <Button onClick={() => navigate('/parking-system')}>{`Return`}</Button>

      <div className={styles.parkingSpaceTableTitle}>Parking Space</div>
      <table className={styles.parkingSpaceTable}>
        <thead>
          <tr>
            <th>Space Type</th>
            <th>Dist. to Entry Point #1</th>
            <th>Dist. to Entry Point #2</th>
            <th>Dist. to Entry Point #3</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formState.map((item, index) => (
            <tr key={index}>
              <td>
                <select value={item.parkingSpaceType} onChange={(e) => onSpaceTypeChange(e, index)}>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </td>
              {item.distances.map((x, i) => (
                <td key={i}><input min='0' type='number' value={x} onChange={(e) => onChangeDistance(e, index, i)} /></td>
              ))}
              <td>{formState.length > 1 && (<ActionButton onClick={() => handleDeleteEntry(index)}>Remove</ActionButton>)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>
              <ActionButton onClick={handleAddEntry}>Add Entry</ActionButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}

