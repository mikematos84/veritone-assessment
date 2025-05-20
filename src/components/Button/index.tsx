import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  title?: string;
  primary?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  title = "Button",
  primary = false,
  onClick,
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(styles.button, {
        [styles["button--primary"]]: primary,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
