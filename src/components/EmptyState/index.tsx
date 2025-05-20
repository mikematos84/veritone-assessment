import styles from "./EmptyState.module.scss";
import Button from "../Button";

export interface EmptyStateProps {
  onAddItem?: () => void;
}

export default function EmptyState({ onAddItem }: EmptyStateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>Your shopping list is empty :(</div>
      <Button text="Add your first item" onClick={onAddItem} />
    </div>
  );
}
