import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";

import { useBokuWaAnimeHomepageContext } from '../contexts/BokuWaAnimeContext/BokuWaAnimeContext';
import BokuWaAnimeContext from '../contexts/BokuWaAnimeContext/BokuWaAnimeContext';

import Header from "../components/Header/Header";
import AnimeCard from '../components/AnimeCard/AnimeCard';
import Button from '../components/Button/Button';
import LoadingContainer from '../components/LoadingContainer/LoadingContainer';

import styles from '../PageStyles';

function BokuNoAnimeHomepage() {
  const [state, actions] = useBokuWaAnimeHomepageContext();
  const { animeList, offset, isLoading } = state;
  let navigate = useNavigate();

  const currentAnimeList = useMemo(() => {
    return animeList.slice(offset, offset + 10);
  }, [animeList, offset]);
  

  const onPrevPageButtonPress = () => {
    actions.goToPrevPage();
  };

  const onNextPageButtonPress = () => {
    actions.goToNextPage();
  };

  const handleAnimeCardClick = (animeId) => {
    navigate("/detail?animeId=" + animeId);
  };

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
        {isLoading && (
          <LoadingContainer />
        )}
        {currentAnimeList ? currentAnimeList.map((anime, i) => 
          <AnimeCard 
            key={anime.attributes.canonicalTitle + i}
            titleEn={anime.attributes.titles.en || anime.attributes.titles.en_jp}
            titleJp={anime.attributes.titles.ja_jp}
            description={anime.attributes.description}
            image={anime.attributes.posterImage.original}
            ageRating={anime.attributes.ageRating}
            rating={anime.attributes.averageRating}
            onClick={() => handleAnimeCardClick(anime.id)}
          />
        ) : <></>}
      </div>
      <div className={styles.paginationButtonsContainer}>
        <Button onClick={onPrevPageButtonPress} disabled={offset === 0}>{'←'}</Button>
        <Button onClick={onNextPageButtonPress}>{'→'}</Button>
      </div>
    </div>
  );
}

export default function BokuNoAnimeHomepageContainer () {
  return (
    <BokuWaAnimeContext>
      <BokuNoAnimeHomepage />
    </BokuWaAnimeContext>
  );
}
