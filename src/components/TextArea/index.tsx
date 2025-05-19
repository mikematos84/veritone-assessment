import classNames from "classnames";

import styles from "./TextArea.module.scss";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface TextAreaProps {
  maxLength?: number;
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { maxLength = 100, placeholder = "Description" }: TextAreaProps,
    ref
  ): JSX.Element => {
    const [characterCount, setCharacterCount] = useState(0);
    const innerRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    const handleInputChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const value = event.target.value;
      setCharacterCount(value.length);
    };

    return (
      <div className={classNames(styles.container)}>
        <textarea
          ref={innerRef}
          className={classNames(styles.textarea)}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={handleInputChange}
        />
        <span className={classNames(styles.characterCount)}>
          {characterCount}/{maxLength}
        </span>
      </div>
    );
  }
);

export default TextArea;
