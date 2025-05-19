import classNames from "classnames";
import Modal, { type ModalProps } from "../Modal";

import styles from "./AddItemModal.module.scss";
import TextArea from "../TextArea";

export interface AddItemModalProps extends ModalProps {}

export default function AddItemModal({
  isOpen = true,
  title = "Shopping List",
  overlay = true,
  onCloseHandler = () => {},
}: AddItemModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      overlay={overlay}
      onCloseHandler={onCloseHandler}
    >
      <div className={classNames(styles.content)}>
        <h1 className={classNames(styles.title)}>Add an Item</h1>
        <p className={classNames(styles.description)}>
          Add your new item below
        </p>
        <form className={classNames(styles.form)}>
          <input
            type="text"
            className={classNames(styles.input)}
            placeholder="Item Name"
          />
          <TextArea />
          <select className={classNames(styles.select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">4</option>
          </select>
        </form>
      </div>
    </Modal>
  );
}
