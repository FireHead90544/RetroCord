import React from "react";
import styles from "@/components/css/WindowContainer.module.css";

interface WindowContainerProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const WindowContainer: React.FC<WindowContainerProps> = ({ title, children, style, contentStyle }) => (
  <div className={styles.windowContainer} style={style}>
    <div className={styles.windowHeader}>
      <span className={styles.title}>{title}</span>
      <div className={styles.windowButtons}>
        <button>-</button>
        <button>□</button>
        <button>X</button>
      </div>
    </div>
    <div className={styles.windowContent} style={contentStyle}>{children}</div>
  </div>
);

export default WindowContainer;
