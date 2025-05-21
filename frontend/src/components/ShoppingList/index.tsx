import classNames from "classnames";
import EmptyState from "../EmptyState";
import {
  fetchItemsStart,
  type ShoppingItem,
} from "../../features/shoppingList/shoppingListSlice";
import ShoppingListItem from "../ShoppingListItem";

interface ShoppingListProps {
  addItemModal?: (isOpen: boolean) => void;
  onEditItem?: (item: ShoppingItem) => void;
  onDeleteItem?: (item: ShoppingItem) => void;
}

import styles from "./ShoppingList.module.scss";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "../../app/store";

export default function ShoppingList({
  addItemModal,
  onEditItem,
  onDeleteItem,
}: ShoppingListProps) {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.shoppingList
  );

  useEffect(() => {
    dispatch(fetchItemsStart());
  }, []);

  if (loading) return <div className={styles.spinner} />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={classNames(styles.container)}>
      {items.length === 0 ? (
        <EmptyState onAddItem={() => addItemModal && addItemModal(true)} />
      ) : (
        <>
          <div className={styles.header}>
            <h2 className={styles.title}>You Items</h2>
            <Button
              className={styles.addButton}
              text="Add Item"
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
