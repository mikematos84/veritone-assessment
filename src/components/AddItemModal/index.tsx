import classNames from "classnames";

import styles from "./AddItemModal.module.scss";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import SingleSelect, { type Option } from "../SingleSelect";
import { useState } from "react";
import Button from "../Button";
import {
  addItem,
  type ShoppingItem,
} from "../../features/shoppingList/ShoppingListSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

export interface AddItemModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
}

export default function AddItemModal({
  isOpen = false,
  setIsOpen,
  title = "Shopping List",
}: AddItemModalProps) {
  const [item, setItem] = useState<ShoppingItem>({} as ShoppingItem);
  const dispatch = useDispatch();

  const options: Option[] = Array(6)
    .fill(0)
    .map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));

  const resetForm = () => setItem({} as ShoppingItem);

  const handleCloseModal = () => setIsOpen(false);

  const handleAddItem = () => {
    dispatch(addItem({ ...item, id: uuidv4() } as ShoppingItem));
    resetForm();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div data-testid="modal" className={classNames(styles.modal, {})}>
      <header className={classNames(styles.header)}>
        <h2 className={classNames(styles.title)}>{title}</h2>
        <i
          className={classNames("material-icons", styles.closeButton)}
          onClick={handleCloseModal}
        >
          last_page
        </i>
      </header>
      <div className={classNames(styles.content)}>
        <h1 className={classNames(styles.title)}>Add an Item</h1>
        <div className={classNames(styles.description)}>
          Add your new item below
        </div>
        <form className={classNames(styles.form)}>
          <TextInput
            placeholder="Item Name"
            value={item?.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <TextArea
            placeholder="Description"
            value={item?.description || ""}
            onChange={(e) => setItem({ ...item, description: e.target.value })}
          />
          <SingleSelect
            placeholder="How many?"
            options={options}
            value={item?.quantity}
            onChange={(option: Option) =>
              setItem({ ...item, quantity: option.value as number })
            }
          />
        </form>
      </div>
      <footer
        className={classNames(styles.footer, {
          [styles.footerBorder]: true,
        })}
      >
        <Button title="Cancel" onClick={handleCloseModal} />
        <Button title="Add Task" primary onClick={handleAddItem} />
      </footer>
    </div>
  );
}
