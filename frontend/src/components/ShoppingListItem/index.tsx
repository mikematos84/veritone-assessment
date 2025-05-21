import classNames from "classnames";
import {
  editItem,
  type ShoppingItem,
} from "../../features/shoppingList/shoppingListSlice";

import styles from "./ShoppingListItem.module.scss";
import { useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox";

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
      <Checkbox
        checked={isPurchased}
        className={styles.checkbox}
        onChange={() => {
          dispatch(editItem({ ...item, purchased: !isPurchased }));
        }}
      />
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
