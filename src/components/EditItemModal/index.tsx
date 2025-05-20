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

export interface EditItemModalProps {
  isOpen: boolean;
  item: ShoppingItem;
  onClose?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
}

export default function EditItemModal({
  isOpen = false,
  item,
  onClose,
  onCancel,
  onEdit,
}: EditItemModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [purchased, setPurchased] = useState<boolean>(false);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description || "");
      setQuantity(item.quantity);
      setPurchased(item.purchased || false);
    }
  }, [item]);

  const dispatch = useDispatch();

  const options: Option[] = Array(6)
    .fill(0)
    .map((_, i) => ({ label: `${i + 1}`, value: i + 1 }));

  const resetForm = () => {
    setName("");
    setDescription("");
    setQuantity(0);
  };

  const handleEditItem = () => {
    const newItem: ShoppingItem = {
      id: item.id,
      name,
      description,
      quantity,
      purchased,
    };
    dispatch(editItem(newItem));
    resetForm();
    if (onEdit) {
      onEdit();
    }
  };

  if (!isOpen) return null;

  return (
    <div data-testid="modal" className={classNames(styles.modal, {})}>
      <header className={classNames(styles.header)}>
        <h2 className={classNames(styles.title)}>Shopping List</h2>
        <i
          className={classNames("material-icons", styles.closeButton)}
          onClick={onClose}
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
          <input
            type="checkbox"
            checked={purchased}
            onChange={() => {
              setPurchased(!purchased);
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
        <Button title="Cancel" onClick={onCancel} />
        <Button title="Save Item" primary onClick={handleEditItem} />
      </footer>
    </div>
  );
}
