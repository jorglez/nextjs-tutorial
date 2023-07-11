import Image from "next/image";
import styles from "./styles.module.css";
import LinkButton from "@/components/buttons/LinkButton";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who are we?</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius pretium elementum. Suspendisse malesuada ipsum in leo
            molestie ultrices. Etiam lacus tortor, gravida eget lacus quis,
            fringilla ultricies felis. Cras sollicitudin facilisis magna, quis
            molestie felis eleifend id. In ultrices varius quam, ut placerat ex
            dictum vitae. Cras eleifend sem.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>What do we do?</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius pretium elementum. Suspendisse malesuada ipsum in leo
            molestie ultrices. Etiam lacus tortor, gravida eget lacus quis,
            fringilla ultricies felis. Cras sollicitudin facilisis magna, quis
            molestie felis eleifend id. In ultrices varius quam, ut placerat ex
            dictum vitae. Cras eleifend sem.
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius pretium elementum.
          </p>
          <br />
          <LinkButton link={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
