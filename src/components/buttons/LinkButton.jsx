import Link from "next/link";
import styles from "./styles.module.css";
const LinkButton = ({ link, text }) => {
  return (
    <div>
      <Link href={link}>
        <button className={styles.button}>{text}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
