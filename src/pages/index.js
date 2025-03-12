import React from 'react';

import { useBokuWaAnimeHomepageContext } from '../contexts/BokuWaAnimeContext/BokuWaAnimeContext';

import Header from "../components/Header/Header";
import AnimeCard from '../components/AnimeCard/AnimeCard';
import LoadingContainer from '../components/LoadingContainer/LoadingContainer';

import '../App.css';

function BokuNoAnimeHomepage() {
  const [state, actions] = useBokuWaAnimeHomepageContext();
  const { animeList, offset, isLoading } = state;

  const onPrevPageButtonPress = () => {
    actions.goToPrevPage();
  };

  const onNextPageButtonPress = () => {
    actions.goToNextPage();
  };

  return (
    <div style={{ marginLeft: '24px', marginRight: '24px' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
        {isLoading && (
          <LoadingContainer />
        )}
        {animeList ? animeList.map((anime, i) => 
          <AnimeCard 
            key={anime.attributes.canonicalTitle + i}
            titleEn={anime.attributes.titles.en}
            titleJp={anime.attributes.titles.ja_jp}
            description={anime.attributes.description}
            image={anime.attributes.posterImage.original}
            ageRating={anime.attributes.ageRating}
            rating={anime.attributes.averageRating}
          />
        ) : <></>}
      </div>
      {animeList.length > 0}
      <div style={{ marginTop: '24px' }}>
        <button onClick={onPrevPageButtonPress} disabled={offset === 0}>{'←'}</button>
        <button onClick={onNextPageButtonPress}>{'→'}</button>
      </div>
    </div>
  );
}

export default BokuNoAnimeHomepage;
