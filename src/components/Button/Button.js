import styles from './ButtonStyles'

export default function Button (props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={styles.buttonStyle}>{props.children}</button>
  );
}
