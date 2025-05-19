import classNames from "classnames";
import type { ShoppingListItem } from "../../features/shoppingList/ShoppingListSlice";
import { useState } from "react";

import styles from "./ShoppingListItem.module.scss";

interface ShoppingListItemProps {
  item: ShoppingListItem;
  onCheckedHandler?: () => void;
  onDeleteHandler?: () => void;
  onEditHandler?: () => void;
}

export function ShoppingListItem({
  item = {
    id: 1,
    name: "Tomatoes",
    quantity: 1,
    description: "Fresh and juicy tomatoes",
  },
  onCheckedHandler,
  onDeleteHandler,
  onEditHandler,
}: ShoppingListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    if (onCheckedHandler) {
      onCheckedHandler();
    }
  };

  const handleDelete = () => {
    if (onDeleteHandler) {
      onDeleteHandler();
    }
  };

  const handleEdit = () => {
    if (onEditHandler) {
      onEditHandler();
    }
  };

  return (
    <li
      className={classNames(styles.item, {
        [styles["item--checked"]]: isChecked,
      })}
    >
      <i
        className={classNames(styles.checkbox, {
          ["material-icons-outlined"]: !isChecked,
          ["material-icons"]: isChecked,
          [styles["checkbox--checked"]]: isChecked,
        })}
        onClick={handleCheckboxChange}
      >
        {!isChecked ? "check_box_outline_blank" : "check_box"}
      </i>
      <div className={styles.content}>
        <div className={styles.title}>{item.name}</div>
        {item.description && (
          <div className={styles.description}>{item.description}</div>
        )}
      </div>
      <div className={styles.actions}>
        <i
          className={classNames(
            "material-icons-outlined",
            styles["actions--button"]
          )}
          onClick={handleEdit}
        >
          edit
        </i>
        <i
          className={classNames("material-icons-outlined")}
          onClick={handleDelete}
        >
          delete
        </i>
      </div>
    </li>
  );
}
