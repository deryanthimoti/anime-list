import styles from './LoadingContainerStyles';

export default function LoadingContainer () {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>;
    </div>
  );
};
