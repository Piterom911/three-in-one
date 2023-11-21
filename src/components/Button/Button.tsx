import Link from "next/link";
import styles from "./Button.module.css";

type TProps = {
  link: string;
  children: React.ReactNode;
  bordered: boolean;
};

export default function ButtonLink({ link, children, bordered }: TProps) {
  return (
    <Link
      className={`${styles.button} ${bordered ? "" : styles.colored}`}
      href={link}
    >
      {children}
    </Link>
  );
}
