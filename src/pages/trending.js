import React, { useEffect, useState } from 'react';

import { TRENDING_API, SEARCH_API_LIMIT, API_KEY } from './constants';

import './App.css';

function TrendingPage() {
  const [listOfGifs, setListOfGifs] = useState([]);
  
  // Trending API call here
  useEffect(() => {
    const getTrendingGifs = async () => {
      axios.post(TRENDING_API, {
        api_key: API_KEY,
        limit: SEARCH_API_LIMIT,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  }, []);

  return (
    <div className="giphy-dupe-trending">
      {'Giphy Dupe - Trending Page'}
      {!listOfGifs ? (
        <div>{'No Trending Gifs today'}</div>
      ) : listOfGifs.map(gif => (
        <div>{'gif'}</div>
      ))}
    </div>
  );
}

export default TrendingPage;
