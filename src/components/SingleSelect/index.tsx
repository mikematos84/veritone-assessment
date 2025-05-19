import classNames from "classnames";

export type Option = {
  label: string;
  value: string;
};

export interface SingleSelectProps {
  placeholder?: string;
  isOpen?: boolean;
  options: Option[];
}

import styles from "./SingleSelect.module.scss";
import { useState } from "react";

export default function SingleSelect({
  placeholder = "Select an option",
  options = [],
}: SingleSelectProps): JSX.Element {
  const [value, setValue] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    console.log(option.label, option.value);
    setValue(option.label);
    setIsOpen(false);
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
          {options.map((item) => (
            <li
              key={item.value}
              className={styles.listItem}
              value={item.label}
              onClick={() => handleOptionClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
