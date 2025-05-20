import classNames from "classnames";

export type Option = {
  label: string;
  value: string | number;
};

export interface SingleSelectProps {
  placeholder?: string;
  isOpen?: boolean;
  options: Option[];
  value: string | number;
  onChange?: (value: Option) => void;
}

import styles from "./SingleSelect.module.scss";
import { useState } from "react";

export default function SingleSelect({
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
}: SingleSelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.selector)} onClick={handleClick}>
        <div
          className={classNames(styles.label, {
            [styles.placeholder]: !value,
          })}
        >
          {value || placeholder}
        </div>
        <div className={classNames(styles.icon)}>
          <i className={classNames("material-icons")}>arrow_drop_down</i>
        </div>
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.listItem}
              value={option.label}
              onClick={() => {
                if (onChange) {
                  onChange(option);
                }
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
