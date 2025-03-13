import styles from './ButtonStyles'

export default function Button (props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} class={styles.buttonStyle}>{props.children}</button>
  );
}
