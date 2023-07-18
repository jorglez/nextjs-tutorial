import LinkButton from "@/components/buttons/LinkButton";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = async ({ params }) => {
  const data = await getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <LinkButton link={"#"} text={"see more"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
