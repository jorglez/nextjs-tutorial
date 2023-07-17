import Link from "next/link";
import LogOutButton from "./LogOutButton";
import styles from "./Navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Site Logo
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <LogOutButton />
      </div>
    </div>
  );
};

export default NavBar;
