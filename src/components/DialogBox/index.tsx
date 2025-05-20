import { useDispatch } from "react-redux";
import Button from "../Button";
import {
  removeItem,
  type ShoppingItem,
} from "../../features/shoppingList/ShoppingListSlice";

import styles from "./DialogBox.module.scss";

export interface DialogBoxProps {
  item?: ShoppingItem;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function DialogBox({
  item,
  isOpen = false,
  setIsOpen,
}: DialogBoxProps) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  const handleDelete = () => {
    if (item) {
      dispatch(removeItem(item));
    }
    if (setIsOpen) {
      setIsOpen(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Delete Item?</h1>
      <p>Are you sure you want to delete this item? This can not be undone.</p>
      <div className={styles.actions}>
        <Button onClick={handleCancel} title="Cancel">
          Cancel
        </Button>
        <Button onClick={handleDelete} title="Delete" primary>
          Delete
        </Button>
      </div>
    </div>
  );
}
