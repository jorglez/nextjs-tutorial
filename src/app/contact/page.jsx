import Image from "next/image";
import styles from "./page.module.css";
import LinkButton from "@/components/buttons/LinkButton";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt="contact img"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={styles.textAreea}
          ></textarea>
          <LinkButton link={"#"} text={"send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
