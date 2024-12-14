import React from "react";
import styles from "@/components/css/WindowContainer.module.css";

interface WindowContainerProps {
  title: string;
  children: React.ReactNode;
}

const WindowContainer: React.FC<WindowContainerProps> = ({ title, children }) => (
  <div className={styles.windowContainer}>
    <div className={styles.windowHeader}>
      <span className={styles.title}>{title}</span>
      <div className={styles.windowButtons}>
        <button>-</button>
        <button>□</button>
        <button>X</button>
      </div>
    </div>
    <div className={styles.windowContent}>{children}</div>
  </div>
);

export default WindowContainer;