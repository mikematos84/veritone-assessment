import styles from "./Header.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>Shopping List</div>
      </div>
    </header>
  );
}
