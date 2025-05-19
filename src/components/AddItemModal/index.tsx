import classNames from "classnames";
import Modal, { type ModalProps } from "../Modal";

import styles from "./AddItemModal.module.scss";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import SingleSelect, { type Option } from "../SingleSelect";
import { useState } from "react";

export interface AddItemModalProps extends ModalProps {}

export default function AddItemModal({
  isOpen: initialIsOpen = true,
  title = "Shopping List",
  overlay = true,
}: AddItemModalProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const options: Option[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onCancelHandler = () => {};

  const onAddHandler = () => {};

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      overlay={overlay}
      onClose={onCloseHandler}
      onCancel={onCloseHandler}
      onAdd={onCloseHandler}
    >
      <div className={classNames(styles.content)}>
        <h1 className={classNames(styles.title)}>Add an Item</h1>
        <div className={classNames(styles.description)}>
          Add your new item below
        </div>
        <form className={classNames(styles.form)}>
          <TextInput placeholder="Item Name" />
          <TextArea placeholder="Description" />
          <SingleSelect placeholder="How many?" options={options} />
        </form>
      </div>
    </Modal>
  );
}
