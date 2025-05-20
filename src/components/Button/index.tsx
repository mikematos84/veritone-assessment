import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  text = "Button",
  variant = "primary",
  onClick,
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(styles.button, styles[variant])}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
