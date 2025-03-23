import styles from './ButtonStyles'

export default function ActionButton (props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={styles.actionButtonStyle}>{props.children}</button>
  );
}
