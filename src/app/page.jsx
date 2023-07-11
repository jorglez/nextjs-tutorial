import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import LinkButton from "@/components/buttons/LinkButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Making your idea come to reality. We bring together the teams from the
          global tech industry.
        </p>
        <LinkButton link={"/portfolio"} text={"See our portfolio"} />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
