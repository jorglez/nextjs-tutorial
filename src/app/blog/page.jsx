import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.status);
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item.id}`}
          className={styles.container}
        >
          <div className={styles.imgContainer}>
            <Image
              priority={true}
              className={styles.img}
              height={250}
              width={400}
              src={
                "https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              }
              alt="img"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
