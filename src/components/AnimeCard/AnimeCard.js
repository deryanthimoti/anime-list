import styles from './AnimeCardStyles';
// {
//   "createdAt": "2013-02-20T16:00:13.609Z",
//   "updatedAt": "2025-03-11T12:00:09.269Z",
//   "slug": "cowboy-bebop",
//   "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
//   "description": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
//   "coverImageTopOffset": 400,
//   "titles": {
//       "en": "Cowboy Bebop",
//       "en_jp": "Cowboy Bebop",
//       "ja_jp": "カウボーイビバップ"
//   },
//   "canonicalTitle": "Cowboy Bebop",
//   "abbreviatedTitles": [
//       "COWBOY BEBOP"
//   ],
//   "averageRating": "82.23",
//   "ratingFrequencies": {
//       "2": "4326",
//       "3": "61",
//       "4": "423",
//       "5": "39",
//       "6": "211",
//       "7": "40",
//       "8": "4132",
//       "9": "59",
//       "10": "876",
//       "11": "84",
//       "12": "2572",
//       "13": "169",
//       "14": "8951",
//       "15": "463",
//       "16": "9275",
//       "17": "944",
//       "18": "11272",
//       "19": "857",
//       "20": "37582"
//   },
//   "userCount": 159386,
//   "favoritesCount": 5118,
//   "startDate": "1998-04-03",
//   "endDate": "1999-04-24",
//   "nextRelease": null,
//   "popularityRank": 44,
//   "ratingRank": 142,
//   "ageRating": "R",
//   "ageRatingGuide": "17+ (violence & profanity)",
//   "subtype": "TV",
//   "status": "finished",
//   "tba": null,
//   "posterImage": {
//       "tiny": "https://media.kitsu.app/anime/poster_images/1/tiny.jpg",
//       "large": "https://media.kitsu.app/anime/poster_images/1/large.jpg",
//       "small": "https://media.kitsu.app/anime/poster_images/1/small.jpg",
//       "medium": "https://media.kitsu.app/anime/poster_images/1/medium.jpg",
//       "original": "https://media.kitsu.app/anime/poster_images/1/original.jpg",
//       "meta": {
//           "dimensions": {
//               "tiny": {
//                   "width": 110,
//                   "height": 156
//               },
//               "large": {
//                   "width": 550,
//                   "height": 780
//               },
//               "small": {
//                   "width": 284,
//                   "height": 402
//               },
//               "medium": {
//                   "width": 390,
//                   "height": 554
//               }
//           }
//       }
//   },
//   "coverImage": {
//       "tiny": "https://media.kitsu.app/anime/1/cover_image/tiny-1f92cfe65c1b31d8b47e36f025d32b35.jpeg",
//       "large": "https://media.kitsu.app/anime/1/cover_image/large-88da0208ac7fdd1a978de8b539008bd8.jpeg",
//       "small": "https://media.kitsu.app/anime/1/cover_image/small-33ff2ab0f599bc15ed73856ecd13fe71.jpeg",
//       "original": "https://media.kitsu.app/anime/1/cover_image/fb57e5f25616633a41f0f5f1ded938ee.jpeg",
//       "meta": {
//           "dimensions": {
//               "tiny": {
//                   "width": 840,
//                   "height": 200
//               },
//               "large": {
//                   "width": 3360,
//                   "height": 800
//               },
//               "small": {
//                   "width": 1680,
//                   "height": 400
//               }
//           }
//       }
//   },
//   "episodeCount": 26,
//   "episodeLength": 25,
//   "totalLength": 626,
//   "youtubeVideoId": "qig4KOK2R2g",
//   "showType": "TV",
//   "nsfw": false
// }
export default function AnimeCard (props) {
  return (
    <div className={styles.imageCardContainer}>
      <div className={styles.imageCardImageContainer}>
        <img src={props.image} style={{ width: 200, height: 320 }} />
        <div className={styles.imageCardDarkOverlay}>
          <div className={styles.imageCardTextContainer}>
            {props.titleEn}
            <div>
              {`(${props.titleJp})`}
            </div>
            <div>{props.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
