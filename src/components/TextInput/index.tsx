import classNames from "classnames";

export interface TextInputProps {
  placeholder?: string;
}

import styles from "./TextInput.module.scss";
import { forwardRef } from "react";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder = "" }, ref) => (
    <input
      type="text"
      className={classNames(styles.input)}
      placeholder={placeholder}
      ref={ref}
    />
  )
);

export default TextInput;
