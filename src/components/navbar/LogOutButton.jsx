"use client";
import styles from "./Navbar.module.css";
const LogOutButton = () => {
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <button onClick={handleLogout} className={styles.logout}>
      logout
    </button>
  );
};

export default LogOutButton;
