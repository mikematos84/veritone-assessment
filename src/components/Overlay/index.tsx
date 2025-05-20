import styles from "./Overlay.module.scss";

export default function Overlay(): JSX.Element {
  return <div data-testid="overlay" className={styles.overlay} />;
}
