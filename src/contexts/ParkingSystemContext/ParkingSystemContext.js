import React, { useEffect } from "react";
import axios from 'axios';

import { BASE_URL } from "../../constants";

const initialState = {
  parkingLotList: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    // case 'SET_ANIME_LIST':
    //   return { ...state, animeList: action.data };
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
  
  // init
  useEffect(() => {
    setIsLoading(true);
    // dispatch({ type: 'SET_OFFSET', data: 0 });
    // const response = axios({
    //   baseURL: BASE_URL,
    //   url: `/anime?page[limit]=10&page[offset]=${state.offset}`,
    //   headers: {
    //     Accept: 'application/vnd.api+json',
    //     'Content-Type': 'application/vnd.api+json',
    //   },
    // });
    // response.then(res => {
    //   dispatch({ type: 'SET_ANIME_LIST', data: res.data.data });
    //   dispatch({ type: 'SET_TOTAL_DATA_COUNT', data: res.data.meta.count });
    //   setIsLoading(false);
    // });
  }, []);

  const setIsLoading = (isLoading) => {
    dispatch({ type: 'SET_IS_LOADING', data: isLoading });
  };

  const actions = {
    setIsLoading,
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
