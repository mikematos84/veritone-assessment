import classNames from "classnames";

import styles from "./AddItemModal.module.scss";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import SingleSelect, { type Option } from "../SingleSelect";
import { useState } from "react";
import Button from "../Button";
import type { ShoppingItem } from "../../features/shoppingList/ShoppingListSlice";
import { v4 as uuidv4 } from "uuid";

export interface AddItemModalProps {
  isOpen: boolean;
  title: string;
  onClose?: () => void;
  onCancel?: () => void;
  onAdd?: () => void;
}

export default function AddItemModal({
  isOpen = false,
  title = "Shopping List",
  onClose,
  onCancel,
  onAdd,
}: AddItemModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const options: Option[] = Array(6)
    .fill(0)
    .map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));

  const resetForm = () => {
    setName("");
    setDescription("");
    setQuantity(0);
  };

  const handleAddItem = () => {
    const item: Partial<ShoppingItem> = {
      id: uuidv4(),
      name,
      description,
      quantity,
    };
    if (onAdd) {
      onAdd(item);
    }
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div data-testid="modal" className={classNames(styles.modal, {})}>
      <header className={classNames(styles.header)}>
        <h2 className={classNames(styles.title)}>{title}</h2>
        <i
          className={classNames("material-icons", styles.closeButton)}
          onClick={onClose}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SingleSelect
            placeholder="How many?"
            options={options}
            value={quantity}
            onChange={(option: Option) => setQuantity(option.value as number)}
          />
        </form>
      </div>
      <footer
        className={classNames(styles.footer, {
          [styles.footerBorder]: true,
        })}
      >
        <Button title="Cancel" onClick={onCancel} />
        <Button title="Add Task" primary onClick={handleAddItem} />
      </footer>
    </div>
  );
}
