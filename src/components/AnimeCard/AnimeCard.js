import styles from './AnimeCardStyles';

export default function AnimeCard (props) {
  return (
    <div onClick={props.onClick} className={styles.imageCardContainer}>
      <div className={styles.imageCardImageContainer}>
        <img alt={props.image} src={props.image} className={styles.image} />
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
