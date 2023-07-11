import Image from "next/image";
import styles from "./Footer.module.css";
const evenSize = 30;
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> &#169; 2023 Jorge González</div>
      <div className={styles.imgContainer}>
        <Image
          src={"/1.png"}
          width={evenSize}
          height={evenSize}
          alt="JG Facebook account"
        />
        <Image
          src={"/2.png"}
          width={evenSize}
          height={evenSize}
          alt="JG instagram account"
        />
        <Image
          src={"/3.png"}
          width={evenSize}
          height={evenSize}
          alt="JG twitter account"
        />
        <Image
          src={"/4.png"}
          width={evenSize}
          height={evenSize}
          alt="JG youtube account"
        />
      </div>
    </div>
  );
};

export default Footer;
