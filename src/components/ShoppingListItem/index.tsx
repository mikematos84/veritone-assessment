import classNames from "classnames";
import {
  editItem,
  type ShoppingItem,
} from "../../features/shoppingList/shoppingListSlice";
import { useState } from "react";

import styles from "./ShoppingListItem.module.scss";
import { useDispatch } from "react-redux";

interface ShoppingListItemProps {
  item: ShoppingItem;
  onDeleteItem?: (item: ShoppingItem) => void;
  onEditItem?: (item: ShoppingItem) => void;
}

export default function ShoppingListItem({
  item,
  onDeleteItem,
  onEditItem,
}: ShoppingListItemProps) {
  const isPurchased = item?.purchased;
  const dispatch = useDispatch();

  return (
    <li
      className={classNames(styles.item, {
        [styles.itemChecked]: isPurchased,
      })}
    >
      <i
        className={classNames(styles.checkbox, {
          ["material-icons-outlined"]: !isPurchased,
          ["material-icons"]: isPurchased,
          [styles.checkboxChecked]: isPurchased,
        })}
        onClick={() => {
          dispatch(editItem({ ...item, purchased: !isPurchased }));
        }}
      >
        {!isPurchased ? "check_box_outline_blank" : "check_box"}
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
            styles.actionsButton
          )}
          onClick={() => {
            if (onEditItem) {
              onEditItem(item);
            }
          }}
        >
          edit
        </i>
        <i
          className={classNames(
            "material-icons-outlined",
            styles.actionsButton
          )}
          onClick={() => {
            if (onDeleteItem) {
              onDeleteItem(item);
            }
          }}
        >
          delete
        </i>
      </div>
    </li>
  );
}
