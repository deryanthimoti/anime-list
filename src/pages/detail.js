import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import Header from '../components/Header/Header';

import { BASE_URL } from '../constants';

import styles from '../PageStyles';

function DetailPage() {
  const [content, setContent] = useState(null);
  const [searchParams] = useSearchParams();

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
          <div style={{ display: 'flex', marginTop: '24px', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '700', marginTop: '12px' }}>
                {`${content.attributes.titles.en_jp} (${content.attributes.titles.ja_jp})`}
              </div>
              <div style={{ marginTop: '12px' }}>
                <img src={content.attributes.posterImage.original} style={{ width: '240px', height: '400px'}} />
              </div>
              <div style={{ color: '#FFFFFF', marginTop: '12px' }}>
                <table>
                  <tr>
                    <td>{`User Rating`}</td>
                    <td>:</td>
                    <td>{content.attributes.averageRating}</td>
                  </tr>
                  <tr>
                    <td>{`No. of Episodes`}</td>
                    <td>:</td>
                    <td>{content.attributes.episodeCount}</td>
                  </tr>
                  <tr>
                    <td>{`Minutes per Episode`}</td>
                    <td>:</td>
                    <td>{content.attributes.episodeLength}</td>
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
            <div style={{ color: '#FFFFFF', marginTop: '12px' }}>
              {content.attributes.synopsis}
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
