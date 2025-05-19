import classNames from "classnames";
import { useSelector } from "react-redux";
import EmptyState from "../EmptyState";
import { useState } from "react";
import { ShoppingListItem } from "../ShoppingListItem";

import styles from "./ShoppingList.module.scss";

const mockData = [
  {
    id: 1,
    name: "Apple",
    quantity: 2,
    description: "Fresh and juicy apples",
  },
  {
    id: 2,
    name: "Banana",
    quantity: 5,
    description: "Ripe bananas",
  },
  {
    id: 3,
    name: "Carrot",
    quantity: 3,
    description: "Crunchy carrots",
  },
  {
    id: 4,
    name: "Tomato",
    quantity: 4,
    description: "Fresh tomatoes",
  },
  {
    id: 5,
    name: "Potato",
    quantity: 6,
    description: "Starchy potatoes",
  },
];

export default function ShoppingList() {
  const items = useSelector((state: any) => mockData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditItem = (id: number) => {};
  const handleDeleteItem = (id: number) => {};
  const handleAddItem = () => {
    // Logic to add a new item
    setIsModalOpen(true);
  };

  return (
    <div className={classNames(styles.container)}>
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className={styles.header}>
            <h2 className={styles.title}>You Items</h2>
            <button className={"button"} onClick={handleAddItem}>
              Add Item
            </button>
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <ShoppingListItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
