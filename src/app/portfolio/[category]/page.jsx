import LinkButton from "@/components/buttons/LinkButton";
import styles from "./page.module.css";
import Image from "next/image";
const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget ultrices lectus. Maecenas fringilla hendrerit suscipit. Cras
            vitae massa non leo efficitur rhoncus. Ut sodales eget nibh sit amet
            luctus. Nullam non bibendum risus. Proin sed viverra purus, eget
            condimentum nulla. Nam eget nulla id elit elementum dapibus.
          </p>
          <LinkButton link={"#"} text={"see more"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
            alt="img"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget ultrices lectus. Maecenas fringilla hendrerit suscipit. Cras
            vitae massa non leo efficitur rhoncus. Ut sodales eget nibh sit amet
            luctus. Nullam non bibendum risus. Proin sed viverra purus, eget
            condimentum nulla. Nam eget nulla id elit elementum dapibus.
          </p>
          <LinkButton link={"#"} text={"see more"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
            alt="img"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget ultrices lectus. Maecenas fringilla hendrerit suscipit. Cras
            vitae massa non leo efficitur rhoncus. Ut sodales eget nibh sit amet
            luctus. Nullam non bibendum risus. Proin sed viverra purus, eget
            condimentum nulla. Nam eget nulla id elit elementum dapibus.
          </p>
          <LinkButton link={"#"} text={"see more"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
