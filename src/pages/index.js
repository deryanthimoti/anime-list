import React, { useState } from 'react';

import { SEARCH_API, SEARCH_API_LIMIT, API_KEY } from './constants';
import './App.css';

function GiphyDupeHomepage() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageState, setPageState] = useState('INITIAL'); // INITIAL = homepage, SEARCH_RESULT = search result in homepage

  const onSearchButtonPress = async () => {
    setIsLoading(true);
    axios.post(SEARCH_API, {
      api_key: API_KEY,
      limit: SEARCH_API_LIMIT,
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false);
    })
    .catch(function (error) {
      setIsLoading(true);
      console.log(error);
    });
  };

  return (
    <div className="giphy-dupe-homepage">
      
      <form>
        <input 
          value={searchValue} 
          onChange={(_e, data) => setSearchValue(data.value)}
        />
        <button>
          Search
        </button>
      </form>
      
      {isLoading && (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <div>
            {'Loading. Please Wait'}
          </div>
        </div>
      )}
    </div>
  );
}

export default GiphyDupeHomepage;
