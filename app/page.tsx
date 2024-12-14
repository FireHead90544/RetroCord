import React from "react";
import styles from "./page.module.css";
import HeadingLogo from "@/components/HeadingLogo";
import LoginWindow from "@/components/LoginWindow";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeadingLogo />
      <LoginWindow />
    </div>
  );
};

export default Home;
