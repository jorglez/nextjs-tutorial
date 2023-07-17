import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
async function getUser(id) {
  const userId = Number(id) > 10 ? Math.round(id / 10) : id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  const user = await getUser(params.id);
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image alt="" height={40} width={40} className={styles.avatar} />
            <span className={styles.username}>{user.name}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={""} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}></p>
      </div>
    </div>
  );
};

export default BlogPost;
