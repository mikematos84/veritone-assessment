import classNames from "classnames";

import styles from "./Modal.module.scss";
import Button from "../Button";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  overlay?: boolean;
  children?: JSX.Element | null;
  onCloseHandler?: () => void;
}

export default function Modal({
  isOpen = true,
  title = "Shopping List",
  overlay = true,
  children = null,
  onCloseHandler,
}: ModalProps): JSX.Element | null {
  if (!isOpen) return null;
  return (
    <>
      {overlay && <div className={classNames(styles.overlay)} />}
      <div
        data-testid="modal"
        className={classNames(styles.modal, {
          [styles["modal--footer"]]: true,
        })}
      >
        <header className={classNames(styles.header)}>
          <h2 className={classNames(styles.title)}>{title}</h2>
          <i
            className={classNames("material-icons", styles["close--button"])}
            onClick={onCloseHandler}
          >
            last_page
          </i>
        </header>
        <div className={classNames(styles.content)}>{children && children}</div>
        <footer
          className={classNames(styles.footer, {
            [styles["footer--border"]]: true,
          })}
        >
          <Button title="Cancel" />
          <Button title="Add Task" primary />
        </footer>
      </div>
    </>
  );
}
