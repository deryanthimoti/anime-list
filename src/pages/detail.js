import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from '../components/Header/Header';
import Button from '../components/Button/Button';

import { BASE_URL } from '../constants';

import styles from '../PageStyles';

function DetailPage() {
  const [content, setContent] = useState(null);
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  useEffect(() => {
    const response = axios({
      baseURL: BASE_URL,
      url: `/anime?filter[id]=${searchParams.get("animeId")}`,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
    });
    response.then(res => {
      setContent(res.data.data[0]);
    });
  }, []);

  return (
    <div>
      {content ? (
        <div className={styles.mainContainer}>
          <Header />
          <div className={styles.backToHomeButtonContainer}>
            <Button onClick={() => navigate("/")}>{'← Back to Home'}</Button>
          </div>
          <div className={styles.detailPageTitleSection}>
            {`${content.attributes.titles.en_jp} (${content.attributes.titles.ja_jp})`}
          </div>
          <div className={styles.detailPageContainer}>
            <div className={styles.detailPageDetailSection}>
              <div className={styles.detailPageImageContainer}>
                <img alt={content.attributes.posterImage.original} src={content.attributes.posterImage.original} className={styles.detailPageImage} />
              </div>
              <div className={styles.detailPageDetailTable}>
                <table>
                  <tr>
                    <td>{`User Rating`}</td>
                    <td>:</td>
                    <td>{content.attributes.averageRating}</td>
                  </tr>
                  <tr>
                    <td>{`No. of Episodes`}</td>
                    <td>:</td>
                    <td>{content.attributes.episodeCount || '-'}</td>
                  </tr>
                  <tr>
                    <td>{`Minutes per Episode`}</td>
                    <td>:</td>
                    <td>{content.attributes.episodeLength || '?'}</td>
                  </tr>
                  <tr>
                    <td>{`Status`}</td>
                    <td>:</td>
                    <td>{content.attributes.status}</td>
                  </tr>
                  <tr>
                    <td>{`Age Rating`}</td>
                    <td>:</td>
                    <td>{content.attributes.ageRating}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.detailPageTitleAndSynopsisSection}>
              <div className={styles.detailPageTitleText}>Synopsis</div>
              <div className={styles.detailPageDescText}>
                {content.attributes.synopsis}
              </div>
              <div className={styles.detailPageTitleText}>Airing Date</div>
              <div className={styles.detailPageDescText}>
                {content.attributes.startDate} - {content.attributes.endDate || '? (Ongoing)'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>'Coming Soon'</>
      )}
    </div>
  );
}

export default DetailPage;
