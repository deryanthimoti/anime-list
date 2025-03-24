import React, { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { 
  PARKING_SYSTEM_BASE_URL, 
  GET_PARKING_SPACES,
  ADD_PARKING_SPACES,
  PARK_VEHICLE,
  UNPARK_VEHICLE,
} from "../../constants";

const initialState = {
  parkingSpaceList: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PARKING_SPACE_LIST':
      return { ...state, parkingSpaceList: action.data };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.data };
    // case 'SET_OFFSET':
    //   return { ...state, offset: action.data };
    // case 'SET_TOTAL_DATA_COUNT':
    //   return { ...state, totalDataCount: action.data };
    default:
      return state;
  }
};

const ParkingSystemStateContext = React.createContext(null);
ParkingSystemStateContext.displayName = 'ParkingSystemStateContext';

const ParkingSystemActionContext = React.createContext(null);
ParkingSystemActionContext.displayName = 'ParkingSystemActionContext';

export default function ParkingSystemContext (props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoading(true);
    dispatch({ type: 'SET_OFFSET', data: 0 });
    const response = axios({
      baseURL: PARKING_SYSTEM_BASE_URL,
      url: GET_PARKING_SPACES,
    });
    response.then(res => {
      dispatch({ type: 'SET_PARKING_SPACE_LIST', data: res.data.data })
      setIsLoading(false);
    });
  }, []);

  const setIsLoading = (isLoading) => {
    dispatch({ type: 'SET_IS_LOADING', data: isLoading });
  };

  const addParkingLot = async (items) => {
    const response = axios({
      baseURL: PARKING_SYSTEM_BASE_URL,
      url: ADD_PARKING_SPACES,
      method: 'post',
      data: {
        parkingLots: [...items],
      }
    });
    response.then(res => {
      toast.success(res.data.message, { theme: 'colored' });
      setTimeout(() => {
        navigate('/parking-system');
      }, 2000);
    });
  };

  const park = async ({ vehicleType, entryPoint, entryDateTime }) => {
    const date = entryDateTime ? new Date(entryDateTime) : new Date();
    const response = axios({
      baseURL: PARKING_SYSTEM_BASE_URL,
      url: PARK_VEHICLE,
      method: 'post',
      data: {
        vehicleType,
        entryPoint,
        entryTime: date
      }
    });
    response.then(res => {
      toast.success(res.data.message, { theme: 'colored' });
      setIsLoading(true);
      dispatch({ type: 'SET_OFFSET', data: 0 });
      const response = axios({
        baseURL: PARKING_SYSTEM_BASE_URL,
        url: GET_PARKING_SPACES,
      });
      response.then(res => {
        dispatch({ type: 'SET_PARKING_SPACE_LIST', data: res.data.data })
        setIsLoading(false);
      });
    });
  };

  const unpark = async (parkingLotId, exitDateTime) => {
    const date = exitDateTime ? new Date(exitDateTime) : new Date();
    const response = axios({
      baseURL: PARKING_SYSTEM_BASE_URL,
      url: UNPARK_VEHICLE,
      method: 'post',
      data: {
        parkingLotId,
        exitTime: date
      }
    });
    response.then(res => {
      toast.success(res.data.message, { theme: 'colored' });
      setIsLoading(true);
      dispatch({ type: 'SET_OFFSET', data: 0 });
      const response = axios({
        baseURL: PARKING_SYSTEM_BASE_URL,
        url: GET_PARKING_SPACES,
      });
      response.then(res => {
        dispatch({ type: 'SET_PARKING_SPACE_LIST', data: res.data.data })
        setIsLoading(false);
      });
    });
  };

  const actions = {
    setIsLoading,
    addParkingLot,
    park,
    unpark,
  };

  return (
    <ParkingSystemStateContext.Provider value={state}>
      <ParkingSystemActionContext.Provider value={actions}>
        {props.children}
      </ParkingSystemActionContext.Provider>
    </ParkingSystemStateContext.Provider>
  );
};

export function useParkingSystemStateContext() {
  return React.useContext(ParkingSystemStateContext);
}

export function useParkingSystemActionContext() {
  return React.useContext(ParkingSystemActionContext);
}

export function useParkingSystemContext() {
  return [useParkingSystemStateContext(), useParkingSystemActionContext()];
}
