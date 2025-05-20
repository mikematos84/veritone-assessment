import classNames from "classnames";
import EmptyState from "../EmptyState";
import type { ShoppingItem } from "../../features/shoppingList/ShoppingListSlice";
import ShoppingListItem from "../ShoppingListItem";

interface ShoppingListProps {
  items: ShoppingItem[];
  addItemModal?: (isOpen: boolean) => void;
  onEditItem?: (item: ShoppingItem) => void;
  onDeleteItem?: (item: ShoppingItem) => void;
}

import styles from "./ShoppingList.module.scss";
import Button from "../Button";

export default function ShoppingList({
  items,
  addItemModal,
  onEditItem,
  onDeleteItem,
}: ShoppingListProps) {
  return (
    <div className={classNames(styles.container)}>
      {items.length === 0 ? (
        <EmptyState onAddItem={() => addItemModal && addItemModal(true)} />
      ) : (
        <>
          <div className={styles.header}>
            <h2 className={styles.title}>You Items</h2>
            <Button
              title="Add Item"
              primary
              className={styles.addButton}
              onClick={() => addItemModal && addItemModal(true)}
            >
              Add Item
            </Button>
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <ShoppingListItem
                key={item.id}
                item={item}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
