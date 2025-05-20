import classNames from "classnames";

import styles from "./EditItemModal.module.scss";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import SingleSelect, { type Option } from "../SingleSelect";
import { useEffect, useState } from "react";
import Button from "../Button";
import {
  editItem,
  type ShoppingItem,
} from "../../features/shoppingList/ShoppingListSlice";
import { useDispatch } from "react-redux";
import useClickOutside from "../../hooks/useClickOutside";

export interface EditItemModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  item?: ShoppingItem;
}

export default function EditItemModal({
  isOpen = false,
  setIsOpen,
  item: initialItem,
}: EditItemModalProps) {
  const [item, setItem] = useState<ShoppingItem>({} as ShoppingItem);
  const options: Option[] = Array(6)
    .fill(0)
    .map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));
  const dispatch = useDispatch();
  const componentRef = useClickOutside(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (initialItem) {
      setItem(initialItem);
    }
  }, [initialItem]);

  const handleCloseModal = () => setIsOpen(false);

  const resetForm = () => {
    setItem({} as ShoppingItem);
  };

  const handleEditItem = () => {
    const newItem: ShoppingItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      quantity: item.quantity,
      purchased: item.purchased,
    };
    dispatch(editItem(newItem));
    resetForm();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div ref={componentRef} className={classNames(styles.modal, {})}>
      <header className={classNames(styles.header)}>
        <h2 className={classNames(styles.title)}>Shopping List</h2>
        <i
          className={classNames("material-icons", styles.closeButton)}
          onClick={handleCloseModal}
        >
          last_page
        </i>
      </header>
      <div className={classNames(styles.content)}>
        <h1 className={classNames(styles.title)}>Edit an Item</h1>
        <div className={classNames(styles.description)}>
          Edit your item below
        </div>
        <form className={classNames(styles.form)}>
          <TextInput
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <TextArea
            placeholder="Description"
            value={item.description || ""}
            onChange={(e) => setItem({ ...item, description: e.target.value })}
          />
          <SingleSelect
            placeholder="How many?"
            options={options}
            value={item.quantity}
            onChange={(option: Option) =>
              setItem({ ...item, quantity: option.value as number })
            }
          />
          <input
            type="checkbox"
            checked={item.purchased}
            onChange={() => {
              setItem({ ...item, purchased: !item.purchased });
            }}
          />
          <label>Purchased</label>
        </form>
      </div>
      <footer
        className={classNames(styles.footer, {
          [styles.footerBorder]: true,
        })}
      >
        <Button text="Cancel" variant="secondary" onClick={handleCloseModal} />
        <Button text="Save Item" onClick={handleEditItem} />
      </footer>
    </div>
  );
}
