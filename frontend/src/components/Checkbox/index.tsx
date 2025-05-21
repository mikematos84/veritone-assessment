import classNames from "classnames";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  className?: string;
  onChange?: () => void;
}

export function Checkbox({
  checked = false,
  label,
  onChange,
  className,
}: CheckboxProps) {
  return (
    <div className={styles.container}>
      <i
        className={classNames(
          styles.checkbox,
          {
            ["material-icons-outlined"]: !checked,
            ["material-icons"]: checked,
            [styles.checkboxChecked]: checked,
          },
          className
        )}
        onClick={() => {
          if (onChange) {
            onChange();
          }
        }}
      >
        {!checked ? "check_box_outline_blank" : "check_box"}
      </i>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
