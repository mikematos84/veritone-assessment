import classNames from "classnames";
import styles from "./EmptyState.module.scss";

export default function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>Your shopping list is empty :(</div>
      <button className={classNames("button", styles.button)}>
        Add your first item
      </button>
    </div>
  );
}
