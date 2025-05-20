import classNames from "classnames";

export interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import styles from "./TextInput.module.scss";
import { forwardRef } from "react";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder = "", value, onChange }, ref) => (
    <input
      type="text"
      className={classNames(styles.input)}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  )
);

export default TextInput;
