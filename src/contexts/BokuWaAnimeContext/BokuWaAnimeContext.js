import React, { useEffect } from "react";
import axios from 'axios';

import { BASE_URL } from "../../constants";
import { mockList } from "../../mocks/mockList";

const initialState = {
  animeList: [],
  isLoading: false,
  offset: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      return { ...state, animeList: action.data };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.data };
    case 'SET_OFFSET':
      return { ...state, offset: action.data };
    default:
      return state;
  }
};

const BokuWaAnimeHomepageStateContext = React.createContext(null);
BokuWaAnimeHomepageStateContext.displayName = 'BokuWaAnimeHomepageStateContext';

const BokuWaAnimeHomepageActionContext = React.createContext(null);
BokuWaAnimeHomepageActionContext.displayName = 'BokuWaAnimeHomepageActionContext';

export default function BokuWaAnimeContext (props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  // init
  useEffect(() => {
    setIsLoading(true);
    dispatch({ type: 'SET_OFFSET', data: 0 });
    const response = axios({
      baseURL: BASE_URL,
      url: `/anime?page[limit]=10&page[offset]=${state.offset}`,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
    });
    response.then(res => {
      dispatch({ type: 'SET_ANIME_LIST', data: res.data.data });
      setIsLoading(false);
    });
    dispatch({ type: 'SET_ANIME_LIST', data: mockList });
  }, []);

  const setIsLoading = (isLoading) => {
    dispatch({ type: 'SET_IS_LOADING', data: isLoading });
  };

  const goToPrevPage = async () => {
    setIsLoading(true);
    dispatch({ type: 'SET_OFFSET', data: state.offset - 10 });
    setIsLoading(false);
  };

  const goToNextPage = async () => {
    setIsLoading(true);
    if (state.offset === state.animeList.length - 10) {
      const response = axios({
        baseURL: BASE_URL,
        url: `/anime?page[limit]=10&page[offset]=${state.offset + 10}`,
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
      });
      response.then(res => {
        dispatch({ type: 'SET_OFFSET', data: state.offset + 10 });
        const temp = [...state.animeList];
        temp.push(...res.data.data);
        dispatch({ type: 'SET_ANIME_LIST', data: temp });
        setIsLoading(false);
      });
    } else {
      dispatch({ type: 'SET_OFFSET', data: state.offset + 10 });
      setIsLoading(false);
    }
  };

  const actions = {
    setIsLoading,
    goToNextPage,
    goToPrevPage,
  };

  return (
    <BokuWaAnimeHomepageStateContext.Provider value={state}>
      <BokuWaAnimeHomepageActionContext.Provider value={actions}>
        {props.children}
      </BokuWaAnimeHomepageActionContext.Provider>
    </BokuWaAnimeHomepageStateContext.Provider>
  );
};

export function useBokuWaAnimeHomepageStateContext() {
  return React.useContext(BokuWaAnimeHomepageStateContext);
}

export function useBokuWaAnimeHomepageActionContext() {
  return React.useContext(BokuWaAnimeHomepageActionContext);
}

export function useBokuWaAnimeHomepageContext() {
  return [useBokuWaAnimeHomepageStateContext(), useBokuWaAnimeHomepageActionContext()];
}
